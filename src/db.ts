import Airtable from "airtable";
import { Score, ScoreChart } from "./model";
import {
  array,
  decodeType,
  field,
  number,
  optional,
  record,
  string,
} from "typescript-json-decoder";
import { decodeStringAsNumber, hashOrganizationName } from "./utils";

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

/**
 * Decode sequential Airtable column data into a score chart
 *
 * This is how the data is stored sequentially in the DB:
 *
 * ```
 * Komunikace & Spolupráce
 *   Kultura
 *     01 Rychlost a jasnost komunikace
 *     02 Sdílení a dostupnost informací
 *     03 Kvalita spolupráce v týmu
 *     04 Plánování a sledování projektů
 *     05 Komunikace navenek
 *   Dovednosti
 *     06 Rychlost a jasnost komunikace
 *     07 Sdílení a dostupnost informací
 *     08 Kvalita spolupráce v týmu
 *     09 Plánování a sledování projektů
 *     10 Komunikace navenek
 *   Nástroje
 *     11 Rychlost a jasnost komunikace
 *     12 Sdílení a dostupnost informací
 *     13 Kvalita spolupráce v týmu
 *     14 Plánování a sledování projektů
 *     15 Komunikace navenek
 * Procesy & Automatizace
 *   Kultura
 *     16 Automatizace rutinních úkolů
 *     17 Vedení evidence
 *     18 …
 *   Dovednosti
 *     21 Automatizace rutinních úkolů
 *     22 Vedení evidence
 *     23 …
 *   Nástroje
 *     26 Automatizace rutinních úkolů
 *     27 Vedení evidence
 *     28 …
 * Bezpečnost & Flexibilita
 *   …
 * Učení & Rozvoj
 *   …
 * ```
 *
 * There are 4 main areas, 5 topics in each, scored on 3 axes, resulting
 * in 3*4*5 = 60 columns in total.
 */
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
    // Komunikace & Spolupráce
    [
      // Rychlost a jasnost komunikace
      [
        // Kultura
        field("fldHt6aXoRu3joiJR"),
        // Dovednosti
        field("fldjRTg0ZCIqqzyiw"),
        // Nástroje
        field("fldjY5ozg1XbNWxyv"),
      ],
      // Sdílení a dostupnost informací
      [
        field("flduerpZlRngJtdwp"),
        field("fldn7MehKh9eSYTDA"),
        field("fldDwsXg9Z6ovEIH3"),
      ],
      // Kvalita spolupráce v týmu
      [
        field("fld6Fdi9L81kYfsAE"),
        field("fldpgBVqxU71OePTp"),
        field("fldOFPl1WpAsWwVso"),
      ],
      // Plánování a sledování projektů
      [
        field("fld2OAAWEojDxSNIS"),
        field("fldK4K8CzNX1YsOCs"),
        field("fldb7gXQfXEZKB0up"),
      ],
      // Komunikace navenek
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

export type OrganisationMetadata = decodeType<typeof decodeMetadata>;
export const decodeMetadata = record({
  id: field("fldz2KGNqvJe7TUiv", string),
  organisationName: field("flddAwhNuOpDJSrgJ", string),
  organisationField: field("fldMMRJRE1OE7RYFL", optional(string)),
  paidFullTimeMembers: field(
    "fld8jG3XuA0u4dBDB",
    optional(decodeStringAsNumber)
  ),
  paidPartTimeMembers: field(
    "flddvyzQ40QFVquAd",
    optional(decodeStringAsNumber)
  ),
  volunteers: field("fldV40WHMtfTx9eoj", optional(decodeStringAsNumber)),
});

/** Decode form response (metadata + scores) */
export const decodeFormResponse = (value: unknown) => ({
  meta: decodeMetadata(value),
  scores: decodeScoreChart(value),
});

//
// Samples
//

const sampleFormResponse = {
  meta: {
    id: "rec1lBKLBdgwgCT2B",
    organisationName: "Doughnut Czechia",
  },
  scores: [
    // 1. Komunikace & Spolupráce"
    [
      // Rychlost a jasnost komunikace
      [2, 4, 4], // Kultura, Dovednosti, Nástroje
      [1, 1, 1],
      [4, 5, 5],
      [2, 1, 1],
      [4, 3, 3],
    ],
    // 2. Procesy & Automatizace
    [
      [2, 2, 1],
      [1, 1, 1],
      [3, 4, 1],
      [4, 4, 2],
      [1, 1, 1],
    ],
    // 3. Bezpečnost & Flexibilita
    [
      [1, 3, 1],
      [1, 4, 1],
      [2, 2, 1],
      [5, 5, 5],
      [2, 3, 2],
    ],
    // 4. Učení & Rozvoj
    [
      [5, 4, 1],
      [4, 4, 1],
      [3, 2, 1],
      [2, 2, 1],
      [2, 2, 1],
    ],
  ] as ScoreChart,
};
