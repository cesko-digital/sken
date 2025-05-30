import {
  areaLabels,
  axisLabels,
  getScoreHistogram,
  getScoreHistogramByAxis,
  ScoreChart,
  scoreLabels,
  sumScoresByArea,
  sumScoresByAreaAndAxis,
  sumScoresByAxis,
  topicLabels,
  transpose,
} from "@/src/model";
import { BarChart } from "@mui/x-charts";

type ChartProps = {
  data: ScoreChart;
};

const colorSeries = ["#4155FB", "#FA4F58", "orange"];
const height = {
  normal: 300,
  higher: 400,
};

/** Shows score sum over axes (Kultura, Dovednosti, Nástroje) */
const AxisScoreChart = ({ data }: ChartProps) => {
  const values = sumScoresByAxis(data);
  return (
    <div className="chart-wrapper">
      <BarChart
        series={[{ data: values }]}
        xAxis={[
          {
            data: axisLabels,
            colorMap: {
              type: "ordinal",
              colors: colorSeries,
            },
          },
        ]}
        barLabel="value"
        height={height.normal}
      />
    </div>
  );
};

/** Shows score mark distribution – how many times was a mark given? */
const ScoreDistributionChart = ({ data }: ChartProps) => {
  const values = getScoreHistogram(data);
  return (
    <div className="chart-wrapper">
      <BarChart
        series={[{ data: values }]}
        yAxis={[{ label: "Kolikrát jste takto hodnotili" }]}
        xAxis={[{ data: scoreLabels }]}
        barLabel="value"
        height={height.normal}
      />
    </div>
  );
};

/**
 * A more detailed version of the score distribution chart
 *
 * This one also shows which axes the scores were distributed between.
 */
const StackedAxisScoreChart = ({ data }: ChartProps) => {
  const scores = getScoreHistogramByAxis(data);
  return (
    <div className="chart-wrapper">
      <BarChart
        series={transpose(scores).map((scores, index) => ({
          data: scores,
          stack: "stack",
          label: axisLabels[index],
        }))}
        xAxis={[{ data: scoreLabels }]}
        barLabel="value"
        height={height.higher}
      />
    </div>
  );
};

/** Show sum of scores over areas (Komunikace a spolupráce, …) */
const ScoreOverAreaChart = ({ data }: ChartProps) => {
  const values = sumScoresByArea(data);
  return (
    <div className="chart-wrapper">
      <BarChart
        series={[{ data: values }]}
        xAxis={[{ data: areaLabels }]}
        barLabel="value"
        height={height.normal}
      />
    </div>
  );
};

/** Show sum of scores over areas (Komunikace a spolupráce, …) split into axes (Kultura, …) */
const ScoreOverAreaAndAxisChart = ({ data }: ChartProps) => {
  const areas = sumScoresByAreaAndAxis(data);
  return (
    <div className="chart-wrapper">
      <BarChart
        series={transpose(areas).map((axeValues, index) => ({
          label: axisLabels[index],
          data: axeValues,
        }))}
        xAxis={[{ data: areaLabels }]}
        barLabel="value"
        height={height.normal}
      />
    </div>
  );
};

const TopicDrillDownChart = ({
  data,
  area = 0,
}: ChartProps & { area?: number }) => {
  const topics = transpose(data[area]);
  return (
    <div className="chart-wrapper">
      <BarChart
        series={topics.map((topicScores, index) => ({
          label: axisLabels[index],
          data: topicScores,
          stack: "stack",
        }))}
        xAxis={[{ data: topicLabels[area] }]}
        height={height.normal}
        barLabel="value"
      />
    </div>
  );
};

export const ChartTags = {
  ScoreDistributionChart,
  StackedAxisScoreChart,
  ScoreOverAreaChart,
  ScoreOverAreaAndAxisChart,
  TopicDrillDownChart,
  AxisScoreChart,
};
