<?php
declare(strict_types=1);

function cfg(): array {
    static $c = null;
    if ($c === null) {
        $f = __DIR__ . '/config.php';
        if (!is_file($f)) { fail(500, 'config missing'); }
        $c = require $f;
    }
    return $c;
}

function fail(int $status, string $message): void {
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['message' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

function is_mysql(): bool { return (cfg()['driver'] ?? 'mysql') === 'mysql'; }

function db(): PDO {
    static $pdo = null;
    if ($pdo) { return $pdo; }
    $c = cfg();
    try {
        if (is_mysql()) {
            $pdo = new PDO('mysql:host=' . $c['host'] . ';dbname=' . $c['name'] . ';charset=utf8mb4', $c['user'], $c['pass'], [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ]);
            $pdo->exec("SET time_zone = '+00:00'");
        } else {
            $pdo = new PDO('sqlite:' . $c['path'], null, null, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            ]);
            $pdo->exec('PRAGMA foreign_keys = ON');
        }
    } catch (Throwable $e) {
        error_log('DB connect failed: ' . $e->getMessage());
        fail(503, 'database unavailable');
    }
    ensure_schema($pdo);
    return $pdo;
}

function ensure_schema(PDO $pdo): void {
    // Rýchla kontrola, či tabuľky už existujú.
    try { $pdo->query('SELECT 1 FROM households LIMIT 1'); return; } catch (Throwable $e) { /* vytvoríme */ }
    $sfx = is_mysql() ? ' ENGINE=InnoDB DEFAULT CHARSET=utf8mb4' : '';
    $stmts = [
        "CREATE TABLE IF NOT EXISTS households (id CHAR(36) PRIMARY KEY, access_code VARCHAR(64) NOT NULL UNIQUE, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)$sfx",
        "CREATE TABLE IF NOT EXISTS months (id CHAR(36) PRIMARY KEY, household_id CHAR(36) NOT NULL, y INT NOT NULL, mo INT NOT NULL, status VARCHAR(10) NOT NULL, seq INT NOT NULL DEFAULT 1, inc_j DECIMAL(12,2) NOT NULL DEFAULT 0, inc_i DECIMAL(12,2) NOT NULL DEFAULT 0, created_at DATETIME DEFAULT CURRENT_TIMESTAMP, UNIQUE (household_id, y, mo), FOREIGN KEY (household_id) REFERENCES households(id) ON DELETE CASCADE)$sfx",
        "CREATE TABLE IF NOT EXISTS month_limits (month_id CHAR(36) NOT NULL, item_key VARCHAR(64) NOT NULL, amount DECIMAL(12,2) NULL, active TINYINT NOT NULL DEFAULT 1, PRIMARY KEY (month_id, item_key), FOREIGN KEY (month_id) REFERENCES months(id) ON DELETE CASCADE)$sfx",
        "CREATE TABLE IF NOT EXISTS planned_payments (id CHAR(36) PRIMARY KEY, month_id CHAR(36) NOT NULL, day INT NOT NULL, name VARCHAR(200) NOT NULL DEFAULT '', item_key VARCHAR(64) NOT NULL, amount DECIMAL(12,2) NULL, sort INT NOT NULL DEFAULT 0, active TINYINT NOT NULL DEFAULT 1, UNIQUE (month_id, sort), FOREIGN KEY (month_id) REFERENCES months(id) ON DELETE CASCADE)$sfx",
        "CREATE TABLE IF NOT EXISTS transactions (id CHAR(36) PRIMARY KEY, household_id CHAR(36) NOT NULL, month_id CHAR(36) NOT NULL, dt DATE NOT NULL, cat VARCHAR(16) NOT NULL, sub VARCHAR(32) NOT NULL DEFAULT '', amount DECIMAL(12,2) NOT NULL, who CHAR(1) NOT NULL, note VARCHAR(300) NOT NULL DEFAULT '', created_at DATETIME DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY (household_id) REFERENCES households(id) ON DELETE CASCADE, FOREIGN KEY (month_id) REFERENCES months(id) ON DELETE CASCADE)$sfx",
        "CREATE TABLE IF NOT EXISTS incomes (id CHAR(36) PRIMARY KEY, household_id CHAR(36) NOT NULL, month_id CHAR(36) NOT NULL, dt DATE NOT NULL, amount DECIMAL(12,2) NOT NULL, who CHAR(1) NOT NULL, note VARCHAR(300) NOT NULL DEFAULT '', created_at DATETIME DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY (household_id) REFERENCES households(id) ON DELETE CASCADE, FOREIGN KEY (month_id) REFERENCES months(id) ON DELETE CASCADE)$sfx",
        "CREATE TABLE IF NOT EXISTS debts (household_id CHAR(36) NOT NULL, sub VARCHAR(32) NOT NULL, name VARCHAR(100) NOT NULL, balance DECIMAL(12,2) NOT NULL, as_of DATE NOT NULL, PRIMARY KEY (household_id, sub), FOREIGN KEY (household_id) REFERENCES households(id) ON DELETE CASCADE)$sfx",
        "CREATE TABLE IF NOT EXISTS items (household_id CHAR(36) NOT NULL, item_key VARCHAR(64) NOT NULL, stav DECIMAL(12,2) NULL, auto TINYINT NOT NULL DEFAULT 0, as_of DATE NOT NULL, PRIMARY KEY (household_id, item_key), FOREIGN KEY (household_id) REFERENCES households(id) ON DELETE CASCADE)$sfx",
        "CREATE TABLE IF NOT EXISTS throttle (ip VARCHAR(64) NOT NULL, bucket VARCHAR(16) NOT NULL, ts BIGINT NOT NULL)$sfx",
    ];
    foreach ($stmts as $s) { $pdo->exec($s); }
    foreach (['CREATE INDEX idx_tx_hh ON transactions (household_id, dt)',
              'CREATE INDEX idx_inc_hh ON incomes (household_id, dt)',
              'CREATE INDEX idx_throttle ON throttle (ip, bucket, ts)'] as $ix) {
        try { $pdo->exec($ix); } catch (Throwable $e) { /* index už existuje */ }
    }
}

function q(string $sql, array $args = []): PDOStatement {
    $st = db()->prepare($sql);
    $st->execute($args);
    return $st;
}
function one(string $sql, array $args = []) { $r = q($sql, $args)->fetch(); return $r === false ? null : $r; }
function all(string $sql, array $args = []): array { return q($sql, $args)->fetchAll(); }
function scalar(string $sql, array $args = []) { $r = q($sql, $args)->fetch(PDO::FETCH_NUM); return $r ? $r[0] : null; }

function uuid(): string {
    $b = random_bytes(16);
    $b[6] = chr((ord($b[6]) & 0x0f) | 0x40);
    $b[8] = chr((ord($b[8]) & 0x3f) | 0x80);
    $h = bin2hex($b);
    return substr($h, 0, 8) . '-' . substr($h, 8, 4) . '-' . substr($h, 12, 4) . '-' . substr($h, 16, 4) . '-' . substr($h, 20);
}

// INSERT ... ON DUPLICATE KEY UPDATE (MySQL) / ON CONFLICT DO UPDATE (SQLite)
function upsert(string $table, array $row, array $keys): void {
    $cols = array_keys($row);
    $ph = implode(',', array_fill(0, count($cols), '?'));
    $upd = array_values(array_diff($cols, $keys));
    if (is_mysql()) {
        $set = implode(',', array_map(fn($c) => "$c=VALUES($c)", $upd));
        $sql = "INSERT INTO $table (" . implode(',', $cols) . ") VALUES ($ph) ON DUPLICATE KEY UPDATE $set";
    } else {
        $set = implode(',', array_map(fn($c) => "$c=excluded.$c", $upd));
        $sql = "INSERT INTO $table (" . implode(',', $cols) . ") VALUES ($ph) ON CONFLICT(" . implode(',', $keys) . ") DO UPDATE SET $set";
    }
    q($sql, array_values($row));
}
