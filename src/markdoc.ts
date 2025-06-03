import { Config, Schema } from "@markdoc/markdoc";

/** Basic chart with a `data` attribute */
const chart = (tagName: string): Schema => ({
  render: tagName,
  selfClosing: true,
  attributes: {
    data: {},
    caption: {
      type: String,
    },
  },
});

/** Topic chart that has an `area` attribute in addition to `data` */
const topicChart = (tagName: string): Schema => ({
  render: tagName,
  selfClosing: true,
  attributes: {
    data: {},
    caption: {
      type: String,
    },
    area: {
      type: Number,
    },
  },
});

/**
 * Custom image
 *
 * We don’t use plain Markdown images because they would cause layout jumps.
 */
const image: Schema = {
  render: "Image",
  selfClosing: true,
  attributes: {
    src: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
};

/** Generic colored box with content */
const box = {
  render: "Box",
  children: ["paragraph", "tag", "list"],
};

/** Link stylized as button */
const button = {
  render: "Button",
  selfClosing: true,
  attributes: {
    href: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};

/** Inline highlighter */
const mark = {
  render: "mark",
  children: ["inline"],
};

/** Our custom Markdoc config with charting tags */
export const config: Config = {
  tags: {
    axis_score_chart: chart("AxisScoreChart"),
    score_distribution_chart: chart("ScoreDistributionChart"),
    stacked_axis_score_chart: chart("StackedAxisScoreChart"),
    score_over_area_chart: chart("ScoreOverAreaChart"),
    score_over_area_and_axis_chart: chart("ScoreOverAreaAndAxisChart"),
    topic_drilldown_chart: topicChart("TopicDrillDownChart"),
    button,
    image,
    mark,
    box,
  },
};
