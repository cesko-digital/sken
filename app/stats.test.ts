import assert from "node:assert";
import test from "node:test";
import {
  Assessment,
  averageScoresForAxis,
  getScoreHistogramByAxis,
} from "./model";

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

test("Calculate score histogram by axis", () => {
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
  const histo = getScoreHistogramByAxis(scores);
  assert.deepEqual(histo, {
    Nástroje: {
      "0": 1,
      "1": 3,
      "2": 1,
      "3": 1,
      "4": 0,
      "5": 1,
    },
    Dovednosti: {
      "0": 1,
      "1": 2,
      "2": 0,
      "3": 1,
      "4": 2,
      "5": 1,
    },
    Kultura: {
      "0": 0,
      "1": 0,
      "2": 3,
      "3": 0,
      "4": 2,
      "5": 2,
    },
  });
});
