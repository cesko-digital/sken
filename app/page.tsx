import { leadFormUrl } from "@/src/utils";

export default function HomePage() {
  return (
    <div>
      <h1>Sken bude dostupný zase v září</h1>
      <p>
        V červnu jsme Sken digitální vyspělosti úspěšně otestovali. Přes léto
        jej vylepšíme a znovu spustíme v září.{" "}
        <mark>
          Nechte nám na sebe kontakt a ozveme se vám, až bude Sken opět k
          dispozici.
        </mark>
      </p>
      <div>
        <a href={leadFormUrl} className="typo-link">
          Mám o Sken zájem
        </a>
      </div>
    </div>
  );
}
