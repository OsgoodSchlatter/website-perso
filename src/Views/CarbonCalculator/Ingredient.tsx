import { Button } from "../../Single/Button";

export type IngredientProps = {
  id: string;
  name: string;
  value: number;
  handleDelete?: (id: string) => any;
  handleEdit?: (Conso: IngredientProps) => any;
};

export const Ingredient = ({
  ingr,
  handleDelete,
  handleEdit,
}: {
  ingr: IngredientProps;
  handleDelete?: (id: string) => any;
  handleEdit?: (ingr: IngredientProps) => any;
}) => {
  return (
    <div>
      <div
        className="p-2 mt-2 rounded border-transparent bg-blue-100 px-4 py-2 font-medium text-blue-900 hover:bg-blue-200 flex justify-between items-center"
        id={ingr.id}
      >
        <div className="w-2/3 grid grid-cols-2 gap-[10px] items-center">
          <div className="text-3xl font-semibold text-black">{ingr.name} </div>
          <div className="flex justify-end">
            <div className="text-5xl px-20 text-green-500">{ingr.value} </div>
          </div>
        </div>
        <div className="w-1/3 text-right">
          <Button
            label="Edit"
            className="rounded-md bg-green-400 hover:bg-green-500 ml-2 text-black"
            onClick={() => handleEdit?.(ingr)}
          >
            Edit
          </Button>
          <Button
            label="Suppr"
            className="rounded-md bg-red-400 hover:bg-red-500 ml-2 text-black"
            onClick={() => handleDelete?.(ingr.id)}
          >
            Del
          </Button>
        </div>
      </div>
    </div>
  );
};
