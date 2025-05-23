import { second } from "./utils";

/** All areas we work with */
export const allAreas = [
  "Spolupráce",
  "Řízení",
  "Rozhodování",
  "Data",
  "Bezpečnost",
  "Odolnost",
  "Rozvoj",
] as const;

/** All axes we work with */
export const allAxes = ["Nástroje", "Dovednosti", "Kultura"] as const;

/** Labels for individual numeric scores */
export const scoreLabels = {
  "0": "Nevíme",
  "1": "Nevyužitý potenciál",
  "2": "Dobrý začátek",
  "3": "Solidní základ",
  "4": "Vynikající praxe",
  "5": "Inspirativní přístup",
} as Record<string, string>;

/** Max score used in model */
export const maxScore = 5;

export type Area = (typeof allAreas)[number];
export type Axis = (typeof allAxes)[number];
export type Assessment = Record<Area, Record<Axis, number>>;

//
// Statistics
//

const sum = (a: number, b: number) => a + b;

export const sumScoresForArea = (assessment: Assessment, area: Area) =>
  Object.values(assessment[area]).reduce(sum, 0);

export const sumScoresForAxis = (assessment: Assessment, axis: Axis) =>
  Object.values(assessment)
    .map((val) => val[axis])
    .reduce(sum, 0);

export const groupScoresByAxis = (
  assessment: Assessment
): Record<Axis, number[]> => {
  const out: Partial<Record<Axis, number[]>> = {};
  for (const axis of allAxes) {
    out[axis] = Object.entries(assessment)
      .map(second)
      .map((scores) => scores[axis]);
  }
  return out as Record<Axis, number[]>;
};

export const averageScoresForAxis = (assessment: Assessment, axis: Axis) => {
  const nonZeroValues = Object.values(assessment)
    .map((val) => val[axis])
    .filter((score) => score !== 0);
  const round = (x: number) => Math.floor(x * 100) / 100;
  return round(nonZeroValues.reduce(sum, 0) / nonZeroValues.length);
};

export const getScoreHistogram = (assessment: Assessment) => {
  const allScores: number[] = Object.values(assessment).flatMap(Object.values);
  const counts: Record<number, number> = {};
  allScores.forEach((score) => {
    counts[score] = counts[score] ? counts[score] + 1 : 1;
  });
  return counts;
};

export const getScoreHistogramByAxis = (assessment: Assessment) => {
  const histo: Partial<Record<Axis, Record<string, number>>> = {};
  for (const axis of allAxes) {
    const counts: Record<number, number> = {};
    const allScores: number[] = Object.values(assessment).map(
      (val) => val[axis]
    );
    for (let score = 0; score <= maxScore; score++) {
      counts[score] = allScores.filter((s) => s === score).length;
    }
    histo[axis] = counts;
  }
  return histo as Record<Axis, Record<string, number>>;
};

export const getAssessmentStats = (assessment: Assessment) => ({
  totalScoreByArea: Object.fromEntries(
    allAreas.map((area) => [area, sumScoresForArea(assessment, area)])
  ),
  averageScoreByAxis: Object.fromEntries(
    allAxes.map((axis) => [axis, averageScoresForAxis(assessment, axis)])
  ),
  scoresByAxis: groupScoresByAxis(assessment),
  scoreCountByScore: getScoreHistogram(assessment),
  scoreCountByScoreAndAxis: getScoreHistogramByAxis(assessment),
});
