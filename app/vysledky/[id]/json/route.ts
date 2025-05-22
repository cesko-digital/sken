import { getFormResponse } from "@/app/api";
import { getAssessmentStats } from "@/app/model";

type Params = {
  id: string;
};

export type Props = {
  params: Promise<Params>;
};

export async function GET(_: Request, { params }: Props): Promise<Response> {
  const response = await getFormResponse((await params).id);
  if (!response) {
    return new Response(null, { status: 404 });
  }
  const out = {
    meta: response.meta,
    scores: response.scores,
    stats: getAssessmentStats(response.scores),
  };
  return new Response(JSON.stringify(out, null, 2), {
    headers: { "Content-Type": "application/json" },
  });
}
