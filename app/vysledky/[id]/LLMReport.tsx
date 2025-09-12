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
        <section className="flex flex-col gap-8">
          <Explainer />
          <SkeletonLoader />
        </section>
      )}
      {model.state === "loaded" && (
        <section>
          <Explainer />
          <StyledMarkdown source={model.report} />
        </section>
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
    </div>
  );
};

const Explainer = () => (
  <p>
    <mark>
      Následující shrnutí bylo z vašich výsledků vygenerováno automaticky pomocí
      jazykového modelu (LLM).
    </mark>{" "}
    Jako obvykle platí, že umělá inteligence je dobrý sluha, ale zlý pán.
    Automatické vyhodnocení vám může pomoct nasměrovat pozornost na správná
    místa, ale nespoléhejte na něj slepě, stroj se může snadno splést. Rozumné
    je ověřit jeho tipy na číselných výsledcích nebo konzultovat s expertem či
    expertkou. A teď už stroj:
  </p>
);

const SkeletonLoader = () => {
  return (
    <div role="status" className="flex flex-col gap-4">
      <div className="max-w-sm animate-pulse flex flex-col gap-4">
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px]"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px]"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        <span className="sr-only">Generuji report…</span>
      </div>
      <p className="text-gray-700 text-sm">
        Analyzujeme vaše výsledky, může to dvě tři minuty trvat.
      </p>
    </div>
  );
};
