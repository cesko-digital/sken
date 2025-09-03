import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Report from "./Report";

export const metadata: Metadata = {
  title: "Sken digitální vyspělosti – výsledky první vlny",
  description:
    "Silná kultura, slabé nástroje a velký potenciál. Jaké další vzorce odhalila naše sonda do digitální vyspělosti 164 českých neziskových organizací?",
};

export default async function OverallResultsPage() {
  return (
    <main className="content-wrapper flex flex-col gap-4">
      <Breadcrumbs currentPage="Výsledky" />
      <h1 className="typo-head1">Celkové výsledky skenu</h1>
      <Report />
    </main>
  );
}
