import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getFormResponse } from "@/src/db";
import { notFound } from "next/navigation";
import { LLMReport } from "./LLMReport";
import { TabBar, TabItem } from "@/components/TabBar";
import { RouteTo } from "@/src/utils";

type Params = {
  id: string;
};

export type Props = {
  params: Promise<Params>;
};

export default async function LLMSummaryPage({ params }: Props) {
  const id = (await params).id;
  const individualResponse = await getFormResponse(id);
  if (!individualResponse) {
    notFound();
  }
  const organizationName = individualResponse.meta.organisationName;
  return (
    <main className="content-wrapper flex flex-col gap-4">
      <Breadcrumbs currentPage={organizationName} />
      <h1 className="typo-head1">
        Výsledky skenu digitální vyspělosti pro {organizationName}
      </h1>
      <TabBar>
        <TabItem href={RouteTo.individualRating(id)}>Číselné výsledky</TabItem>
        <TabItem href={RouteTo.llmSummary(id)} isActive>
          Strojové shrnutí
        </TabItem>
      </TabBar>
      <LLMReport individualResponseId={id} />
    </main>
  );
}
