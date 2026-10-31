<?php
// Skopírujte na config.php a doplňte údaje. config.php sa nikdy neukladá do gitu.
// Na nasadenie cez GitHub Actions sa config.php vytvorí automaticky z tajných kľúčov repozitára.
return [
    'driver' => 'mysql',            // 'mysql' (hosting) alebo 'sqlite' (lokálne testy)
    'host'   => 'localhost',
    // 'port' => 3306,                         // ak hosting používa iný port databázy
    'name'   => 'databaza',
    'user'   => 'pouzivatel',
    'pass'   => 'heslo',
    // 'path' => '/cesta/k/budget.sqlite',   // len pre driver 'sqlite'
    // Voliteľné: počiatočné dlhy pre novú domácnosť, [{"sub":"id","name":"Názov","balance":1000}, ...]
    'seed_debts' => [],
];
