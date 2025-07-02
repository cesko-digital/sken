import { Results } from "@/components/Results";
import { getGroupFormResponses, getFormResponse } from "@/src/db";
import { average } from "@/src/model";
import { notFound } from "next/navigation";

type Params = {
  id: string;
};

export type Props = {
  params: Promise<Params>;
};

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
    <Results
      responseType="group"
      haveGroupResponse={true}
      organisationName={organisationName}
      data={averageScoreChart}
    />
  );
}
