# Sken digitální vyspělosti

Aplikace pro zobrazení výstupů z [dotazníku digitální vyspělosti](https://sken.nezisk.digital/). Napsaná v [Next.js](https://nextjs.org), běží na [Vercelu](https://vercel.com). Data se načítají z [Airtable](https://airtable.com), pro LLM shrnutí používáme [OpenAI](https://openai.com).

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

Klíčovou součástí skenu je formulář ve Filloutu. Kromě originálního URL od Filloutu se dá zobrazit též na URL `sken.nezisk.digital/vyplnit`. Formulář podporuje následující URL parametry:

- `skip_results` – pokud je nastavený na libovolnou neprázdnou hodnotu, nebudeme po vyplnění posílat odkaz na výsledky hodnocení. Používáme v situacích, kdy chceme nechat sken vyplnit víc lidí z jedné organizace a až následně jim hromadně poslat výsledky za celou organizaci.
- `source` – aktuálně používáme pouze ve variantě `source=kurz` (kurz Nezisk.Digital), kde se přepne na výběr organizace z předem připraveného seznamu.
- `organization_name` – předvyplní název organizace na záložce Profil organizace.

## Stránky

### Homepage

Obsahuje základní info o projektu a odkazy na spuštění skenu (Fillout) a výsledky první vlny.


### Výsledky první vlny

Na `/vysledky` je shrnutí dat z první vlny skenu v létě 2025, celkem 164 organizací. Výsledky jsou statické, tedy nejsou počítané z živých dat skenu – když se oskenuje nová organizace, souhrnné výsledky se nemění.

### Výsledky konkrétního skenu

Na `/vysledky/:id` jsou výsledky jednoho individuálního skenu. Výsledky prezentujeme ve dvou variantách:

Na úvodní stránce jsou výsledky shrnuté pomocí velkého jazykového modelu (LLM). Tohle hodnocení se opírá ještě o dva meziprodukty: na `/vysledky/:id/summary.md` je shrnutí výsledků ve formátu Markdown vhodné pro vyhodnocení jazykovým modelem a na `/vysledky/:id/report.md` je výsledný report od jazykového modelu, též ve formátu Markdown.

Na podstránce `/vysledky/:id/cisla` je základní vizualizace a shrnutí výsledků skenu pomocí grafů a textu. (Tohle byla původně hlavní stránka výsledků skenu, než jsme přidali funkci shrnutí přes jazykový model.)

### Průměrné výsledky organizace

Možnost zobrazit průměrné výsledky organizace je experimentální funkce, žije na `/organizace/:hash`, kde `hash` je hešovaný název organizace, aby nešel snadno uhodnout. Zde nepodporujeme shrnutí jazykovým modelem a ukazujeme pouze průměrné hodnocení organizace ve formě čísel a grafů.

## Kontakt

Model digitální vyspělosti: <matej.malecha@cesko.digital>

Kód: <zoul@cesko.digital>
