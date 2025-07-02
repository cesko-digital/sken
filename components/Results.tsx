import { config } from "@/src/markdoc";
import { formUrl } from "@/src/utils";
import Markdoc, { renderers } from "@markdoc/markdoc";
import ChartTags from "./Charts";
import ContentTags from "./ContentTags";
import React from "react";
import { promises as fs } from "fs";
import path from "path";
import { ScoreChart } from "@/src/model";

type Props = {
  responseType: "individual" | "group";
  organisationName: string;
  data: ScoreChart;
};

/** Show digital maturity assessment with text and charts */
export async function Results(props: Props) {
  const { responseType, data, organisationName } = props;

  // Read page source in Markdoc
  const pageSource = await fs.readFile(
    path.join(process.cwd(), "/components/results.md"),
    "utf-8"
  );

  // Render Markdoc
  const syntaxTree = Markdoc.parse(pageSource);
  const renderTree = Markdoc.transform(syntaxTree, {
    ...config,
    variables: {
      responseType,
      organisationName,
      formUrl,
      data,
    },
  });

  // Render React nodes
  return (
    <div className="markdoc-root">
      {renderers.react(renderTree, React, {
        components: { ...ChartTags, ...ContentTags },
      })}
    </div>
  );
}
