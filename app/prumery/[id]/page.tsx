import { ResultsPage } from "@/components/ResultsPage";
import { getGroupFormResponses, getFormResponse } from "@/src/db";
import { average } from "@/src/model";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = {
  id: string;
};

export type Props = {
  params: Promise<Params>;
};

/** Refresh data every 60 minutes */
export const revalidate = 3600;

/** Show group digital maturity assessment */
export default async function GroupResultPage({ params }: Props) {
  const id = (await params).id;
  const individualResponse = await getFormResponse(id);
  if (!individualResponse) {
    notFound();
  }

  const organisationName = individualResponse.meta.organisationName;
  const groupResponses = await getGroupFormResponses(organisationName);
  if (!groupResponses || groupResponses.length <= 1) {
    notFound();
  }

  const groupRatings = groupResponses.map((r) => r.scores);
  const averageScoreChart = average(groupRatings)!;

  return (
    <ResultsPage
      responseType="group"
      organisationName={organisationName}
      data={averageScoreChart}
    />
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const response = await getFormResponse((await params).id);
  if (!response) {
    notFound();
  }
  return {
    title: `${response.meta.organisationName}: Výsledky skenu digitální vyspělosti`,
  };
}

/** Force incremental static generation (ISR), see https://github.com/cesko-digital/web/issues/987 */
export async function generateStaticParams() {
  return [];
}
