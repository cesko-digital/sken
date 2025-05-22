"use client";

import { LineChart } from "@mui/x-charts";
import { Axis, scoreLabels } from "@/app/model";
import { ChartWrapper, TextWrapper } from "./Components";

export const AxisScoreChart = ({
  data,
}: {
  data: Record<Axis, Record<string, number>>;
}) => {
  const scores = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-col gap-4">
      <h2 className="typo-title2">Úroveň podle pilířů</h2>
      <ChartWrapper>
        <LineChart
          xAxis={[
            {
              data: scores,
              tickMinStep: 1,
              valueFormatter: (v: number) => scoreLabels[v],
              min: 0.5,
              max: 5.5,
            },
          ]}
          yAxis={[{ label: "Kolikrát jste takto hodnotili" }]}
          series={Object.entries(data).map(([label, scores]) => ({
            data: Object.values(scores).slice(1),
            label,
          }))}
          height={300}
        />
      </ChartWrapper>
      <TextWrapper>
        <p>
          Graf č. 2 ukazuje{" "}
          <em className="typo-emphasis">úrovně jednotlivých pilířů</em> napříč
          mapovanými oblastmi. Pilíře by neměly být příliš rozkročené,{" "}
          <em className="typo-emphasis">vrcholy všech by se měly potkávat</em> v
          jednom bodě a každý pilíř by měl{" "}
          <em className="typo-emphasis">začínat až na úrovni Solidní základ</em>
          .
        </p>
      </TextWrapper>
    </div>
  );
};
