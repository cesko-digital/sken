"use client";

import React from "react";
import { useLLMReport } from "./hook";
import { StyledMarkdown } from "@/components/StyledMarkdown";

// TBD: Disabled buttons
export const LLMReport = ({
  individualResponseId,
}: {
  individualResponseId: string;
}) => {
  const { model, load } = useLLMReport(individualResponseId);
  return (
    <div>
      {model.state === "idle" && (
        <button className="button" onClick={() => load()}>
          Načíst LLM report
        </button>
      )}
      {model.state === "loading" && (
        <button className="button bg-gray-400" disabled>
          Generuji report…
        </button>
      )}
      {model.state === "loaded" && <StyledMarkdown source={model.report} />}
      {model.state === "failed" && (
        <button className="button bg-gray-400" disabled>
          Chyba 😞
        </button>
      )}
    </div>
  );
};
