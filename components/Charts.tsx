import { ScoreChart } from "@/src/model";
import { ReactNode } from "react";
import { ScoreDistributionChart } from "./ScoreDistributionChart";
import { StackedAxisScoreChart } from "./StackedScoreChart";
import { AxisScoreChart } from "./AxisScoreChart";

export type Wrapper = ({ children }: { children: ReactNode }) => ReactNode;

export type ChartProps = {
  data: ScoreChart;
};

export const ChartWrapper: Wrapper = ({ children }) => (
  <div className="bg-gray-50 border-[1px] border-gray-300 p-4 pt-6 my-4">
    {children}
  </div>
);

export const TextWrapper: Wrapper = ({ children }) => (
  <div className="max-w-prose flex flex-col gap-2 text-balance">{children}</div>
);

export const ChartTags = {
  ScoreDistributionChart,
  StackedAxisScoreChart,
  AxisScoreChart,
};
