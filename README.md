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

## Úpravy obsahu

V principu jde hlavně o textový dokument s grafy, takže hlavní část obsahu je [tento soubor](https://github.com/cesko-digital/sken/blob/main/app/vysledky/%5Bid%5D/content.md) v [Markdownu](https://en.wikipedia.org/wiki/Markdown), parsovaný pomocí [Markdoc](https://markdoc.dev).

Kromě standardních Markdown značek dokument podporuje proměnné a značky pro grafy.

### Proměnné

- `organisationName` – název organizace, za kterou byl formulář vyplněný
- `data` – matice číselných skóre pro sazbu grafů
- `formUrl` – URL hodnoticího formuláře ve Filloutu

Podrobně viz [dokumentaci Markdoc](https://markdoc.dev/docs/variables).

### Značky

Značky se zapisují takto:

```markdown
{% score_distribution_chart caption="Popisek grafu" data=$data /%}
```

Dokument podporuje následující typy grafů:

- `axis_score_chart` – suma hodnocení podle jednotlivých pilířů
- `score_distribution_chart` – histogram udělených známek
- `stacked_axis_score_chart` – histogram udělených známek rozdělený ještě podle pilířů
- `score_over_area_chart` – suma hodnocení podle jednotlivých oblastí
- `score_over_area_and_axis_chart` – suma hodnocení podle jednotlivých oblastí rozdělená podle pilířů
- `topic_drilldown_chart` – suma hodnocení v jedné konkrétní oblasti rozdělená podle témat

Specificky poslední graf bere ještě číselný argument `area`, který určuje, kterou oblast má ukázat:

```markdown
{% score_distribution_chart data=$data area=0 /%}
```

Oblasti jsou číslované od nuly.

## Kontakt

Model digitální vyspělosti: <matej.malecha@cesko.digital>

Kód: <zoul@cesko.digital>
