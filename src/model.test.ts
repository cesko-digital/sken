import assert from "node:assert";
import test from "node:test";
import {
  ScoreChart,
  getScoreHistogram,
  getScoreHistogramByAxis,
  sumScoresByArea,
  sumScoresByAreaAndAxis,
  sumScoresByAxis,
  transpose,
} from "./model";

test("Score histogram", () => {
  assert.deepEqual(getScoreHistogram(sampleChart), [9, 20, 19, 4, 8]);
});

test("Sum scores by axis", () => {
  assert.deepEqual(sumScoresByAxis(sampleChart), [40, 60, 62]);
});

test("Score histogram by axis", () => {
  assert.deepEqual(getScoreHistogramByAxis(sampleChart), [
    [8, 0, 1],
    [8, 8, 4],
    [0, 8, 11],
    [4, 0, 0],
    [0, 4, 4],
  ]);
});

test("Sum scores by area", () => {
  assert.deepEqual(sumScoresByArea(sampleChart), [41, 39, 41, 41]);
});

test("Sum scores by area and axis", () => {
  assert.deepEqual(sumScoresByAreaAndAxis(sampleChart), [
    [10, 15, 16],
    [10, 15, 14],
    [10, 15, 16],
    [10, 15, 16],
  ]);
});

test("Matrix transpose", () => {
  assert.deepEqual(transpose([[1, 2, 3]]), [[1], [2], [3]]);
  assert.deepEqual(
    transpose([
      [1, 2, 3],
      [4, 5, 6],
    ]),
    [
      [1, 4],
      [2, 5],
      [3, 6],
    ]
  );
  assert.deepEqual(transpose([[1]]), [[1]]);
});

const sampleChart: ScoreChart = [
  [
    [2, 3, 5],
    [1, 2, 3],
    [4, 5, 3],
    [1, 2, 3],
    [2, 3, 2],
  ],
  [
    [2, 3, 5],
    [1, 2, 1],
    [4, 5, 3],
    [1, 2, 3],
    [2, 3, 2],
  ],
  [
    [2, 3, 5],
    [1, 2, 3],
    [4, 5, 3],
    [1, 2, 3],
    [2, 3, 2],
  ],
  [
    [2, 3, 5],
    [1, 2, 3],
    [4, 5, 3],
    [1, 2, 3],
    [2, 3, 2],
  ],
];
