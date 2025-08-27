import { RouteTo } from "@/src/utils";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex items-center justify-center px-4 mt-10 md:mt-30">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-cd text-6xl font-bold mb-6 leading-tight">
          <span className="text-[blue]">Sken digitální vyspělosti</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Zjistěte, jak může vaše organizace zvyšovat svou digitální vyspělost –
          a být tak úspěšnější při naplňování svého poslání.{" "}
          <mark style={{ marginLeft: "0.1ex" }}>Nic to nestojí.</mark>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href={RouteTo.leadFormUrl}
            className="inline-block button bg-[blue]"
          >
            Chci se oskenovat
          </Link>
          <Link href={RouteTo.overallResults} className="inline-block button">
            Chci vidět celkové výsledky
          </Link>
        </div>
      </div>
    </main>
  );
}
