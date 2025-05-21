import Airtable from "airtable";
import { decodeType, field, number, record } from "typescript-json-decoder";

export type FormResponse = decodeType<typeof decodeFormResponse>;

export const decodeFormResponse = record({
  answer1: field("Answer 1", number),
  answer2: field("Answer 2", number),
});

export async function getFormResponse(
  id: string
): Promise<FormResponse | null> {
  const base = new Airtable().base("appmxoOm1pOLmmGDn");
  const table = base("tblPoDgjuHzKor0hy");
  return await table
    .find(id)
    .then((record) => record.fields)
    .then(decodeFormResponse)
    .catch((e) => {
      console.error(e);
      return null;
    });
}
