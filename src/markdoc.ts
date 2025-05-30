import { Config, Schema } from "@markdoc/markdoc";

const chart = (tagName: string): Schema => ({
  render: tagName,
  selfClosing: true,
  attributes: {
    data: {},
  },
});

/**
 * Our custom Markdown processing config
 *
 * We customize the tag names used for standard nodes
 * such as paragraphs so that we can style them as needed.
 */
export const config: Config = {
  nodes: {
    paragraph: { render: "Para" },
    list: { render: "List" },
    item: { render: "Item" },
    em: { render: "Em" },
    strong: { render: "Strong" },
    heading: { render: "Heading2" },
    link: {
      render: "Link",
      attributes: {
        href: {
          type: "String",
          required: true,
        },
      },
    },
  },
  tags: {
    axis_score_chart: chart("AxisScoreChart"),
    score_distribution_chart: chart("ScoreDistributionChart"),
    stacked_axis_score_chart: chart("StackedAxisScoreChart"),
  },
};
