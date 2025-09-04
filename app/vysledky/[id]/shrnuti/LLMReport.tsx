"use client";

import React, { useEffect } from "react";
import { useLLMReport } from "./hook";
import { StyledMarkdown } from "@/components/StyledMarkdown";

export const LLMReport = ({
  individualResponseId,
}: {
  individualResponseId: string;
}) => {
  const { model, load } = useLLMReport(individualResponseId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(load, [individualResponseId]);
  return (
    <div>
      {(model.state === "loading" || model.state === "idle") && (
        <p>Generuji report…</p>
      )}
      {model.state === "failed" && (
        <p className="max-w-prose">
          <mark>Při generování reportu došlo k chybě.</mark> Zkuste to prosím
          znovu později a pokud problém nezmizí, napište nám na{" "}
          <a href="mailto:zoul@cesko.digital" className="typo-link">
            zoul@cesko.digital
          </a>
          , opravíme. Pardon za potíže!
        </p>
      )}
      {model.state === "loaded" && (
        <section>
          <p>
            <mark>
              Následující shrnutí bylo z vašich výsledků vygenerováno
              automaticky pomocí jazykového modelu (LLM).
            </mark>{" "}
            Jako obvykle platí, že umělá inteligence je dobrý sluha, ale zlý
            pán. Automatické shrnutí vám může pomoct nasměrovat pozornost na
            správná místa, ale nespoléhejte na něj slepě, stroj se může snadno
            splést. Rozumné je ověřit jeho tipy na číselných výsledcích nebo
            konzultovat s expertem či expertkou. A teď už stroj:
          </p>
          <StyledMarkdown source={model.report} />
        </section>
      )}
    </div>
  );
};
