import { BarChart } from "@mui/x-charts";
import { ChartProps } from "./Charts";
import { axisLabels, sumScoresByAxis } from "@/src/model";

export const AxisScoreChart = ({ data }: ChartProps) => {
  const scores = sumScoresByAxis(data);
  return (
    <div className="chart-wrapper">
      <BarChart
        series={[{ data: scores }]}
        xAxis={[
          {
            data: axisLabels,
            colorMap: {
              type: "ordinal",
              colors: ["#4155FB", "#FA4F58", "orange"],
            },
          },
        ]}
        barLabel="value"
        height={300}
      />
    </div>
  );
};
