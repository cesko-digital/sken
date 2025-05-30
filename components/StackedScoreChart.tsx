import { axisLabels, getScoreHistogramByAxis, scoreLabels } from "@/src/model";
import { ChartProps } from "./Charts";
import { BarChart } from "@mui/x-charts";

export const StackedAxisScoreChart = ({ data }: ChartProps) => {
  const values = getScoreHistogramByAxis(data);
  return (
    <div className="chart-wrapper">
      <BarChart
        series={values.map((scores, index) => ({
          data: scores,
          stack: "stack",
          label: axisLabels[index],
        }))}
        xAxis={[{ data: scoreLabels }]}
        barLabel="value"
        height={400}
      />
    </div>
  );
};
