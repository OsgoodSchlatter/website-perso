import { useState } from "react";
import { Button } from "../Single/Button";
import Modal from "../Single/Modal";

export type IngredientProps = {
  id: string;
  label: string;
  unit: string;
  value: string;
  handleDelete?: (id: string) => any;
  handleEdit?: (arg0: IngredientProps) => void;
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
  return (
    <div className="p-2 mt-2 rounded bg-slate-400 flex items-center" id={id}>
      <h1 className="text-2xl">{label}</h1>
      <div className="bg-gray-100 w-20 ml-auto mr-1" {...rest}>
        {value}
      </div>

      {unit}
      <Button
        label="Edit"
        className="bg-green-500 ml-2"
        onClick={() => handleEdit?.({ id, label, unit, value })}
      />
      <Button
        label="Suppr"
        className="bg-red-500 ml-2"
        onClick={() => handleDelete?.(id)}
      />
    </div>
  );
};
