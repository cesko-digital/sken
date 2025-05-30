export type Score = 1 | 2 | 3 | 4 | 5;

export type TopicScores = Score[];
export type AreaScores = TopicScores[];
export type ScoreChart = AreaScores[];

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

const areas = areaLabels.length;
const axes = axisLabels.length;
const scores = scoreLabels.length;
const topics = 5;

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
  for (let area = 0; area < areas; area++) {
    for (let topic = 0; topic < topics; topic++) {
      for (let axis = 0; axis < axes; axis++) {
        const score = chart[area][topic][axis];
        f({ accum, area, topic, axis, score });
      }
    }
  }
  return accum;
};

const zero = (length: number): number[] => Array(length).fill(0);
const zero2 = (length1: number, length2: number): number[][] =>
  Array(length1)
    .fill(0)
    .map(() => zero(length2));

export const getScoreHistogram = (chart: ScoreChart) =>
  visit(chart, zero(scores), ({ accum, score }) => {
    accum[score - 1] += 1;
  });

export const getScoreHistogramByAxis = (chart: ScoreChart) =>
  visit(chart, zero2(axes, scores), ({ accum, axis, score }) => {
    accum[axis][score - 1] += 1;
  });

export const sumScoresByAxis = (chart: ScoreChart) =>
  visit(chart, zero(axes), ({ accum, axis, score }) => {
    accum[axis] += score;
  });

export const sumScoresByArea = (chart: ScoreChart) =>
  visit(chart, zero(areas), ({ accum, area, score }) => {
    accum[area] += score;
  });

export const sumScoresByAreaAndAxis = (chart: ScoreChart) =>
  visit(chart, zero2(areas, axes), ({ accum, area, axis, score }) => {
    accum[area][axis] += score;
  });
