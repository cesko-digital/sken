import Airtable from "airtable";
import {
  decodeType,
  field,
  number,
  record,
  string,
  union,
} from "typescript-json-decoder";

//
// Types
//

export const allAreas = [
  "Spolupráce",
  "Řízení",
  "Rozhodování",
  "Data",
  "Bezpečnost",
  "Odolnost",
  "Rozvoj",
] as const;

export const allAxes = ["Nástroje", "Dovednosti", "Kultura"] as const;

export const maxScore = 5;

export type Area = (typeof allAreas)[number];
export type Axis = (typeof allAxes)[number];
export type Assessment = Record<Area, Record<Axis, number>>;

export type FormResponse = decodeType<typeof decodeFormResponse>;

/** Decode raw fields from Airtable record */
const decodeRawAssessment = record({
  nastrojeSpoluprace: field("fldtfQJPLAGnVBXSx", number),
  nastrojeRizeni: field("fldawXRkJDd6TB0Tf", number),
  nastrojeRozhodovani: field("fldDF8bYT3l4YPQO5", number),
  nastrojeData: field("fldgc3N3cnxwZTfI0", number),
  nastrojeBezpecnost: field("flddyucJOU21QgAHe", number),
  nastrojeOdolnost: field("fldtYgRjiyYjgf1Cn", number),
  nastrojeRozvoj: field("fldsV86MLfO0MISi2", number),
  dovednostiSpoluprace: field("fldCIQjISar3HG8GR", number),
  dovednostiRizeni: field("fldAIw3ywYHuxaXRn", number),
  dovednostiRozhodovani: field("fld92MbeB4bGqchuS", number),
  dovednostiData: field("fldUVcibAvZSkT0f8", number),
  dovednostiBezpecnost: field("fldJZRVpFUufAjL3f", number),
  dovednostiOdolnost: field("fldYjZium1Hvi2FqL", number),
  dovednostiRozvoj: field("fldU0GQ6ewM8axsoV", number),
  kulturaSpoluprace: field("fld1E9bwB0m3YuubF", number),
  kulturaRizeni: field("fldr3ZO9P7atmiOTg", number),
  kulturaRozhodovani: field("fldcHz1BHpaN05ay8", number),
  kulturaData: field("fldUgo0HN7O7LbS12", number),
  kulturaBezpecnost: field("fldHxlC6521FqiVkM", number),
  kulturaOdolnost: field("fldNbKKz85dY5iwN7", number),
  kulturaRozvoj: field("fld7nocFYESnXkdtY", number),
});

/** Decore structured assessment from linear Airtable record */
export const decodeAssessment = (value: unknown): Assessment => {
  const raw = decodeRawAssessment(value);
  return {
    Spolupráce: {
      Nástroje: raw.nastrojeSpoluprace,
      Dovednosti: raw.dovednostiSpoluprace,
      Kultura: raw.kulturaSpoluprace,
    },
    Řízení: {
      Nástroje: raw.nastrojeRizeni,
      Dovednosti: raw.dovednostiRizeni,
      Kultura: raw.kulturaRizeni,
    },
    Rozhodování: {
      Nástroje: raw.nastrojeRozhodovani,
      Dovednosti: raw.dovednostiRozhodovani,
      Kultura: raw.kulturaRozhodovani,
    },
    Data: {
      Nástroje: raw.nastrojeData,
      Dovednosti: raw.dovednostiData,
      Kultura: raw.kulturaData,
    },
    Bezpečnost: {
      Nástroje: raw.nastrojeBezpecnost,
      Dovednosti: raw.dovednostiBezpecnost,
      Kultura: raw.kulturaBezpecnost,
    },
    Odolnost: {
      Nástroje: raw.nastrojeOdolnost,
      Dovednosti: raw.dovednostiOdolnost,
      Kultura: raw.kulturaOdolnost,
    },
    Rozvoj: {
      Nástroje: raw.nastrojeRozvoj,
      Dovednosti: raw.dovednostiRozvoj,
      Kultura: raw.kulturaRozvoj,
    },
  };
};

/** Decode form response (metadata + scores) */
export const decodeFormResponse = (value: unknown) => {
  const decodeMetadata = record({
    id: field("fldMGLlKvosys0Z7k", string),
    organizationName: field("fldVtltJnGJJkVfdl", union(number, string)),
  });
  return {
    meta: decodeMetadata(value),
    scores: decodeAssessment(value),
  };
};

//
// API
//

export async function getFormResponse(
  id: string
): Promise<FormResponse | null> {
  const base = new Airtable().base("appmxoOm1pOLmmGDn");
  const table = base("tbl93SABxvX5fyePr");
  // We should use `find` here since we know the ID beforehand,
  // but the `select` method lets us set the `returnFieldsByFieldId`
  // flag that we need.
  return await table
    .select({
      maxRecords: 1,
      filterByFormula: `{Airtable ID} = "${id}"`,
      returnFieldsByFieldId: true,
    })
    .all()
    .then((records) => records[0].fields)
    .then(decodeFormResponse)
    .catch((e) => {
      console.error(e);
      return null;
    });
}

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

export const getAssessmentStats = (assessment: Assessment) => ({
  totalScoreByArea: Object.fromEntries(
    allAreas.map((area) => [area, sumScoresForArea(assessment, area)])
  ),
  averageScoreByAxis: Object.fromEntries(
    allAxes.map((axis) => [axis, averageScoresForAxis(assessment, axis)])
  ),
  scoreCountByScore: getScoreHistogram(assessment),
});
