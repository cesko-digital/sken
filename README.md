# Sken digitální vyspělosti

Jednoduchá aplikace pro zobrazení výstupů z [dotazníku digitální vyspělosti](https://sken.nezisk.digital/).

Napsaná v [Next.js](https://nextjs.org), běží na [Vercelu](https://vercel.com). Data se načítají z [Airtable](https://airtable.com).

## Lokální vývoj

Udělej si kopii repa:

```bash
git clone https://github.com/cesko-digital/sken
```

Nainstaluj závislosti:

```bash
npm i
```

A mělo by to jít spustit:

```bash
npm run dev
```

Pro lokální vývoj není potřeba přístup do databáze, na URL `/vysledky/sample` ([živá ukázka](https://sken.nezisk.digital/vysledky/sample)) je ukázkový dataset.

## Parametry formuláře

Zásadní součástí skenu je formulář ve Filloutu. Kromě originálního URL od Filloutu se dá zobrazit též na URL `sken.nezisk.digital/vyplnit`. Formulář podporuje následující URL parametry:

- `skip_results` – pokud je nastavený na libovolnou neprázdnou hodnotu, nebudeme po vyplnění posílat odkaz na výsledky hodnocení. Používáme v situacích, kdy chceme nechat sken vyplnit víc lidí z jedné organizace a až následně jim hromadně poslat výsledky za celou organizaci.
- `source` – aktuálně používáme pouze ve variantě `source=kurz` (kurz Nezisk.Digital), kde se přepne na výběr organizace z předem připraveného seznamu.
- `organization_name` – předvyplní název organizace na záložce Profil organizace.

## Kontakt

Model digitální vyspělosti: <matej.malecha@cesko.digital>

Kód: <zoul@cesko.digital>
