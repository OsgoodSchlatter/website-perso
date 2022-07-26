import { useState } from "react";
import { Button } from "../Single/Button";
import { Textarea } from "../Single/Textarea";

export type IngredientProps = {
  id: string;
  label: string;
  unit: string;
  value: string;
  handleDelete?: (id: string) => any;
  handleEdit?: (ingr: IngredientProps) => any;
};

export const Ingredient = ({
  ingredient,
  handleDelete,
  handleEdit,
}: {
  ingredient: IngredientProps;
  handleDelete: (id: string) => any;
  handleEdit: (ingr: IngredientProps) => any;
}) => {
  const [label, setLabel] = useState(ingredient.label);
  const [value, setValue] = useState(ingredient.value);
  const [unit, setUnit] = useState(ingredient.unit);

  const [nameEdit, setNameEdit] = useState(false);
  const [valueEdit, setValueEdit] = useState(false);
  const [unitEdit, setUnitEdit] = useState(false);

  return (
    <div
      className="p-2 mt-2 rounded border-transparent bg-blue-100 px-4 py-2 font-medium text-blue-900 hover:bg-blue-200 flex items-center"
      id={ingredient.id}
    >
      {!nameEdit ? (
        <h1 className="text-2xl" onDoubleClick={() => setNameEdit(true)}>
          {label}
        </h1>
      ) : (
        <Textarea
          placeholder={label}
          className="text-14 space-x-4 bg-blue-100 w-20 font-medium text-blue-900"
          onChange={(e) => setLabel(e.currentTarget.value)}
          onBlur={() => {
            setNameEdit(!nameEdit);
            handleEdit({ ...ingredient, label: label });
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
          className="w-20 ml-auto mr-1 h-auto"
          onChange={(e) => setValue(e.currentTarget.value)}
          onBlur={() => {
            setValueEdit(!valueEdit);
          }}
        />
      )}
      {!unitEdit ? (
        <div onDoubleClick={() => setUnitEdit(true)}>{ingredient.unit}</div>
      ) : (
        <Textarea
          placeholder={unit}
          className="w-20 mr-1 h-auto"
          onChange={(e) => setUnit(e.currentTarget.value)}
          onBlur={() => {
            setUnitEdit(!unitEdit);
          }}
        />
      )}
      <Button
        label="Suppr"
        className="rounded-md bg-red-400 hover:bg-red-500 ml-2"
        onClick={() => {
          handleDelete?.(ingredient.id);
          console.log(ingredient.id);
        }}
      />
    </div>
  );
};
