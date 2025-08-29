import { getOrganisationSummary } from "@/src/benchmarking";
import { getFormResponse } from "@/src/db";
import { RatingSummary } from "./RatingSummary";
import TurndownService from "turndown";

type Params = {
  id: string;
};

export type Props = {
  params: Promise<Params>;
};

/** Get rating summary in a LLM-friendly format */
export async function GET(_: Request, { params }: Props): Promise<Response> {
  const id = (await params).id;
  const formResponse = await getFormResponse(id);
  if (!formResponse) {
    return new Response("Not found", { status: 404 });
  }
  const summary = getOrganisationSummary(formResponse);
  // https://github.com/vercel/next.js/discussions/57631
  const { renderToString } = await import("react-dom/server");
  const html = renderToString(RatingSummary({ summary }));
  const markdown = new TurndownService({
    headingStyle: "atx",
    bulletListMarker: "-",
  }).turndown(html);
  return new Response(markdown, { status: 200 });
}
