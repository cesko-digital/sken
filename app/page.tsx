import { StatCard } from "@/components/StatCard";
import { RouteTo } from "@/src/utils";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center gap-20 md:gap-30 px-4 mt-10 md:mt-30">
      <HeroSection />
      <ResultsTeaser />
    </main>
  );
}

const HeroSection = () => (
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="font-cd text-6xl font-bold mb-6 leading-tight">
      <span className="text-[blue]">Sken digitální vyspělosti</span>
    </h1>

    <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
      Zjistěte, jak může vaše nezisková organizace zvyšovat svou digitální
      vyspělost – a být tak úspěšnější při naplňování svého poslání.{" "}
      <mark style={{ marginLeft: "0.1ex", whiteSpace: "nowrap" }}>
        Nic to nestojí.
      </mark>
    </p>

    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <Link
        href={RouteTo.leadFormUrl}
        className="inline-block button bg-[blue] max-sm:w-full"
      >
        Chci se oskenovat
      </Link>
      <Link
        href={RouteTo.overallResults}
        className="inline-block button max-sm:w-full"
      >
        Chci vidět celkové výsledky
      </Link>
    </div>
  </div>
);

const ResultsTeaser = () => (
  <div className="text-center">
    <h2 className="typo-head2">Jak je na tom český nezisk s digitalizací?</h2>
    <div className="flex flex-col gap-4">
      <p className="max-w-prose m-auto">
        <mark>
          Cílem bylo zmapovat současný stav českého neziskového sektoru
        </mark>{" "}
        a identifikovat <strong>klíčové výzvy a příležitosti</strong> v oblasti
        digitalizace. Výsledky poskytují cenné poznatky o tom, kde sektor stojí
        a kam by se měl ubírat.
      </p>
      <p className="max-w-prose m-auto">
        Zjištění prezentovaná na tomto webu vycházejí z dat o{" "}
        <strong>164 neziskových organizacích</strong>, které jsme získali pomocí{" "}
        <strong>Skenu digitální vyspělosti</strong>. Tento nástroj mapuje
        aktuální stav organizace ve třech klíčových pilířích:{" "}
        <strong>kultura</strong> (postoje vedení), <strong>dovednosti</strong>{" "}
        (schopnosti lidí) a <strong>nástroje</strong> (technické vybavení).
      </p>
      <div className="grid md:grid-cols-3 gap-4 my-6">
        <StatCard value="164" label="analyzovaných organizací" color="blue" />
        <StatCard value="57 %" label="má solidní základ" color="green" />
        <StatCard value="1 %" label="dosahuje špičky" color="purple" />
      </div>
      <p>
        <Link
          href={RouteTo.overallResults}
          className="inline-block button max-sm:w-full"
        >
          Chci vidět celkové výsledky
        </Link>
      </p>
    </div>
  </div>
);
