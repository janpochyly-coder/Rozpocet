# Rodinný rozpočet

Rodinná aplikácia na kontrolu rozpočtu pre dvoch (J a I). Beží v prehliadači (Chrome) na `https://ucto.vrkociaren.sk/`, dáta sú v databáze MySQL na hostingu a synchronizujú sa medzi všetkými zariadeniami. Bez prihlasovania, zariadenia sa spájajú tajným kódom domácnosti.

## Ako to funguje

- **Bez hesiel.** Domácnosť má tajný kód (32 znakov). Zariadenie, ktoré ho pozná, vidí a upravuje rozpočet. Kód je ako heslo, nezdieľajte ho. Pri úniku vytvorte novú domácnosť.
- **Prvé zariadenie** vytvorí domácnosť a dostane kód (karta Plán, Zdieľanie a zariadenie).
- **Ďalšie zariadenia** otvoria odkaz `https://ucto.vrkociaren.sk/#k=KÓD` alebo kód zadajú. Kód sa uloží v prehliadači (pre každú doménu zvlášť).
- Každý zápis ide hneď do databázy. Ostatné zariadenia si zmeny načítajú do 15 sekúnd, pri otvorení aplikácie a po obnovení pripojenia.

## Štruktúra

- `index.html`, `app.css`, `app.js`: aplikácia (čistý JavaScript, bez knižníc)
- `sw.js`, `manifest.webmanifest`, `icons/`: PWA (nie je povinné inštalovať)
- `api/`: API v PHP (`index.php`, `db.php`), tabuľky sa vytvoria samy pri prvom volaní
- `.htaccess`: základné zabezpečenie na Apache hostingu

## Nasadenie na Websupport

Workflow `.github/workflows/deploy-websupport.yml` nahrá súbory cez FTP(S) po každom pushi do `main`. Tajné kľúče (Settings > Secrets and variables > Actions):

| Kľúč | Význam |
|---|---|
| `FTP_SERVER` | adresa FTP servera |
| `FTP_USERNAME`, `FTP_PASSWORD` | FTP prístup |
| `FTP_DIR` | cieľový priečinok subdomény na serveri (končí lomkou, napr. `/ucto/`) |
| `FTP_PROTOCOL` (voliteľný) | `ftps` (predvolené) alebo `ftp` |
| `FTP_PORT` (voliteľný) | predvolene 21 |
| `DB_HOST`, `DB_NAME`, `DB_USER`, `DB_PASS` | údaje MySQL databázy z administrácie hostingu |
| `SEED_DEBTS_JSON` (voliteľný) | počiatočné dlhy pre novú domácnosť, napr. `[{"sub":"id","name":"Názov","balance":1000}]` |

Súbor `api/config.php` sa vytvorí pri nasadení z týchto kľúčov a nie je v gite.

Kontrola po nasadení: `curl -X POST "https://ucto.vrkociaren.sk/api/index.php?fn=health"` vráti `{"ok":true,"driver":"mysql"}`.

## Lokálne spustenie a testy

```
cp api/config.sample.php api/config.php     # a nastavte driver sqlite s cestou k súboru
php -S 127.0.0.1:8777 -t .
```

## Zálohy

Databázu zálohujte v administrácii hostingu (export z phpMyAdmin) alebo nastavte automatickú zálohu u poskytovateľa.

## Čo aplikácia nerobí

- Neposiela e-mailový report. Report je v Analytike.
- Zápis bez internetu sa neukladá na neskôr.
