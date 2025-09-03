import React from "react";
import { notFound } from "next/navigation";
import { getFormResponse } from "@/src/db";
import { Metadata } from "next";
import { ResultsPage } from "@/components/ResultsPage";
import { Breadcrumbs } from "@/components/Breadcrumbs";

type Params = {
  id: string;
};

export type Props = {
  params: Promise<Params>;
};

/** Show individual digital maturity assessment */
export default async function ResultPage({ params }: Props) {
  const id = (await params).id;
  const individualResponse = await getFormResponse(id);
  if (!individualResponse) {
    notFound();
  }
  const organizationName = individualResponse.meta.organisationName;
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumbs currentPage={organizationName} />
      <ResultsPage
        responseType="individual"
        organisationName={organizationName}
        data={individualResponse.scores}
      />
    </div>
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
