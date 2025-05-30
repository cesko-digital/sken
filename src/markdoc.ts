import { Config, Schema } from "@markdoc/markdoc";

const chart = (tagName: string): Schema => ({
  render: tagName,
  selfClosing: true,
  attributes: {
    data: {},
  },
});

/** Our custom Markdoc config with charting tags */
export const config: Config = {
  tags: {
    axis_score_chart: chart("AxisScoreChart"),
    score_distribution_chart: chart("ScoreDistributionChart"),
    stacked_axis_score_chart: chart("StackedAxisScoreChart"),
  },
};
