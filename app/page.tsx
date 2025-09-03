import { StatCard } from "@/components/StatCard";
import { RouteTo } from "@/src/utils";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-20 my-20 md:mt-30">
      <HeroSection />
      <ResultsTeaser />
      <Methodology />
    </main>
  );
}

const HeroSection = () => (
  <section className="content-wrapper">
    <h1 className="font-cd text-6xl font-bold mb-6 leading-tight text-center">
      <span className="text-it">Sken digitální vyspělosti</span>
    </h1>

    <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto text-center">
      Zjistěte, jak může vaše nezisková organizace zvyšovat svou digitální
      vyspělost – a být tak úspěšnější při naplňování svého poslání.{" "}
      <mark style={{ marginLeft: "0.1ex", whiteSpace: "nowrap" }}>
        Nic to nestojí.
      </mark>
    </p>

    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <Link
        href={RouteTo.leadFormUrl}
        className="inline-block button bg-it max-sm:w-full"
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
  </section>
);

const ResultsTeaser = () => (
  <section className="bg-light-gray w-full py-10">
    <div className="content-wrapper text-center">
      <h2 className="typo-head2">Jak je na tom český nezisk s digitalizací?</h2>
      <div className="flex flex-col gap-4">
        <p className="max-w-prose m-auto">
          <mark>
            Cílem bylo zmapovat současný stav českého neziskového sektoru
          </mark>{" "}
          a identifikovat <strong>klíčové výzvy a příležitosti</strong> v
          oblasti digitalizace. Výsledky poskytují cenné poznatky o tom, kde
          sektor stojí a kam by se měl ubírat.
        </p>
        <p className="max-w-prose m-auto">
          Zjištění prezentovaná na tomto webu vycházejí z dat o{" "}
          <strong>164 neziskových organizacích</strong>. Náš nástroj mapuje
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
  </section>
);

const Methodology = () => (
  <section className="content-wrapper">
    <h2 className="typo-head2">Jak to funguje?</h2>
    <div className="flex flex-col gap-4">
      <p>
        Sken vychází z předpokladu, že lidé v organizaci dosahují{" "}
        <em>špičkových výsledků</em> pouze pokud se vzájemně doplňují a
        podporují 3 pilíře: <em>Kultura, Dovednosti a Nástroje</em>.
      </p>
      <Image
        src="https://assets.cesko.digital/11f81f04.jpg"
        className="my-4 border-[1px] border-gray-300 w-full max-w-prose"
        width={2309}
        height={1732}
        alt=""
      />
      <p>
        Sken funguje na principu <i>benchmarkování</i>: nabízí výroky, které
        popisují, jak může organizace fungovat. Úkolem vyplňující osoby je{" "}
        <em>
          posoudit, nakolik nabízený popis odpovídá reálnému fungování skenované
          organizace
        </em>
        .
      </p>
      <p>Odpovědi se zaznamenávají jako hodnoty na škále 1–5, kde:</p>
      <ul>
        <li>1 = výrok vůbec neodpovídá</li>
        <li>5 = výrok naprosto odpovídá</li>
      </ul>
      <p>
        Jinými slovy,{" "}
        <em>
          čím vyšší hodnota, tím blíže má aktuální stav organizace ke stavu
          popsanému ve výroku
        </em>
        .
      </p>
      <p>V rámci vyhodnocení jsou pak hodnoty interpretovány následovně:</p>
      <ul>
        <li>1 = Nevyužitý potenciál</li>
        <li>2 = Dobrý začátek</li>
        <li>3 = Solidní základ</li>
        <li>4 = Vynikající praxe</li>
        <li>5 = Inspirativní přístup</li>
      </ul>
      <p>
        Sken mapuje <em>4 klíčové oblasti digitální vyspělosti</em>:
      </p>
      <ul className="list-disc list-inside">
        <li>Komunikace & Spolupráce</li>
        <li>Procesy & Automatizace</li>
        <li>Bezpečnost & Flexibilita</li>
        <li>Učení & Rozvoj</li>
      </ul>
      <p>
        <em>
          V každé oblasti sken navíc mapuje 5 klíčových témat. Každé téma se
          vždy posuzuje optikou všech 3 pilířů.
        </em>{" "}
        Výstupem skenu je tedy 60 výroků ohodnocených na škále 1–5.
      </p>
      <p className="mt-4">
        <Link
          href={RouteTo.overallResults}
          className="inline-block button max-sm:w-full"
        >
          Chci vidět celkové výsledky
        </Link>
      </p>
    </div>
  </section>
);
