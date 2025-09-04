import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function Custom404() {
  return (
    <main className="content-wrapper flex flex-col gap-4">
      <Breadcrumbs currentPage="Stránka nenalezena" />
      <h1 className="typo-head1">404 / Stránka nenalezena</h1>
      <p className="max-w-prose">
        Požadovaná stránka nebyla nalezena nebo při jejím načítání došlo k
        chybě. Zkuste to znovu nebo za chvilku a pokud problém nezmizí, napište
        nám prosím na adresu{" "}
        <a href="mailto:zoul@cesko.digital" className="typo-link">
          zoul@cesko.digital
        </a>
        , opravíme. Pardon za komplikace!
      </p>
    </main>
  );
}
