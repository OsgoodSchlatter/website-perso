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
    <div className="justify-center">
      <div
        className="p-2 mt-2 rounded border-transparent px-4 py-2 font-medium text-blue-900 items-center border-2 border-slate-200"
        id={ingr.id}
      >
        <div className="grid grid-cols-8 gap-2 items-center justify-between">
          <div className="text-3xl font-semibold text-black col-start-1 col-end-3 cold-span-2">{ingr.name} </div>
          <div className="text-5xl text-right text-slate-500 col-start-4 col-end-5 cold-span-1">{ingr.value} </div>
          <div className="col-start-8 col-end-9 cold-span-1">
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
    </div>
  );
};
