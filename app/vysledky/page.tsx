import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Report from "./Report";

export const metadata: Metadata = {
  title: "Sken digitální vyspělosti – výsledky první vlny",
  description:
    "Sonda do digitální vyspělosti 164 českých neziskových organizací odhalila jasné vzorce: silnou kulturu, slabé nástroje a velký potenciál",
};

export default async function OverallResultsPage() {
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumbs currentPage="Výsledky" />
      <h1 className="typo-head1">Celkové výsledky skenu</h1>
      <Report />
    </div>
  );
}
