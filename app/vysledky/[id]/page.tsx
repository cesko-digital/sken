import { notFound } from "next/navigation";
import { getFormResponse } from "./db";

type Params = {
  id: string;
};

export type Props = {
  params: Promise<Params>;
};

export default async function ResultPage({ params }: Props) {
  const result = await getFormResponse((await params).id);
  if (!result) {
    notFound();
  }
  return (
    <p>
      Answer 1: {result.answer1}, answer 2: {result.answer2}
    </p>
  );
}
