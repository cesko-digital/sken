//
// Types
//

export type Score = number;

/**
 * A single topic score chart
 *
 * A single topic is scored on three axes: Kultura, Dovednosti, and Nástroje
 */
export type TopicScores = Score[]; // length is always 3

/**
 * Area score chart
 *
 * A single area score chart consists of five unique topics. For the
 * `Komunikace & Spolupráce` area, for example, these topics are `Rychlost
 * a jasnost komunikace`, `Sdílení a dostupnost informací`, etc.
 */
export type AreaScores = TopicScores[]; // length is always 5

/**
 * Organisation score chart
 *
 * The score chart consists of an array of scores for the four top-level areas:
 * Komunikace & Spolupráce, Procesy & Automatizace, …
 */
export type ScoreChart = AreaScores[]; // length is always 4

//
// Labels
//

export const areaLabels = [
  "Komunikace & Spolupráce",
  "Procesy & Automatizace",
  "Bezpečnost & Flexibilita",
  "Učení & Rozvoj",
] as const;

export const scoreLabels = [
  "Nevyužitý potenciál",
  "Dobrý začátek",
  "Solidní základ",
  "Vynikající praxe",
  "Inspirativní přístup",
] as const;

export const axisLabels = ["Kultura", "Dovednosti", "Nástroje"] as const;

export const topicLabels = [
  // Komunikace & Spolupráce
  [
    "Rychlost a jasnost komunikace",
    "Sdílení a dostupnost informací",
    "Kvalita spolupráce v týmu",
    "Plánování a sledování projektů",
    "Komunikace navenek",
  ],
  // Procesy & Automatizace
  [
    "Automatizace rutinních úkolů",
    "Vedení evidence",
    "Schvalovací postupy",
    "Strategické rozhodování",
    "Propojení nástrojů a synchronizace dat",
  ],
  // Bezpečnost & Flexibilita
  [
    "Ochrana před kybernetickými hrozbami",
    "Správa uživatelských účtů a přístupů",
    "Zálohování a obnova dat",
    "Hybridní a vzdálená práce",
    "Aktualizace a údržba systémů",
  ],
  // Učení & Rozvoj
  [
    "Samostatnost při řešení problémů",
    "Osvojování nových technologií",
    "Zvyšování efektivity práce",
    "Dokumentace procesů",
    "Investice do digitálního rozvoje",
  ],
];

const areaCount = areaLabels.length;
const axisCount = axisLabels.length;
const scoreCount = scoreLabels.length;
const topicCount = 5;

//
// Helpers
//

type VisitArgs<T> = {
  accum: T;
  area: number;
  topic: number;
  axis: number;
  score: Score;
};

export const visit = <T>(
  chart: ScoreChart,
  initial: T,
  f: (args: VisitArgs<T>) => void
) => {
  const accum = initial;
  for (let area = 0; area < areaCount; area++) {
    for (let topic = 0; topic < topicCount; topic++) {
      for (let axis = 0; axis < axisCount; axis++) {
        const score = chart[area][topic][axis];
        f({ accum, area, topic, axis, score });
      }
    }
  }
  return accum;
};

export const repeat = <T>(size: number, val: () => T) =>
  Array(size).fill(0).map(val) as T[];

export const singleton = (n: number): ScoreChart =>
  repeat(areaCount, () => repeat(topicCount, () => repeat(axisCount, () => n)));

const zero = (size: number) => repeat(size, () => 0);
const zeroSquare = (size1: number, size2: number) =>
  repeat(size1, () => repeat(size2, () => 0));

export const transpose = (matrix: number[][]): number[][] => {
  const height = matrix.length;
  const width = matrix[0].length;
  const transposed = zeroSquare(width, height);
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      transposed[col][row] = matrix[row][col];
    }
  }
  return transposed;
};

//
// Statistics
//

export const getScoreHistogram = (chart: ScoreChart) =>
  visit(chart, zero(scoreCount), ({ accum, score }) => {
    accum[score - 1] += 1;
  });

export const getScoreHistogramByAxis = (chart: ScoreChart) =>
  visit(chart, zeroSquare(scoreCount, axisCount), ({ accum, axis, score }) => {
    accum[score - 1][axis] += 1;
  });

export const sumScoresByAxis = (chart: ScoreChart) =>
  visit(chart, zero(axisCount), ({ accum, axis, score }) => {
    accum[axis] += score;
  });

export const sumScoresByArea = (chart: ScoreChart) =>
  visit(chart, zero(areaCount), ({ accum, area, score }) => {
    accum[area] += score;
  });

export const sumScoresByAreaAndAxis = (chart: ScoreChart) =>
  visit(
    chart,
    zeroSquare(areaCount, axisCount),
    ({ accum, area, axis, score }) => {
      accum[area][axis] += score;
    }
  );

//
// Aggregation
//

const map = (
  charts: ScoreChart[],
  f: (scores: Score[]) => Score
): ScoreChart => {
  const result = singleton(0);
  for (let area = 0; area < areaCount; area++) {
    for (let topic = 0; topic < topicCount; topic++) {
      for (let axis = 0; axis < axisCount; axis++) {
        result[area][topic][axis] = f(charts.map((c) => c[area][topic][axis]));
      }
    }
  }
  return result;
};

export const sum = (vals: number[]) => vals.reduce((a, b) => a + b, 0);
export const average = (charts: ScoreChart[]) =>
  charts.length > 0
    ? map(charts, (vals) => Math.round(sum(vals) / vals.length))
    : undefined;

export const questions = `
Většina lidí na vedoucích pozicích je přesvědčena, že rychlá a jasná komunikace je projevem úcty k času ostatních
Většina lidí na vedoucích pozicích je přesvědčena, že zapisování na schůzkách je způsob, jak předejít nedorozuměním a zrychlit budoucí rozhodování
Většina lidí na vedoucích pozicích je přesvědčena, že nejlepší výsledky vznikají při týmové spolupráci
Většina lidí na vedoucích pozicích je přesvědčena, že při velkém objemu práce a mnoha termínech je třeba systematicky plánovat a jednoznačně komunikovat priority
Většina lidí na vedoucích pozicích je přesvědčena, že web, sociální sítě, newsletter a online události jsou způsob, jak oslovit mnohem více lidí než při osobním kontaktu
Většina lidí v organizaci umí ostatním stručně popsat svůj požadavek a sdělit, jakou odpověď nebo reakci potřebuje
Většina lidí přítomných na schůzkách umí písemně zachytit probíraná témata a přijatá rozhodnutí
Většina lidí v organizaci umí pracovat na společném úkolu tak, aby na sebe činnost jednotlivců navazovala a vzájemně se doplňovala
Většina lidí v organizaci umí zadaný úkol rozdělit na menší kroky, stanovit realistické termíny a průběžně informovat o postupu
Pověření lidé umí vytvořit vhodný obsah pro různé digitální kanály (web, sociální sítě, newsletter, online události) a přizpůsobit ho konkrétním cílovým skupinám
Máme sadu online nástrojů pro okamžitou komunikaci, kterou používáme pro rychlou výměnu informací (např. chat, videohovor)
Máme nástroj pro nahrávání videohovorů, šablony pro zápisy z osobních schůzek a určené místo, kde všechny nahrávky a zápisy uchováváme
Máme sadu nástrojů, kterou používáme pro strukturovanou spolupráci mezi více lidmi (např. sdílené dokumenty, diskusní fórum, wiki, virtuální nástěnka)
Máme nástroj, který používáme pro zadávání úkolů, ve kterém lidé v organizaci / týmu vidí řešené úkoly včetně termínů a sdílejí informace o aktuálním stavu s ostatními
Pověření lidé mají sadu nástrojů, kterou samostatně používají pro správu webu, sociálních sítí, rozesílání newsletterů a pořádání online událostí
Většina lidí na vedoucích pozicích je přesvědčena, že opakující se ruční práce je plýtvání lidským potenciálem
Většina lidí na vedoucích pozicích je přesvědčena, že systematická evidence lidí, majetku, dokumentů a financí je základem pro transparentní a zodpovědné řízení organizace
Většina lidí na vedoucích pozicích je přesvědčena, že jasně definované schvalovací procesy jsou způsob, jak urychlit rozhodování a předejít chybám
Většina lidí na vedoucích pozicích je přesvědčena, že vyhodnocení dat o dopadu minulých aktivit je předpokladem pro zvyšování dopadu budoucích aktivit
Většina lidí na vedoucích pozicích je přesvědčena, že automatická výměna dat mezi nástroji je klíčem k úspoře času a snížení chyb z nepozornosti
Většina lidí v organizaci umí rozpoznat rutinní procesy a strukturovaně je popsat pro účely automatizace
Většina lidí v organizaci umí rozpoznat, co je třeba evidovat v rámci jejich práce, a zaznamenat to úplně, přesně a včas
Většina lidí v organizaci umí identifikovat situace vyžadující schválení, znají správné kontaktní osoby a dokáží postupovat podle stanovených kroků
Většina lidí na relevantních pozicích umí získat potřebná data o dopadu minulých aktivit organizace, zpracovat je do srozumitelné podoby a vyvodit z nich praktické závěry pro budoucí aktivity
Většina lidí na relevantních pozicích umí rozpoznat, kde se stejná data zadávají vícekrát, a zařídit způsob automatického propojení dotčených nástrojů a systémů
Máme nástroj nebo sadu nástrojů, která za nás automaticky vykonává většinu opakující se úkolů (např. aktualizace dat, rozesílání zpráv, plánování schůzek, zpracování formulářů, zálohování)
Máme propojené nástroje pro evidenci ve všech klíčových oblastech: lidé (zaměstnanci, dobrovolníci, dárci), majetek (vybavení, licence), dokumenty (smlouvy, projektová dokumentace, výroční zprávy) a finance (granty, výdaje) s možností snadného vyhledávání a filtrování
Máme nástroj nebo sadu nástrojů pro elektronické schvalování (výdaje, nákupy, dovolené, smlouvy) s přehledem o stavu všech žádostí a automatickými upozorněními pro schvalovatele
Máme nástroj nebo sadu nástrojů, kterou používáme pro volné procházení, analýzu a vizualizaci dat o dopadu aktivit organizace, aniž bychom museli data ručně importovat z jednotlivých databází nebo nástrojů (např. Power BI, Google Looker Studio, Metabase)
Máme propojené nástroje, takže se všechna data zadávají pouze jednou a automaticky se synchronizují do všech dalších relevantních aplikací (např. CRM, účetnictví, projektové nástroje)
Většina lidí na vedoucích pozicích je přesvědčena, že investice do bezpečnostních opatření je ochranou před finančními a reputačními škodami
Většina lidí na vedoucích pozicích je přesvědčena, že přidělování přístupů k jednotlivým nástrojům podle pracovní náplně je způsob, jak předcházet chybám a zabránit zneužití informací
Většina lidí na vedoucích pozicích je přesvědčena, že pravidelné zálohování je nezbytnou pojistkou proti technickým selháním a lidským chybám
Většina lidí na vedoucích pozicích je přesvědčena, že možnost pracovat odkudkoliv zvyšuje odolnost organizace proti neočekávaným událostem
Většina lidí na vedoucích pozicích je přesvědčena, že pravidelná údržba techniky a softwaru je levnější než řešení krizí způsobených zanedbáním
Většina lidí v organizaci umí rozpoznat podezřelé emaily, bezpečně stahovat soubory a ví, jak reagovat při podezření na virus nebo neoprávněný přístup k datům
Většina lidí v organizaci umí vytvořit silná hesla, používat ověření přes SMS nebo aplikaci a sdílet přihlašovací údaje s ostatními přes správce hesel
Většina lidí v organizaci ví, která data se zálohují, a v případě potřeby umí zařídit o jejich obnovu
Většina lidí na relevantních pozicích umí samostatně plánovat svou práci, na dálku udržovat kontakt s týmem a produktivně pracovat mimo kancelář
Většina lidí v organizaci umí rozpoznat příznaky problémů s technikou a softwarem a ví, kdy a koho kontaktovat kvůli údržbě
Máme antivirový program a nástroj nebo sadu nástrojů pro sledování neobvyklých přihlášení a podezřelých aktivit v síti
Máme sdíleného správce hesel a systém pro správu uživatelů, který umožňuje nastavit různé úrovně přístupu podle pracovních pozic. Při přihlašování všude používáme ověření přes SMS nebo aplikaci.
Máme systém automatického zálohování všech důležitých dat do cloudu nebo na externí úložiště a máme vyzkoušeno, že data dokážeme v případě potřeby snadno a rychle obnovit
Máme cloudové nástroje dostupné odkudkoliv, které lze používat i na mobilním telefonu, a bezpečný vzdálený přístup ke všem relevantním systémům a databázím
Máme nastaveny automatické aktualizace softwaru, plán preventivní údržby hardwaru a smlouvy na technickou podporu pro používané nástroje nebo systémy
Většina lidí na vedoucích pozicích je přesvědčena, že podpora samostatnosti při řešení technických problémů je ochranou proti blokování práce kvůli nedostupnosti klíčových osob
Většina lidí na vedoucích pozicích je přesvědčena, že investice do nových technologií jsou příležitostí k řešení nedostatku lidí a omezených rozpočtů
Většina lidí na vedoucích pozicích je přesvědčena, že sledování efektivity vnitřních procesů pomáhá identifikovat úzká hrdla a zlepšovat fungování organizace
Většina lidí na vedoucích pozicích je přesvědčena, že dokumentování pracovních postupů je investicí do budoucí efektivity a odolnosti organizace
Většina lidí na vedoucích pozicích je přesvědčena, že pravidelné investice do digitálního rozvoje jsou nutné pro udržení schopnosti organizace efektivně naplňovat své poslání
Většina lidí v organizaci umí vyhledat řešení svého problému v návodech, zkusit základní postupy a jasně popsat problém při žádosti o pomoc
Většina lidí v organizaci umí samostatně prozkoumat nový nástroj, naučit se jeho základy a začít ho používat v praxi
Většina lidí v organizaci umí sledovat, kolik času jim trvají klíčové úkoly, a dokáže identifikovat kroky, které způsobují zpoždění
Většina lidí v organizaci umí popsat pracovní postup tak, aby podle něj dokázal pracovat nový kolega či kolegyně
Většina lidí na vedoucích pozicích umí naplánovat celý proces zavádění nového digitálního nástroje včetně školení lidí, migrace dat a postupného přechodu
Máme knihovnu návodů, databázi častých otázek a odpovědí a systém pro hlášení problémů pro lidi, kteří si samostatně neporadí
Máme přístup k online vzdělávání a k testovacímu prostředí, které používáme pro zkoušení nových nástrojů
Máme nástroje pro měření času stráveného na úkolech, které používáme pro automatické sbírání dat o tom, jak dlouho co trvá
Máme šablony pro návody, centrální úložiště postupů a nástroj nebo sadu nástrojů, kterou používáme pro tvorbu a správu dokumentace procesů
Máme nástroje, které používáme pro sledování nákladů na technologie, měření jejich přínosů a výpočet návratnosti investic do digitálního rozvoje
`
  .split(/\n/)
  .filter((s) => s.length > 0);
