import { BarChart } from "@mui/x-charts";
import { ChartWrapper, first, second, TextWrapper } from "./Components";
import { scoreLabels } from "./db";

export const ScoreDistributionChart = ({
  data,
}: {
  data: Record<string, number>;
}) => {
  const values = Object.entries(data);
  const labelFor = (i: string) => scoreLabels[i] ?? i;
  return (
    <div className="flex flex-col gap-4">
      <h2 className="typo-title2">Celková vyspělost</h2>
      <ChartWrapper>
        <BarChart
          series={[{ data: values.map(second) }]}
          yAxis={[{ label: "Kolikrát jste takto hodnotili" }]}
          xAxis={[
            {
              data: values.map(first).map(labelFor),
              colorMap: {
                type: "ordinal",
                values: [labelFor("0")],
                colors: ["lightGray"],
              },
            },
          ]}
          barLabel="value"
          height={300}
        />
      </ChartWrapper>
      <TextWrapper>
        <p>
          Graf č. 1 ukazuje,{" "}
          <em className="typo-emphasis">
            jaké úrovně digitální vyspělosti jsou dnes ve vaší organizaci
            zastoupeny
          </em>{" "}
          napříč mapovanými pilíři a oblastmi.{" "}
          <em className="typo-emphasis">
            Cílem je co největší sjednocenost úrovně.
          </em>{" "}
          Čím více je v grafu zastoupena jedna konkrétní úroveň, tím lépe.
          Nejčastěji zastoupenou úroveň lze považovat za{" "}
          <em className="typo-emphasis">
            celkovou úroveň digitální vyspělosti vaší organizace
          </em>
          .
        </p>
      </TextWrapper>
    </div>
  );
};
