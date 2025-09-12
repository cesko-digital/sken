import { useState } from "react";

type Model =
  | { state: "idle" }
  | { state: "loading" }
  | { state: "loaded"; report: string }
  | { state: "failed"; error: Error };

export function useLLMReport(individualRatingId: string) {
  const [model, setModel] = useState<Model>({ state: "idle" });
  const load = () => {
    const url = `/vysledky/${individualRatingId}/report.md`;
    setModel({ state: "loading" });
    fetch(url).then(async (response) => {
      if (response.ok) {
        const report = await response.text();
        setModel({ state: "loaded", report });
      } else {
        setModel({
          error: new Error(response.statusText),
          state: "failed",
        });
      }
    });
  };
  return { model, load };
}
