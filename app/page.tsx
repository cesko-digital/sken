import { leadFormUrl } from "@/src/utils";

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
        <div>
          <a href={leadFormUrl} className="inline-block button">
            Mám o Sken zájem
          </a>
        </div>
      </div>
    </main>
  );
}
