import { BarChart } from "@mui/x-charts/BarChart";
import { notFound } from "next/navigation";
import { getAssessmentStats, getFormResponse } from "./db";

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

const first = <A, B>(pair: [A, B]) => pair[0];
const second = <A, B>(pair: [A, B]) => pair[1];
