import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ChartsSummaryPage } from "@/components/ChartsSummaryPage";
import { getAllGroupFormResponsesForHash } from "@/src/db";
import { average } from "@/src/model";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = {
  hash: string;
};

export type Props = {
  params: Promise<Params>;
};

/** Refresh data every 60 minutes */
export const revalidate = 3600;

/** Show group digital maturity assessment */
export default async function GroupResultPage({ params }: Props) {
  const hash = (await params).hash;
  const responses = await getAllGroupFormResponsesForHash(hash);
  if (responses.length === 0) {
    notFound();
  }

  const groupRatings = responses.map((r) => r.scores);
  const organisationName = responses[0].meta.organisationName;
  const averageScoreChart = average(groupRatings)!;

  return (
    <section className="content-wrapper flex flex-col gap-4">
      <Breadcrumbs currentPage={organisationName} />
      <h1 className="typo-head1">
        Průměrné výsledky skenu digitální vyspělosti pro {organisationName}
      </h1>
      <h2 className="typo-head2 text-gray-500 -mt-4 mb-6">
        <mark>Počítáno z celkem {groupRatings.length} hodnocení</mark>
      </h2>
      <ChartsSummaryPage data={averageScoreChart} />
    </section>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const hash = (await params).hash;
  const responses = await getAllGroupFormResponsesForHash(hash);
  if (responses.length === 0) {
    notFound();
  }
  const organizationName = responses[0].meta.organisationName;
  return {
    title: `${organizationName}: Výsledky skenu digitální vyspělosti`,
  };
}

/** Force incremental static generation (ISR), see https://github.com/cesko-digital/web/issues/987 */
export async function generateStaticParams() {
  return [];
}
