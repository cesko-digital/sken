import { BarChart } from "@mui/x-charts";
import { ChartWrapper, first, second, TextWrapper } from "./Components";
import { allAxes, maxScore } from "@/app/model";

export const AreaScoreChart = ({ data }: { data: Record<string, number> }) => {
  const values = Object.entries(data);
  return (
    <div className="flex flex-col gap-4">
      <h2 className="typo-title2">Úroveň digitální vyspělosti podle oblastí</h2>
      <ChartWrapper>
        <BarChart
          series={[{ data: values.map(second) }]}
          xAxis={[{ data: values.map(first) }]}
          yAxis={[{ max: allAxes.length * maxScore }]}
          barLabel="value"
          height={300}
        />
      </ChartWrapper>
      <TextWrapper>
        <p>
          Graf č. 3 ukazuje úroveň digitální vyspělosti v{" "}
          <em className="typo-emphasis">jednotlivých mapovaných oblastech</em>. 
          <em className="typo-emphasis">Cílem je co největší vyrovnanost.</em> V
          ideálním případě by tedy všechny oblasti měly dosahovat stejné úrovně.
        </p>
      </TextWrapper>
    </div>
  );
};
