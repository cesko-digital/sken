import { getFormResponse } from "@/src/db";

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
  return new Response(JSON.stringify(response, null, 2), {
    headers: { "Content-Type": "application/json" },
  });
}
