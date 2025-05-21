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
      <p>
        Response ID {response.meta.id}, organization name{" "}
        {response.meta.organizationName}.
      </p>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl">Score Distribution</h2>
        <BarChart
          series={[{ data: Object.values(stats.scoreCountByScore) }]}
          xAxis={[{ data: Object.keys(stats.scoreCountByScore) }]}
          height={300}
        />
      </div>
    </div>
  );
}
