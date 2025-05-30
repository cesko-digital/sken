import { ScoreChart } from "@/src/model";
import { ScoreDistributionChart } from "./ScoreDistributionChart";
import { StackedAxisScoreChart } from "./StackedScoreChart";
import { AxisScoreChart } from "./AxisScoreChart";

export type ChartProps = {
  data: ScoreChart;
};

export const ChartTags = {
  ScoreDistributionChart,
  StackedAxisScoreChart,
  AxisScoreChart,
};
