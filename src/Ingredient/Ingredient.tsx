import { useState } from "react";
import { Button } from "../Single/Button";
import Modal from "../Single/Modal";
import { Textarea } from "../Single/Textarea";

export type IngredientProps = {
  id: string;
  label: string;
  unit: string;
  value: string;
  handleDelete?: (id: string) => any;
  handleEdit?: (arg0: IngredientProps) => void;
};

export const Ingredient = (
  { ingredient }: { ingredient: IngredientProps },
  { handleDelete }: { handleDelete: (id: string) => any },
  { handleEdit }: { handleEdit: (arg0: IngredientProps) => void }
) => {
  const [label, setLabel] = useState(ingredient.label);
  const [value, setValue] = useState(ingredient.value);
  const [unit, setUnit] = useState(ingredient.unit);

  const [nameEdit, setNameEdit] = useState(false);
  const [valueEdit, setValueEdit] = useState(false);
  const [unitEdit, setUnitEdit] = useState(false);

  return (
    <div
      className="p-2 mt-2 rounded bg-slate-400 flex items-center"
      id={ingredient.id}
    >
      {!nameEdit ? (
        <h1 className="text-2xl" onDoubleClick={() => setNameEdit(true)}>
          {label}
        </h1>
      ) : (
        <Textarea
          placeholder={label}
          className="text-14 space-x-4"
          onChange={(e) => setLabel(e.currentTarget.value)}
          onBlur={() => {
            setNameEdit(!nameEdit);
          }}
        />
      )}
      {!valueEdit ? (
        <div
          className="bg-gray-100 w-20 ml-auto mr-1"
          onDoubleClick={() => setValueEdit(true)}
        >
          {value}
        </div>
      ) : (
        <Textarea
          placeholder={value}
          className="text-14 space-x-4"
          onChange={(e) => setValue(e.currentTarget.value)}
        />
      )}
      {unit}
      <Button
        label="Edit"
        className="bg-green-400 ml-2"
        onClick={() => handleEdit({ id: ingredient.id, label, unit, value })}
      />
      <Button
        label="Suppr"
        className="bg-red-400 ml-2"
        onClick={() => handleDelete?.(ingredient.id)}
      />
    </div>
  );
};
