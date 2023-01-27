import { Button } from "../../Single/Button";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import LineChartComponent, {
  DataForChart,
} from "../../Single/LineChartComponent";
import { Line } from "react-chartjs-2";
import { ChartOptions, ChartData } from "chart.js";
import { Chart as ChartJS, registerables } from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(...registerables);

interface LineProps {
  options: ChartOptions<"line">;
  data: ChartData<"line">;
}

const dataChartExemple: ChartData<"line"> = {
  labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00"],
  datasets: [
    {
      label: "Value",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
    {
      label: "Seuil",
      data: [65, 65, 65, 65, 65, 65, 65],
      fill: false,
      borderColor: "rgb(200, 20, 20)",
      tension: 0.1,
    },
  ],
};

export type ConsoProps = {
  id: string;
  chaineMetier: string;
  value: number;
  url: RequestInfo;
  seuil: number;
  handleDelete?: (id: string) => any;
  handleEdit?: (Conso: ConsoProps) => any;
};

async function getConvertedData(url: RequestInfo): Promise<any> {
  const response = await fetch(url, {
    method: "GET",
    headers: { Authorization: "5f710a5b-2f7a-4292-a48d-184c3f52c8d2" },
  })
    .then((response) => response.json())
    .then((response) => {
      return response as any;
    });

  return response;
}

export const Conso = ({
  conso,
  handleDelete,
  handleEdit,
}: {
  conso: ConsoProps;
  handleDelete?: (id: string) => any;
  handleEdit?: (conso: ConsoProps) => any;
}) => {
  const [dataChart, setDataChart] = useState<number[]>([]);
  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await getConvertedData(conso.url);
      // console.log(res);
      // res.records.forEach((record: any) =>
      //   console.log(record.fields.pic_journalier_consommation)
      // );
      res.records.forEach((record: any) => {
        console.log(record.fields.pic_journalier_consommation);
        record.fields.pic_journalier_consommation ??
          setDataChart(
            Array.from(dataChart)?.concat(
              record.fields.pic_journalier_consommation
            )
          );
      });
      console.log("res record " + dataChart[0]);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div
        className="p-2 mt-2  rounded border-transparent bg-blue-100 px-4 py-2 font-medium text-blue-900 hover:bg-blue-200 flex"
        id={conso.id}
      >
        <div className="w-full grid grid-rows-2 grid-flow-col gap-4">
          <div className="w-full row-span-3">
            <div className="text-black text-3xl">{conso.chaineMetier}</div>
            {dataChart ? (
              <Line id="1" data={dataChartExemple} className="h-[250px]" />
            ) : (
              <div>No data</div>
            )}
          </div>
          <div>
            <Button
              label={<BsFillPencilFill />}
              className="rounded-md bg-green-400 hover:bg-green-500 ml-2 text-black"
              onClick={() => handleEdit?.(conso)}
            >
              Edit
            </Button>
            <Button
              label={<BsFillTrashFill />}
              className="rounded-md bg-red-400 hover:bg-red-500 ml-2 text-black"
              onClick={() => handleDelete?.(conso.id)}
            >
              Del
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
