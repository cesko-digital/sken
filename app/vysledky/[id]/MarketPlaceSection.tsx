export const MarketPlaceSection = () => (
  <div className="bg-gray-200 p-8 pb-10 flex flex-col gap-4">
    <h2 className="typo-title2">
      Máte zadání? Zkonzultujte další postup na Tržišti
    </h2>
    <p>
      Tržiště je{" "}
      <em className="typo-emphasis">volně přístupné internetové fórum</em>,
      které provozuje organizace Česko.Digital. Neziskové organizace zde mohou
      <em className="typo-emphasis">
        bezplatně poptávat dobrovolnickou i placenou pomoc
      </em>{" "}
      se vším, co se týká digitálních technologií.
    </p>
    <p>
      Je to ideální místo, kam zavítat, pokud váháte, jak na základě výsledků
      skenu postupovat dál, nebo už máte konkrétní zadání a{" "}
      <em className="typo-emphasis">
        sháníte někoho, kdo vám pomůže s jeho realizací
      </em>
      .
    </p>
    <p>
      Vytvořte nový příspěvek, popište, s čím potřebujete pomoct, a počkejte na
      reakce.
    </p>
    <div className="text-center mt-4">
      <a
        target="_blank"
        href="https://trziste.diskutuj.digital"
        className="inline-block bg-gray-800 text-white p-3 px-6 rounded-lg"
      >
        Navštivte Tržiště
      </a>
    </div>
  </div>
);
