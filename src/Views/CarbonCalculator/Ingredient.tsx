import { Button } from "../../Single/Button";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

export type IngredientProps = {
  id: string;
  name: string;
  value: number;
  handleDelete?: (id: string) => any;
  handleEdit?: (ingr: IngredientProps) => any;
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
        className="p-2 mt-2 rounded border-transparent px-4 py-2 font-medium text-blue-900 flex justify-between items-center border-2 border-slate-200"
        id={ingr.id}
      >
        <div className="w-3/5 grid grid-cols-2 items-center justify-between">
          <div className="text-3xl font-semibold text-black">{ingr.name} </div>
          <div className="flex justify-end">
            <div className="text-5xl px-20 text-slate-500">{ingr.value} </div>
          </div>
        </div>
        <div className="w-1/3 text-right">
          <Button
            label={<BsFillPencilFill />}
            className="rounded-md bg-green-200 hover:bg-green-300 ml-2 text-black"
            onClick={() => handleEdit?.(ingr)}
          >
            Edit
          </Button>
          <Button
            label={<BsFillTrashFill />}
            className="rounded-md bg-red-200 hover:bg-red-300 ml-2 text-black"
            onClick={() => handleDelete?.(ingr.id)}
          >
            Del
          </Button>
        </div>
      </div>
    </div>
  );
};
