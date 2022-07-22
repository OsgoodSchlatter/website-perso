import { randomUUID } from "crypto";
import { Button } from "../Single/Button";

export type IngredientProps = {
  id: string;
  label: string;
  unit: string;
  handleDelete?: (id: string) => any;
};

export const Ingredient = ({
  id,
  label,
  unit,
  handleDelete,
  ...rest
}: IngredientProps) => {
  return (
    <div className="p-2 mt-2 rounded bg-green-600 flex items-center" id={id}>
      {label}
      <input className="w-20 ml-auto mr-1" {...rest} /> {unit}
      <Button
        label="Suppr"
        className="ml-2 bg-red-600"
        onClick={handleDelete ? () => handleDelete(id) : () => ""}
      />
    </div>
  );
};
