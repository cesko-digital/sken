import { Config, Schema } from "@markdoc/markdoc";

const chart = (tagName: string): Schema => ({
  render: tagName,
  selfClosing: true,
  attributes: {
    data: {},
  },
});

const topicChart = (tagName: string): Schema => ({
  render: tagName,
  selfClosing: true,
  attributes: {
    data: {},
    area: {
      type: Number,
    },
  },
});

/** Our custom Markdoc config with charting tags */
export const config: Config = {
  tags: {
    axis_score_chart: chart("AxisScoreChart"),
    score_distribution_chart: chart("ScoreDistributionChart"),
    stacked_axis_score_chart: chart("StackedAxisScoreChart"),
    score_over_area_chart: chart("ScoreOverAreaChart"),
    score_over_area_and_axis_chart: chart("ScoreOverAreaAndAxisChart"),
    topic_drilldown_chart: topicChart("TopicDrillDownChart"),
  },
};
