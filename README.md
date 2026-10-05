# Rodinný rozpočet

Rodinná aplikácia na kontrolu rozpočtu pre dvoch (J a I). Statická PWA bez build kroku a bez prihlasovania, dáta sú v Supabase a synchronizujú sa medzi všetkými zariadeniami.

## Ako to funguje

- **Bez hesiel.** Domácnosť má tajný kód (32 znakov). Zariadenie, ktoré ho pozná, vidí a upravuje rozpočet.
- **Prvé zariadenie** vytvorí domácnosť a dostane kód. V karte Plán ho nájdete aj ako odkaz.
- **Ďalšie zariadenia** (mobil, počítač, druhý člen) otvoria odkaz alebo kód zadajú. Kód sa uloží v prehliadači.
- **Synchronizácia:** každý zápis ide hneď do databázy. Ostatné zariadenia si zmeny načítajú do 15 sekúnd, pri otvorení aplikácie a po obnovení pripojenia.
- Kód je ako heslo. Kto ho má, má plný prístup, preto ho nezdieľajte nikde inde. Pri úniku vytvorte novú domácnosť.

## Rozloženie

- Mobil a úzke okno: jeden stĺpec, navigácia dole.
- Počítač (šírka od 1000 px): bočný panel s navigáciou, obsah v dvoch stĺpcoch (v širokom okne v troch), okná na zápis a úpravu mesiaca ako dialóg v strede.

## Štruktúra

- `index.html`, `app.css`, `app.js`: aplikácia (čistý JavaScript, bez knižníc)
- `sw.js`, `manifest.webmanifest`, `icons/`: PWA (inštalácia na plochu)
- `supabase/migrations/`: schéma databázy a funkcie

## Databáza (Supabase)

Projekt `rodinny-rozpocet`, eu-central-1. Dáta sú v schéme `budget`, ktorá nie je vystavená cez API. Anonymný kľúč v `app.js` vie volať iba tieto funkcie, každá vyžaduje kód domácnosti:

`create_household`, `get_state`, `add_transaction`, `add_income`, `set_limit`, `save_month`, `switch_month`.

Staré tabuľky vo verejnej schéme (zostali z prvej verzie s účtami) sú uzamknuté a nepoužívajú sa. Dajú sa zmazať v dashboarde.

## Nasadenie

Súbory sú statické, stačí ich vystaviť na ľubovoľnom hostingu. Workflow `.github/workflows/pages.yml` ich publikuje cez GitHub Pages (Settings > Pages > Source: GitHub Actions).

## Čo aplikácia nerobí

- Neposiela e-mailový report. Report je v Analytike.
- Zápis bez internetu sa neukladá na neskôr.
