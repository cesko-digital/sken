import { formUrl } from "@/src/utils";
import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
  return NextResponse.redirect(formUrl);
}
