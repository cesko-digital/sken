import { getScoreHistogram, scoreLabels } from "@/src/model";
import { ChartProps } from "./Charts";
import { BarChart } from "@mui/x-charts";

export const ScoreDistributionChart = ({ data }: ChartProps) => {
  const histo = getScoreHistogram(data);
  return (
    <div className="chart-wrapper">
      <BarChart
        series={[{ data: histo }]}
        yAxis={[{ label: "Kolikrát jste takto hodnotili" }]}
        xAxis={[{ data: scoreLabels }]}
        barLabel="value"
        height={300}
      />
    </div>
  );
};
