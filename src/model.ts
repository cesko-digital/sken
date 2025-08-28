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

const visit = <T>(
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
