import { Button } from "../../Single/Button";

export type ConsoProps = {
  id: string;
  chaineMetier: string;
  value: number;
  url: string;
  seuil: number;
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
  return (
    <div>
      <div
        className="p-2 mt-2 rounded border-transparent bg-blue-100 px-4 py-2 font-medium text-blue-900 hover:bg-blue-200 flex"
        id={conso.id}
      >
        <div className="w-full grid grid-cols-3 gap-[10px]">
          <div className="text-3xl font-semibold text-black">
            {conso.chaineMetier}{" "}
          </div>
          <div className="flex justify-end">
            {conso.value >= conso.seuil ? (
              <>
                <div className="text-5xl text-red-500">{conso.value} </div>
              </>
            ) : (
              <>
                <div className="text-5xl text-green-500">{conso.value} </div>
              </>
            )}
          </div>
          <div className="flex justify-end">
            <div className="text-3xl text-black">{conso.seuil} </div>
          </div>
        </div>
        <div className="w-1/3 text-right">
          <Button
            label="Edit"
            className="rounded-md bg-green-400 hover:bg-green-500 ml-2 text-black"
            onClick={() => handleEdit?.(conso)}
          >
            Edit
          </Button>
          <Button
            label="Suppr"
            className="rounded-md bg-red-400 hover:bg-red-500 ml-2 text-black"
            onClick={() => handleDelete?.(conso.id)}
          >
            Del
          </Button>
        </div>
      </div>
    </div>
  );
};
