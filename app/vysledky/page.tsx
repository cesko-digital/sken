import { Breadcrumbs } from "@/components/Breadcrumbs";
import Report from "./Report";

export default async function OverallResultsPage() {
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumbs currentPage="Výsledky" />
      <h1 className="typo-head1">Celkové výsledky skenu</h1>
      <Report />
    </div>
  );
}
