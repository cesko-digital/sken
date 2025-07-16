import { formUrl } from "@/src/utils";
import { NextRequest, NextResponse } from "next/server";

/**
 * Create a nice scan form URL redirected to Fillout
 *
 * This lets us distribute the form URL using our domain.
 */
export async function GET(request: NextRequest): Promise<Response> {
  const sourceUrl = new URL(request.url);
  const targetUrl = new URL(formUrl);
  sourceUrl.searchParams.forEach((val, key) => {
    targetUrl.searchParams.append(key, val);
  });
  return NextResponse.redirect(targetUrl);
}
