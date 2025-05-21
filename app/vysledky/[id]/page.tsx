import { notFound } from "next/navigation";
import { getFormResponse } from "./db";

type Params = {
  id: string;
};

export type Props = {
  params: Promise<Params>;
};

export default async function ResultPage({ params }: Props) {
  const response = await getFormResponse((await params).id);
  if (!response) {
    notFound();
  }
  return (
    <div>
      <p>
        Response ID {response.meta.id}, organization name{" "}
        {response.meta.organizationName}.
      </p>
      <pre>{JSON.stringify(response.scores, null, 2)}</pre>
    </div>
  );
}
