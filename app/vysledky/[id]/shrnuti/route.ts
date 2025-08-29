import { getFormResponse } from "@/src/db";
import { getTextualRatingSummary } from "@/components/RatingSummary";

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
  const summary = await getTextualRatingSummary(formResponse);
  return new Response(summary, { status: 200 });
}
