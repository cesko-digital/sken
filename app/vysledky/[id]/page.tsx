import { notFound } from "next/navigation";
import { getFormResponse } from "@/app/api";
import { getAssessmentStats } from "@/app/model";
import { Metadata } from "next";
import { AxisScoreChart } from "./AxisScoreChart";
import { AreaScoreChart } from "./AreaScoreChart";
import { ScoreDistributionChart } from "./ScoreDistributionChart";
import { StackedScoreChart } from "./StackedScoreChart";

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
        Výsledky skenu digitální vyspělosti pro {response.meta.organizationName}
      </h1>
      <p>
        Pojďme se podívat, jak je na tom vaše organizace. 
        <em className="typo-emphasis">
          Doporučujeme si vzít k ruce papír a tužku.
        </em>
      </p>
      <ScoreDistributionChart data={stats.scoreCountByScore} />
      <AxisScoreChart data={stats.scoreCountByScoreAndAxis} />
      <AreaScoreChart data={stats.totalScoreByArea} />
      <StackedScoreChart data={stats.scoresByAxis} />
    </div>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const response = await getFormResponse((await params).id);
  if (!response) {
    notFound();
  }
  return {
    title: `${response.meta.organizationName}: Výsledky skenu digitální vyspělosti`,
    description: "TBD: Stručný popisek",
  };
}
