import { Button } from "../../Single/Button";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import LineChartComponent, {
  DataForChart,
} from "../../Single/LineChartComponent";
import { Line } from "react-chartjs-2";
import { ChartOptions, ChartData } from "chart.js";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

interface LineProps {
  options: ChartOptions<"line">;
  data: ChartData<"line">;
}

export type ConsoProps = {
  id: string;
  chaineMetier: string;
  value: number;
  url: string;
  seuil: number;
  dataChart?: DataForChart[];
  handleDelete?: (id: string) => any;
  handleEdit?: (Conso: ConsoProps) => any;
};

export const Conso = ({
  conso,
  handleDelete,
  handleEdit,
}: {
  conso: ConsoProps;
  handleDelete?: (id: string) => any;
  handleEdit?: (conso: ConsoProps) => any;
}) => {
  const dataLine: ChartData<"line"> = {
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
  return (
    <div>
      <div
        className="p-2 mt-2  rounded border-transparent bg-blue-100 px-4 py-2 font-medium text-blue-900 hover:bg-blue-200 flex"
        id={conso.id}
      >
        <div className="w-full grid grid-rows-2 grid-flow-col gap-4">
          <div className="w-full row-span-3">
            <div className="text-black text-3xl">{conso.chaineMetier}</div>
            <Line id="1" data={dataLine} className="h-[250px]"></Line>
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
