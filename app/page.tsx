import { RouteTo } from "@/src/utils";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1 className="typo-head1">Sken bude dostupný zase v září</h1>
      <div className="max-w-prose flex flex-col gap-10">
        <p>
          V červnu jsme Sken digitální vyspělosti úspěšně otestovali. Přes léto
          jej vylepšíme a znovu spustíme v září.{" "}
          <mark>
            Nechte nám na sebe kontakt a ozveme se vám, až bude Sken opět k
            dispozici.
          </mark>
        </p>
        <div className="flex flex-row gap-4">
          <Link href={RouteTo.leadFormUrl} className="inline-block button">
            Mám o Sken zájem
          </Link>
          <Link href={RouteTo.overallResults} className="inline-block button">
            Chci vidět výsledky
          </Link>
        </div>
      </div>
    </main>
  );
}
