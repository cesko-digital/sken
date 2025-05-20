import { notFound } from "next/navigation";
import { getFormResponse } from "@/src/db";
import { Metadata } from "next";
import path from "path";
import Markdoc, { renderers } from "@markdoc/markdoc";
import { config } from "@/src/markdoc";
import React, { ReactNode } from "react";
import { promises as fs } from "fs";
import { ChartTags } from "@/app/vysledky/[id]/Charts";
import Image from "next/image";
import { formUrl } from "@/src/utils";

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
  const pageSource = await fs.readFile(
    path.join(process.cwd(), "/app/vysledky/[id]/content.md"),
    "utf-8"
  );

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
        components: { ...ChartTags, Image, Box, Button },
      })}
    </div>
  );
}

const Box = ({ children }: { children: ReactNode }) => (
  <div className="box">{children}</div>
);

const Button = ({ href, title }: { href: string; title: string }) => (
  <div className="button-wrapper">
    <a href={href} target="_blank" className="button">
      {title}
    </a>
  </div>
);

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
