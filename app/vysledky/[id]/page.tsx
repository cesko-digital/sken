import Airtable from "airtable";
import { notFound } from "next/navigation";
import { decodeType, field, number, record } from "typescript-json-decoder";

type Params = {
  id: string;
};

export type Props = {
  params: Promise<Params>;
};

type Result = decodeType<typeof decodeResult>;

//
// UI
//

export default async function ResultPage({ params }: Props) {
  const result = await getResult((await params).id);
  if (!result) {
    notFound();
  }
  return (
    <p>
      Answer 1: {result.answer1}, answer 2: {result.answer2}
    </p>
  );
}

//
// Data Loading
//

const decodeResult = record({
  answer1: field("Answer 1", number),
  answer2: field("Answer 2", number),
});

async function getResult(id: string): Promise<Result | null> {
  const base = new Airtable().base("appmxoOm1pOLmmGDn");
  const table = base("tblPoDgjuHzKor0hy");
  return await table
    .find(id)
    .then((record) => record.fields)
    .then(decodeResult)
    .catch((e) => {
      console.error(e);
      return null;
    });
}

/**
 * Force incremental static generation (ISR), see https://github.com/cesko-digital/web/issues/987
 *
 * This is bypassed (underscore) while in development, as we get closer to production,
 * we will turn caching back on by removing the underscore.
 */
export async function _generateStaticParams() {
  return [];
}
