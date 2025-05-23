import { allAreas, allAxes, Axis, maxScore } from "@/app/model";
import { ChartWrapper, TextWrapper } from "./Components";
import { BarChart } from "@mui/x-charts";

export const StackedScoreChart = ({
  data,
}: {
  data: Record<Axis, number[]>;
}) => {
  const values = Object.entries(data);
  return (
    <div className="flex flex-col gap-4">
      <h2 className="typo-title2">
        Úroveň digitální vyspělosti podle oblastí a pilířů
      </h2>
      <ChartWrapper>
        <BarChart
          series={values.map(([axis, scores]) => ({
            data: scores,
            stack: "stack",
            label: axis,
          }))}
          xAxis={[{ data: allAreas }]}
          yAxis={[{ max: maxScore * allAxes.length }]}
          barLabel="value"
          height={300}
        />
      </ChartWrapper>
      <TextWrapper>
        <p>
          Graf č. 4 ukazuje,{" "}
          <em className="typo-emphasis">
            jak celkovou úroveň mapovaných oblastí ovlivňují jednotlivé pilíře
          </em>
          . V každé oblasti by měly všechny tři pilíře dosahovat stejné úrovně,
          ideálně <em className="typo-emphasis">úrovně 3 a více</em>.
        </p>
      </TextWrapper>
    </div>
  );
};
