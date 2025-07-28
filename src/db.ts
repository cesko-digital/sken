import Airtable from "airtable";
import { Score, ScoreChart } from "./model";
import {
  array,
  decodeType,
  field,
  number,
  record,
  string,
} from "typescript-json-decoder";
import { hashOrganizationName } from "./utils";

const table = () =>
  new Airtable().base("appmxoOm1pOLmmGDn")("tblBOTdYlMjW4hxUb");

const logErrorAndReturnNull = (e: unknown) => {
  console.error(e);
  return null;
};

//
// API
//

export async function getFormResponse(
  id: string
): Promise<FormResponse | null> {
  // Special-cased IDs for testing purposes
  if (["sample", "zkouska", "test"].includes(id)) {
    return sampleFormResponse;
  }

  // We should use `find` here since we know the ID beforehand,
  // but the `select` method lets us set the `returnFieldsByFieldId`
  // flag that we need.
  return await table()
    .select({
      maxRecords: 1,
      filterByFormula: `{Airtable ID} = "${id}"`,
      returnFieldsByFieldId: true,
    })
    .all()
    .then((records) => records[0].fields)
    .then(decodeFormResponse)
    .catch(logErrorAndReturnNull);
}

export const getAllGroupFormResponses = () =>
  table()
    .select({
      view: "Have organization name",
      returnFieldsByFieldId: true,
    })
    .all()
    .then((records) => records.map((r) => r.fields))
    .then(array(decodeFormResponse))
    .catch()
    .catch(logErrorAndReturnNull);

export const getAllGroupFormResponsesForHash = async (hash: string) => {
  const all = (await getAllGroupFormResponses()) ?? [];
  return all.filter(
    (response) => hashOrganizationName(response.meta.organisationName) === hash
  );
};

//
// Decoding
//

export type FormResponse = decodeType<typeof decodeFormResponse>;

/** Decode linear Airtable column data into a score chart */
export const decodeScoreChart = (chart: unknown): ScoreChart => {
  const isObject = (value: unknown): value is Record<string, unknown> =>
    typeof value === "object" && value !== null;

  if (!isObject(chart)) {
    throw new Error("Invalid score chart format");
  }

  const field = (fieldId: string) => {
    const value = chart[fieldId];
    return number(value) as Score;
  };

  return [
    // Area 1
    [
      // Topic 1
      [
        field("fldHt6aXoRu3joiJR"),
        field("fldjRTg0ZCIqqzyiw"),
        field("fldjY5ozg1XbNWxyv"),
      ],
      // Topic 2
      [
        field("flduerpZlRngJtdwp"),
        field("fldn7MehKh9eSYTDA"),
        field("fldDwsXg9Z6ovEIH3"),
      ],
      // Topic 3
      [
        field("fld6Fdi9L81kYfsAE"),
        field("fldpgBVqxU71OePTp"),
        field("fldOFPl1WpAsWwVso"),
      ],
      // Topic 4
      [
        field("fld2OAAWEojDxSNIS"),
        field("fldK4K8CzNX1YsOCs"),
        field("fldb7gXQfXEZKB0up"),
      ],
      // Topic 5
      [
        field("fldLDghocszgofV3I"),
        field("fld7iHnM6vw2c0II4"),
        field("fld3mqS53EYT2TKIC"),
      ],
    ],
    // Area 2
    [
      // Topic 1
      [
        field("fldgtMa9nxoem7AkM"),
        field("fld09cl4IpGXvZ9IN"),
        field("fldHstmEOBnhDzEHT"),
      ],
      // Topic 2
      [
        field("fldSJ1ngrige9DnaS"),
        field("fld8q2TfKG420H9vd"),
        field("fldJeBY5q3MNez8hz"),
      ],
      // Topic 3
      [
        field("fldhT1mYSlkEhNi0b"),
        field("fldyiG1L9UipjGg9f"),
        field("fldsHhzR1SruMN2uy"),
      ],
      // Topic 4
      [
        field("fldwOcrTUa2ivzVcQ"),
        field("fldy2pFWyo8mJO687"),
        field("fldYKq8wXYYJYAX4S"),
      ],
      // Topic 5
      [
        field("fldSklcePL1IypYtv"),
        field("fldGAqSktkMD4DPmU"),
        field("fldqzOcpsAqtdktri"),
      ],
    ],
    // Area 3
    [
      // Topic 1
      [
        field("fldZSX0rnjETqmcAc"),
        field("fldfVBdYmi5DmRkvS"),
        field("fldJdWH2fPKu9yMdQ"),
      ],
      // Topic 2
      [
        field("fldEeVO6dJTBeqU4Y"),
        field("fldY8vkhFfcacKmvM"),
        field("fldWPRmL94UMJMXu0"),
      ],
      // Topic 3
      [
        field("fldPIh9Yz0BthsLGI"),
        field("fldjDWYRXz1gdEPjo"),
        field("fldWZG4n0MVZr1Iib"),
      ],
      // Topic 4
      [
        field("fldPeswN0yPDvRwgX"),
        field("fldDXgZdKbcyunZKD"),
        field("fldmiGffLkA3y8rO1"),
      ],
      // Topic 5
      [
        field("fldBrXIoWdWyI45w8"),
        field("fldMYvGYhTr9latvN"),
        field("fldrcu1l21zpMf1fE"),
      ],
    ],
    // Area 4
    [
      // Topic 1
      [
        field("fldgrLB16rwclTyaj"),
        field("fldxE07PVAJIFDJFa"),
        field("fld1cl6H8LugX3iYn"),
      ],
      // Topic 2
      [
        field("fldyeMvOqF281BLsn"),
        field("fld6QhrTVDCI4DMJj"),
        field("fldqer3NQZRcpt9O6"),
      ],
      // Topic 3
      [
        field("fldLyPpUrurQJOfrI"),
        field("fldz3FTzrvGMGM832"),
        field("fldvR8ibI2Ar2TkEk"),
      ],
      // Topic 4
      [
        field("fldoeTxOcDkcUfBZ6"),
        field("fld1Pk6m6SeTH06s8"),
        field("fldoooJwaaaz5N1h2"),
      ],
      // Topic 5
      [
        field("fld9SMbnG1v7iX9cW"),
        field("fldK9caGpnmV3uoCb"),
        field("fldl4fid3yJtoXl2S"),
      ],
    ],
  ];
};

/** Decode form response (metadata + scores) */
export const decodeFormResponse = (value: unknown) => {
  const decodeMetadata = record({
    id: field("fldz2KGNqvJe7TUiv", string),
    organisationName: field("flddAwhNuOpDJSrgJ", string),
  });
  return {
    meta: decodeMetadata(value),
    scores: decodeScoreChart(value),
  };
};

//
// Samples
//

const sampleFormResponse = {
  meta: {
    id: "rec1lBKLBdgwgCT2B",
    organisationName: "Doughnut Czechia",
  },
  scores: [
    [
      [2, 4, 4],
      [1, 1, 1],
      [4, 5, 5],
      [2, 1, 1],
      [4, 3, 3],
    ],
    [
      [2, 2, 1],
      [1, 1, 1],
      [3, 4, 1],
      [4, 4, 2],
      [1, 1, 1],
    ],
    [
      [1, 3, 1],
      [1, 4, 1],
      [2, 2, 1],
      [5, 5, 5],
      [2, 3, 2],
    ],
    [
      [5, 4, 1],
      [4, 4, 1],
      [3, 2, 1],
      [2, 2, 1],
      [2, 2, 1],
    ],
  ] as ScoreChart,
};
