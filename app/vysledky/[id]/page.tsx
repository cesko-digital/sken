import { notFound } from "next/navigation";
import { getAllFormResponsesForOrganization, getFormResponse } from "@/src/db";
import { Metadata } from "next";
import Markdoc, { renderers } from "@markdoc/markdoc";
import { config } from "@/src/markdoc";
import React from "react";
import ChartTags from "@/components/Charts";
import { formUrl, resultsMarkdocSource } from "@/src/utils";
import ContentTags from "@/components/ContentTags";

type Params = {
  id: string;
};

export type Props = {
  params: Promise<Params>;
};

/** Show digital maturity assessment with text & charts */
export default async function ResultPage({ params }: Props) {
  // Read score data from DB
  const response = await getFormResponse((await params).id);
  if (!response) {
    notFound();
  }

  // Read page content from Markdown
  const pageSource = await resultsMarkdocSource();
  const syntaxTree = Markdoc.parse(pageSource);
  const renderTree = Markdoc.transform(syntaxTree, {
    ...config,
    variables: {
      organisationName: response.meta.organisationName,
      data: response.scores,
      formUrl,
    },
  });

  return (
    <div className="markdoc-root">
      {renderers.react(renderTree, React, {
        components: { ...ChartTags, ...ContentTags },
      })}
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
