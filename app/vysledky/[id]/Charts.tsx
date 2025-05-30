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
import { ReactNode } from "react";

type ChartProps = {
  data: ScoreChart;
  caption?: string;
};

const colorSeries = ["#4155FB", "#FA4F58", "orange"];
const height = {
  normal: 300,
  higher: 400,
};

const ChartWrapper = ({
  caption,
  children,
}: {
  caption?: string;
  children: ReactNode;
}) => (
  <div className="chart-wrapper">
    {children}
    {caption && <h3>{caption}</h3>}
  </div>
);

/** Shows score sum over axes (Kultura, Dovednosti, Nástroje) */
const AxisScoreChart = ({ data, caption }: ChartProps) => {
  const values = sumScoresByAxis(data);
  return (
    <ChartWrapper caption={caption}>
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
    </ChartWrapper>
  );
};

/** Shows score mark distribution – how many times was a mark given? */
const ScoreDistributionChart = ({ data, caption }: ChartProps) => {
  const values = getScoreHistogram(data);
  return (
    <ChartWrapper caption={caption}>
      <BarChart
        series={[{ data: values }]}
        yAxis={[{ label: "Kolikrát jste takto hodnotili" }]}
        xAxis={[{ data: scoreLabels }]}
        barLabel="value"
        height={height.normal}
      />
    </ChartWrapper>
  );
};

/**
 * A more detailed version of the score distribution chart
 *
 * This one also shows which axes the scores were distributed between.
 */
const StackedAxisScoreChart = ({ data, caption }: ChartProps) => {
  const scores = getScoreHistogramByAxis(data);
  return (
    <ChartWrapper caption={caption}>
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
    </ChartWrapper>
  );
};

/** Show sum of scores over areas (Komunikace a spolupráce, …) */
const ScoreOverAreaChart = ({ data, caption }: ChartProps) => {
  const values = sumScoresByArea(data);
  return (
    <ChartWrapper caption={caption}>
      <BarChart
        series={[{ data: values }]}
        xAxis={[{ data: areaLabels }]}
        barLabel="value"
        height={height.normal}
      />
    </ChartWrapper>
  );
};

/** Show sum of scores over areas (Komunikace a spolupráce, …) split into axes (Kultura, …) */
const ScoreOverAreaAndAxisChart = ({ data, caption }: ChartProps) => {
  const areas = sumScoresByAreaAndAxis(data);
  return (
    <ChartWrapper caption={caption}>
      <BarChart
        series={transpose(areas).map((axeValues, index) => ({
          label: axisLabels[index],
          data: axeValues,
        }))}
        xAxis={[{ data: areaLabels }]}
        barLabel="value"
        height={height.normal}
      />
    </ChartWrapper>
  );
};

const TopicDrillDownChart = ({
  data,
  caption,
  area = 0,
}: ChartProps & { area?: number }) => {
  const topics = transpose(data[area]);
  return (
    <ChartWrapper caption={caption ?? areaLabels[area]}>
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
    </ChartWrapper>
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
