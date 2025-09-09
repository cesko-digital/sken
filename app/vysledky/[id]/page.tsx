import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getFormResponse } from "@/src/db";
import { notFound } from "next/navigation";
import { LLMReport } from "./LLMReport";
import { TabBar, TabItem } from "@/components/TabBar";
import { RouteTo } from "@/src/utils";
import { Metadata } from "next";

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
        <TabItem href={RouteTo.llmSummary(id)} isActive>
          Automatické vyhodnocení
        </TabItem>
        <TabItem href={RouteTo.individualRating(id)}>Číselné výsledky</TabItem>
      </TabBar>
      <LLMReport individualResponseId={id} />
    </main>
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
