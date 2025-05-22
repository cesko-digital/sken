import { BarChart } from "@mui/x-charts/BarChart";
import { notFound } from "next/navigation";
import { allAxes, getAssessmentStats, getFormResponse, maxScore } from "./db";
import { Metadata } from "next";
import { ReactNode } from "react";

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
    <div className="flex flex-col gap-10">
      <h1 className="typo-title">
        Sken digitální vyspělosti – {response.meta.organizationName}
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
      <h2 className="typo-title2">Skóre za jednotlivé úrovně</h2>
      <ChartWrapper>
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
      </ChartWrapper>
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
      <h2 className="typo-title2">Skóre podle pilířů</h2>
      <ChartWrapper>
        <BarChart
          layout="horizontal"
          series={[{ data: values.map(second) }]}
          yAxis={[{ data: values.map(first), tickLabelStyle: { angle: -90 } }]}
          xAxis={[{ max: maxScore, tickMinStep: 1 }]}
          height={300}
        />
      </ChartWrapper>
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
      <h2 className="typo-title2">Úroveň digitální vyspělosti podle oblastí</h2>
      <ChartWrapper>
        <BarChart
          series={[{ data: values.map(second) }]}
          xAxis={[{ data: values.map(first) }]}
          yAxis={[{ max: allAxes.length * maxScore }]}
          height={300}
        />
      </ChartWrapper>
    </div>
  );
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const response = await getFormResponse((await params).id);
  if (!response) {
    notFound();
  }
  return {
    title: `Sken digitální vyspělosti: ${response.meta.organizationName}`,
    description: "TBD: Stručný popisek",
  };
}

const ChartWrapper = ({ children }: { children: ReactNode }) => (
  <div className="bg-gray-50 p-4 pl-0">{children}</div>
);

const first = <A, B>(pair: [A, B]) => pair[0];
const second = <A, B>(pair: [A, B]) => pair[1];
