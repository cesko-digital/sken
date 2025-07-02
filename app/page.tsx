import { leadFormUrl } from "@/src/utils";

export default function HomePage() {
  return (
    <div className="markdoc-root">
      <h1>Sken bude dostupný zase v září</h1>
      <p>
        V červnu jsme Sken digitální vyspělosti úspěšně otestovali. Přes léto
        jej vylepšíme a znovu spustíme v září.{" "}
        <mark>
          Nechte nám na sebe kontakt a ozveme se vám, až bude Sken opět k
          dispozici.
        </mark>
      </p>
      <div style={{ marginTop: "40px" }}>
        <a href={leadFormUrl} className="button">
          Mám o Sken zájem
        </a>
      </div>
    </div>
  );
}
