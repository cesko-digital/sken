import {
  GroupAverageRating,
  OrganisationRatingSummary,
  Rating,
} from "@/src/benchmarking";
import { Fragment } from "react";

/**
 * Organisation rating summary to use in LLMs
 *
 * We want the summary to be in Markdown, but start with an ordinary React
 * component to get reasonable DX. Later we convert the React tree to HTML
 * and Markdown.
 */
export const RatingSummary = ({
  summary,
}: {
  summary: OrganisationRatingSummary;
}) => (
  <div>
    <h1>Výsledky skenu digitální vyspělosti</h1>
    <p>
      Následující shrnutí popisuje výsledky hodnocení digitální vyspělosti
      organizace získané pomocí Skenu digitální vyspělosti od Česko.Digital. Jak
      hodnocení funguje:
    </p>
    <ul>
      <li>
        Digitální vyspělost se skládá ze 3 pilířů: Kultura (postoje vedení),
        Dovednosti (schopnosti lidí), Nástroje (technické vybavení)
      </li>
      <li>Každý pilíř má maximum 100 bodů, celkové skóre maximum 300 bodů</li>
      <li>Ideální stav: všechny pilíře vyrovnané na úrovni 60+ bodů</li>
    </ul>
    <h2>Jak s daty pracovat</h2>
    <ul>
      <li>
        Nepouštěj se do žádných doporučení, pouze interpretuj, co čísla
        znamenají
      </li>
    </ul>
    <h2>Základní údaje</h2>
    <List
      data={{
        "Název organizace": summary.name,
        "Typ organizace": summary.type ?? "nevíme",
        "Oblast činnosti": summary.field ?? "nevíme",
        "Celkové skóre": `${summary.rating.overallScore} bodů ze 300`,
      }}
    />
    <h2>Rozložení bodů</h2>
    <List
      data={{
        Kultura: `${summary.rating.cultureScore} bodů ze 100`,
        Dovednosti: `${summary.rating.skillScore} bodů ze 100`,
        Nástroje: `${summary.rating.toolingScore} bodů ze 100`,
      }}
    />
    <h2>Srovnání s celým sektorem</h2>
    <p>
      Jak si stojíte mezi všemi {summary.wholeDatasetAverage.sampleSize}{" "}
      organizacemi, které se zúčastnily první vlny skenování?
    </p>
    <BenchmarkCompare
      rating={summary.rating}
      benchmark={summary.wholeDatasetAverage}
    />
    {summary.segmentAverage && (
      <Fragment>
        <h2>Srovnání s podobnými organizacemi</h2>
        <p>
          Jak si stojíte mezi {summary.segmentAverage.sampleSize} organizacemi
          podobného typu?
        </p>
        <BenchmarkCompare
          rating={summary.rating}
          benchmark={summary.segmentAverage}
        />
      </Fragment>
    )}
  </div>
);

const List = ({ data }: { data: Record<string, string> }) => (
  <ul>
    {Object.entries(data).map(([key, val]) => (
      <li key={key}>
        {key}: {val}
      </li>
    ))}
  </ul>
);

const BenchmarkCompare = ({
  rating,
  benchmark,
}: {
  rating: Rating;
  benchmark: GroupAverageRating;
}) => (
  <List
    data={{
      "Celkové skóre": `vy ${rating.overallScore}, průměr ${benchmark.overallScore}, maximum 300`,
      "Kultura": `vy ${rating.cultureScore}, průměr ${benchmark.cultureScore}, maximum 100`,
      "Dovednosti": `vy ${rating.skillScore}, průměr ${benchmark.skillScore}, maximum 100`,
      "Nástroje": `vy ${rating.toolingScore}, průměr ${benchmark.toolingScore}, maximum 100`,
    }}
  />
);
