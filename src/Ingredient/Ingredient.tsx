import { title } from "process";
import { useState } from "react";
import { Button } from "../Single/Button";
import Modal from "../Single/Modal";

export type IngredientProps = {
  id: string;
  label: string;
  unit: string;
  value: number;
  handleDelete?: (id: string) => any;
  handleEdit?: (id: string) => any;
};

export const Ingredient = ({
  id,
  label,
  unit,
  value,
  handleDelete,
  handleEdit,
  ...rest
}: IngredientProps) => {
  const [edit, setEdit] = useState(false);
  return (
    <div className="p-2 mt-2 rounded bg-slate-400 flex items-center" id={id}>
      <h1 className="text-2xl">{label}</h1>
      <h1 className="bg-gray-100 w-20 ml-auto mr-1" {...rest}>
        {value}
      </h1>
      {unit}
      <Button
        label="Edit"
        className="bg-green-500 ml-2"
        onClick={() => setEdit(true)}
      />
      <Button
        label="Suppr"
        className="bg-red-500 ml-2"
        onClick={handleDelete ? () => handleDelete(id) : () => ""}
      />
      {edit && <Modal close={edit} item={handleEdit}></Modal>}
    </div>
  );
};
