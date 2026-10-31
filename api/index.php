<?php
declare(strict_types=1);
require __DIR__ . '/db.php';

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') { fail(405, 'POST only'); }
$raw = file_get_contents('php://input');
if (strlen($raw) > 2_000_000) { fail(413, 'too large'); }
$in = $raw === '' ? [] : json_decode($raw, true);
if (!is_array($in)) { fail(400, 'invalid json'); }
$fn = (string)($_GET['fn'] ?? '');

const WHO = ['J', 'I'];

function client_ip(): string { return substr((string)($_SERVER['REMOTE_ADDR'] ?? '0'), 0, 64); }

// Jednoduché obmedzenie počtu pokusov z jednej adresy.
function throttle(string $bucket, int $limit, int $window): void {
    $ip = client_ip(); $now = time();
    q('DELETE FROM throttle WHERE ts < ?', [$now - 86400]);
    $n = (int)scalar('SELECT COUNT(*) FROM throttle WHERE ip = ? AND bucket = ? AND ts > ?', [$ip, $bucket, $now - $window]);
    if ($n >= $limit) { fail(429, 'too many requests'); }
}
function note_attempt(string $bucket): void { q('INSERT INTO throttle (ip, bucket, ts) VALUES (?,?,?)', [client_ip(), $bucket, time()]); }

function need_hh($code): string {
    throttle('bad', 40, 600);
    $c = strtolower(trim((string)$code));
    $id = $c === '' ? null : scalar('SELECT id FROM households WHERE access_code = ?', [$c]);
    if (!$id) { note_attempt('bad'); fail(400, 'invalid code'); }
    return (string)$id;
}
function need_month(string $hid, $mid): string {
    $m = (string)$mid;
    if (!scalar('SELECT 1 FROM months WHERE id = ? AND household_id = ?', [$m, $hid])) { fail(400, 'invalid month'); }
    return $m;
}
function num($v, bool $nullable = false) {
    if ($v === null || $v === '') { if ($nullable) { return null; } fail(400, 'invalid number'); }
    if (!is_numeric($v)) { fail(400, 'invalid number'); }
    return round((float)$v, 2);
}
function date_ok($v): string {
    $d = DateTime::createFromFormat('Y-m-d', (string)$v);
    if (!$d || $d->format('Y-m-d') !== (string)$v) { fail(400, 'invalid date'); }
    return (string)$v;
}
function who_ok($v): string { if (!in_array($v, WHO, true)) { fail(400, 'invalid who'); } return (string)$v; }
function txt($v, int $max): string { return mb_substr((string)($v ?? ''), 0, $max); }
function f($v) { return $v === null ? null : (float)$v; }

$FN = [];

$FN['health'] = function (array $a) {
    q('SELECT 1');
    return ['ok' => true, 'driver' => cfg()['driver'] ?? 'mysql'];
};

$FN['create_household'] = function (array $a) {
    throttle('create', 10, 3600);
    note_attempt('create');
    $id = uuid();
    $code = bin2hex(random_bytes(16));
    db()->beginTransaction();
    try {
        q('INSERT INTO households (id, access_code) VALUES (?,?)', [$id, $code]);
        $today = gmdate('Y-m-d');
        foreach ((array)(cfg()['seed_debts'] ?? []) as $d) {
            if (!isset($d['sub'], $d['name'], $d['balance'])) { continue; }
            q('INSERT INTO debts (household_id, sub, name, balance, as_of) VALUES (?,?,?,?,?)', [$id, txt($d['sub'], 32), txt($d['name'], 100), (float)$d['balance'], $today]);
        }
        db()->commit();
    } catch (Throwable $e) { db()->rollBack(); throw $e; }
    return $code;
};

$FN['get_state'] = function (array $a) {
    $hid = need_hh($a['p_code'] ?? '');
    $months = array_map(fn($m) => ['id' => $m['id'], 'y' => (int)$m['y'], 'mo' => (int)$m['mo'], 'status' => $m['status'], 'seq' => (int)$m['seq'], 'inc_j' => f($m['inc_j']), 'inc_i' => f($m['inc_i'])],
        all('SELECT id, y, mo, status, seq, inc_j, inc_i FROM months WHERE household_id = ? ORDER BY y, mo', [$hid]));
    $limits = array_map(fn($l) => ['month_id' => $l['month_id'], 'key' => $l['item_key'], 'amount' => f($l['amount'])],
        all('SELECT l.month_id, l.item_key, l.amount FROM month_limits l JOIN months m ON m.id = l.month_id WHERE m.household_id = ? AND l.active = 1', [$hid]));
    $plans = array_map(fn($p) => ['month_id' => $p['month_id'], 'day' => (int)$p['day'], 'name' => $p['name'], 'key' => $p['item_key'], 'amount' => f($p['amount']), 'sort' => (int)$p['sort']],
        all('SELECT p.month_id, p.day, p.name, p.item_key, p.amount, p.sort FROM planned_payments p JOIN months m ON m.id = p.month_id WHERE m.household_id = ? AND p.active = 1 ORDER BY p.sort', [$hid]));
    $tx = array_map(fn($t) => ['id' => $t['id'], 'month_id' => $t['month_id'], 'dt' => $t['dt'], 'cat' => $t['cat'], 'sub' => $t['sub'], 'amount' => f($t['amount']), 'who' => $t['who'], 'note' => $t['note']],
        all('SELECT id, month_id, dt, cat, sub, amount, who, note FROM transactions WHERE household_id = ? ORDER BY dt, created_at, id', [$hid]));
    $inc = array_map(fn($t) => ['id' => $t['id'], 'month_id' => $t['month_id'], 'dt' => $t['dt'], 'amount' => f($t['amount']), 'who' => $t['who'], 'note' => $t['note']],
        all('SELECT id, month_id, dt, amount, who, note FROM incomes WHERE household_id = ? ORDER BY dt, created_at, id', [$hid]));
    $debts = array_map(fn($d) => ['sub' => $d['sub'], 'name' => $d['name'], 'balance' => f($d['balance']), 'as_of' => $d['as_of']],
        all('SELECT sub, name, balance, as_of FROM debts WHERE household_id = ? ORDER BY sub', [$hid]));
    $items = array_map(fn($i) => ['key' => $i['item_key'], 'stav' => f($i['stav']), 'auto' => (bool)$i['auto'], 'as_of' => $i['as_of']],
        all('SELECT item_key, stav, auto, as_of FROM items WHERE household_id = ?', [$hid]));
    return ['months' => $months, 'limits' => $limits, 'plans' => $plans, 'transactions' => $tx, 'incomes' => $inc, 'debts' => $debts, 'items' => $items];
};

$FN['add_transaction'] = function (array $a) {
    $hid = need_hh($a['p_code'] ?? '');
    $mid = need_month($hid, $a['p_month'] ?? '');
    $amount = num($a['p_amount'] ?? null);
    if ($amount <= 0) { fail(400, 'invalid amount'); }
    $row = ['id' => uuid(), 'month_id' => $mid, 'dt' => date_ok($a['p_dt'] ?? ''), 'cat' => txt($a['p_cat'] ?? '', 16), 'sub' => txt($a['p_sub'] ?? '', 32), 'amount' => $amount, 'who' => who_ok($a['p_who'] ?? ''), 'note' => txt($a['p_note'] ?? '', 300)];
    if ($row['cat'] === '') { fail(400, 'invalid category'); }
    q('INSERT INTO transactions (id, household_id, month_id, dt, cat, sub, amount, who, note) VALUES (?,?,?,?,?,?,?,?,?)',
      [$row['id'], $hid, $row['month_id'], $row['dt'], $row['cat'], $row['sub'], $row['amount'], $row['who'], $row['note']]);
    return $row;
};

$FN['add_income'] = function (array $a) {
    $hid = need_hh($a['p_code'] ?? '');
    $mid = need_month($hid, $a['p_month'] ?? '');
    $amount = num($a['p_amount'] ?? null);
    if ($amount <= 0) { fail(400, 'invalid amount'); }
    $row = ['id' => uuid(), 'month_id' => $mid, 'dt' => date_ok($a['p_dt'] ?? ''), 'amount' => $amount, 'who' => who_ok($a['p_who'] ?? ''), 'note' => txt($a['p_note'] ?? '', 300)];
    q('INSERT INTO incomes (id, household_id, month_id, dt, amount, who, note) VALUES (?,?,?,?,?,?,?)',
      [$row['id'], $hid, $row['month_id'], $row['dt'], $row['amount'], $row['who'], $row['note']]);
    return $row;
};

$FN['set_limit'] = function (array $a) {
    $hid = need_hh($a['p_code'] ?? '');
    $mid = need_month($hid, $a['p_month'] ?? '');
    $key = txt($a['p_key'] ?? '', 64);
    if ($key === '') { fail(400, 'invalid key'); }
    upsert('month_limits', ['month_id' => $mid, 'item_key' => $key, 'amount' => num($a['p_amount'] ?? null, true), 'active' => 1], ['month_id', 'item_key']);
    return null;
};

$FN['set_item'] = function (array $a) {
    $hid = need_hh($a['p_code'] ?? '');
    $key = txt($a['p_key'] ?? '', 64);
    if ($key === '') { fail(400, 'invalid key'); }
    $stav = num($a['p_stav'] ?? null, true);
    $auto = !empty($a['p_auto']) ? 1 : 0;
    $old = one('SELECT stav, auto, as_of FROM items WHERE household_id = ? AND item_key = ?', [$hid, $key]);
    $asOf = gmdate('Y-m-d');
    if ($old && (float)$old['stav'] === (float)$stav && ($old['stav'] === null) === ($stav === null) && (int)$old['auto'] === $auto) { $asOf = $old['as_of']; }
    upsert('items', ['household_id' => $hid, 'item_key' => $key, 'stav' => $stav, 'auto' => $auto, 'as_of' => $asOf], ['household_id', 'item_key']);
    return null;
};

$FN['save_month'] = function (array $a) {
    $hid = need_hh($a['p_code'] ?? '');
    $p = $a['p_month'] ?? null;
    if (!is_array($p)) { fail(400, 'invalid month'); }
    $pdo = db();
    $pdo->beginTransaction();
    try {
        $mid = !empty($p['id']) ? need_month($hid, $p['id']) : null;
        $incJ = num($p['inc_j'] ?? 0); $incI = num($p['inc_i'] ?? 0);
        if ($incJ < 0 || $incI < 0) { fail(400, 'invalid income'); }
        if ($mid === null) {
            $y = (int)($p['y'] ?? 0); $mo = (int)($p['mo'] ?? -1);
            if ($y < 2000 || $y > 2100 || $mo < 0 || $mo > 11) { fail(400, 'invalid month'); }
            if (scalar('SELECT 1 FROM months WHERE household_id = ? AND y = ? AND mo = ?', [$hid, $y, $mo])) { fail(400, 'month exists'); }
            $hasActive = scalar("SELECT 1 FROM months WHERE household_id = ? AND status = 'active'", [$hid]);
            $seq = (int)scalar('SELECT COALESCE(MAX(seq), 0) FROM months WHERE household_id = ?', [$hid]) + 1;
            $mid = uuid();
            q('INSERT INTO months (id, household_id, y, mo, status, seq, inc_j, inc_i) VALUES (?,?,?,?,?,?,?,?)', [$mid, $hid, $y, $mo, $hasActive ? 'planned' : 'active', $seq, $incJ, $incI]);
        } else {
            q('UPDATE months SET inc_j = ?, inc_i = ? WHERE id = ?', [$incJ, $incI, $mid]);
            q('UPDATE month_limits SET active = 0 WHERE month_id = ?', [$mid]);
        }
        foreach ((array)($p['limits'] ?? []) as $key => $amount) {
            $key = txt((string)$key, 64);
            if ($key === '') { continue; }
            upsert('month_limits', ['month_id' => $mid, 'item_key' => $key, 'amount' => num($amount, true), 'active' => 1], ['month_id', 'item_key']);
        }
        $plan = array_values((array)($p['plan'] ?? []));
        foreach ($plan as $i => $x) {
            $day = (int)($x['d'] ?? 0);
            if ($day < 1 || $day > 31) { fail(400, 'invalid day'); }
            $row = ['month_id' => $mid, 'sort' => $i, 'id' => uuid(), 'day' => $day, 'name' => txt($x['name'] ?? '', 200), 'item_key' => txt($x['key'] ?? '', 64), 'amount' => num($x['amt'] ?? null, true), 'active' => 1];
            upsert('planned_payments', $row, ['month_id', 'sort']);
        }
        q('UPDATE planned_payments SET active = 0 WHERE month_id = ? AND sort >= ?', [$mid, count($plan)]);
        $pdo->commit();
        return $mid;
    } catch (Throwable $e) { if ($pdo->inTransaction()) { $pdo->rollBack(); } throw $e; }
};

$FN['switch_month'] = function (array $a) {
    $hid = need_hh($a['p_code'] ?? '');
    $mid = need_month($hid, $a['p_month'] ?? '');
    if (!scalar("SELECT 1 FROM months WHERE id = ? AND status = 'planned'", [$mid])) { fail(400, 'month is not planned'); }
    $pdo = db();
    $pdo->beginTransaction();
    try {
        q("UPDATE months SET status = 'closed' WHERE household_id = ? AND status = 'active'", [$hid]);
        q("UPDATE months SET status = 'active' WHERE id = ?", [$mid]);
        $pdo->commit();
    } catch (Throwable $e) { if ($pdo->inTransaction()) { $pdo->rollBack(); } throw $e; }
    return null;
};

if (!isset($FN[$fn])) { fail(404, 'unknown function'); }
try {
    $out = $FN[$fn]($in);
    echo json_encode($out, JSON_UNESCAPED_UNICODE | JSON_PRESERVE_ZERO_FRACTION);
} catch (Throwable $e) {
    error_log('API error in ' . $fn . ': ' . $e->getMessage());
    fail(500, 'server error');
}
