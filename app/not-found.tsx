export default function Custom404() {
  return (
    <div className="flex flex-col gap-4 max-w-prose">
      <h1 className="typo-title">Stránka nenalezena</h1>
      <p>
        Požadovaná stránka nebyla nalezena nebo při jejím načítání došlo k
        chybě. Zkuste to znovu nebo za chvilku a pokud problém nezmizí, napište
        nám prosím na adresu{" "}
        <a href="mailto:zoul@cesko.digital" className="typo-link">
          zoul@cesko.digital
        </a>
        , opravíme. Pardon za komplikace!
      </p>
    </div>
  );
}
