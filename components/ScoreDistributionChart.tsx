import { getScoreHistogram, scoreLabels } from "@/src/model";
import { ChartProps, ChartWrapper } from "./Charts";
import { BarChart } from "@mui/x-charts";
import { Fragment } from "react";

export const ScoreDistributionChart = ({ data }: ChartProps) => {
  const histo = getScoreHistogram(data);
  return (
    <Fragment>
      <ChartWrapper>
        <BarChart
          series={[{ data: histo }]}
          yAxis={[{ label: "Kolikrát jste takto hodnotili" }]}
          xAxis={[{ data: scoreLabels }]}
          barLabel="value"
          height={300}
        />
      </ChartWrapper>
    </Fragment>
  );
};
