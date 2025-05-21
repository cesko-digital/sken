import { BarChart } from "@mui/x-charts/BarChart";
import { notFound } from "next/navigation";
import {
  allAreas,
  allAxes,
  getAssessmentStats,
  getFormResponse,
  maxScore,
} from "./db";
import { Metadata } from "next";

type Params = {
  id: string;
};

export type Props = {
  params: Promise<Params>;
};

export default async function ResultPage({ params }: Props) {
  const response = await getFormResponse((await params).id);
  if (!response) {
    notFound();
  }
  const stats = getAssessmentStats(response.scores);
  return (
    <div className="max-w-[900px] m-auto flex flex-col gap-10 my-20">
      <h1 className="text-3xl">
        Scan results for “{response.meta.organizationName}”
      </h1>
      <ScoreDistributionSection distribution={stats.scoreCountByScore} />
      <AxisScoreSection axisScores={stats.averageScoreByAxis} />
      <AreaScoreSection areaScores={stats.totalScoreByArea} />
    </div>
  );
}

const ScoreDistributionSection = ({
  distribution,
}: {
  distribution: Record<string, number>;
}) => {
  const values = Object.entries(distribution);
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl">Score Distribution</h2>
      <BarChart
        series={[{ data: values.map(second) }]}
        xAxis={[
          {
            data: values.map(first),
            colorMap: {
              type: "ordinal",
              values: ["0"],
              colors: ["lightGray"],
            },
          },
        ]}
        height={300}
      />
    </div>
  );
};

const AxisScoreSection = ({
  axisScores,
}: {
  axisScores: Record<string, number>;
}) => {
  const values = Object.entries(axisScores);
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl">Axe Scores</h2>
      <BarChart
        layout="horizontal"
        series={[{ data: values.map(second) }]}
        yAxis={[{ data: values.map(first) }]}
        xAxis={[{ max: maxScore, tickMinStep: 1 }]}
        height={300}
      />
    </div>
  );
};

const AreaScoreSection = ({
  areaScores,
}: {
  areaScores: Record<string, number>;
}) => {
  const values = Object.entries(areaScores);
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl">Area Scores</h2>
      <BarChart
        series={[{ data: values.map(second) }]}
        xAxis={[{ data: values.map(first) }]}
        yAxis={[{ max: allAxes.length * maxScore }]}
        height={300}
      />
    </div>
  );
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const response = await getFormResponse((await params).id);
  if (!response) {
    notFound();
  }
  return {
    title: `Scan results for ${response.meta.organizationName}`,
    description: "TBD",
  };
}

const first = <A, B>(pair: [A, B]) => pair[0];
const second = <A, B>(pair: [A, B]) => pair[1];
