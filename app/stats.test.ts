import test from "node:test";
import { Assessment, averageScoresForAxis } from "./vysledky/[id]/db";
import assert from "node:assert";

test("Treat zero as missing value in averages", () => {
  const scores: Assessment = {
    Spolupráce: {
      Nástroje: 5,
      Dovednosti: 5,
      Kultura: 5,
    },
    Řízení: {
      Nástroje: 1,
      Dovednosti: 4,
      Kultura: 2,
    },
    Rozhodování: {
      Nástroje: 3,
      Dovednosti: 1,
      Kultura: 2,
    },
    Data: {
      Nástroje: 1,
      Dovednosti: 4,
      Kultura: 4,
    },
    Bezpečnost: {
      Nástroje: 0,
      Dovednosti: 1,
      Kultura: 4,
    },
    Odolnost: {
      Nástroje: 2,
      Dovednosti: 0,
      Kultura: 2,
    },
    Rozvoj: {
      Nástroje: 1,
      Dovednosti: 3,
      Kultura: 5,
    },
  };
  const avg = averageScoresForAxis(scores, "Dovednosti");
  assert.strictEqual(avg, 3);
});
