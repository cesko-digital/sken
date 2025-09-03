import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getFormResponse } from "@/src/db";
import { notFound } from "next/navigation";
import { LLMReport } from "./LLMReport";

type Params = {
  id: string;
};

export type Props = {
  params: Promise<Params>;
};

// This is just a testing rig for the LLM report stuff
export default async function Page({ params }: Props) {
  const id = (await params).id;
  const individualResponse = await getFormResponse(id);
  if (!individualResponse) {
    notFound();
  }
  const organizationName = individualResponse.meta.organisationName;
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumbs currentPage="LLM report" />
      <h1 className="typo-head1">
        Výsledky skenu digitální vyspělosti pro {organizationName}
      </h1>
      <LLMReport individualResponseId={id} />
    </div>
  );
}
