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
};

export const Ingredient = ({
  ingredient,
  handleDelete,
}: {
  ingredient: IngredientProps;
  handleDelete: (id: string) => any;
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
          {ingredient.label}
        </h1>
      ) : (
        <Textarea
          placeholder={label}
          className="text-14 space-x-4 bg-blue-100 px-4 py-2 font-medium text-blue-900"
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
          {ingredient.value}
        </div>
      ) : (
        <Textarea
          placeholder={value}
          className="flex text-14 space-x-4"
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
          className="flex text-14 space-x-4"
          onChange={(e) => setUnit(e.currentTarget.value)}
          onBlur={() => {
            setUnitEdit(!unitEdit);
          }}
        />
      )}
      <Button
        label="Suppr"
        className="bg-red-400 ml-2"
        onClick={() => {
          handleDelete?.(ingredient.id);
          console.log(ingredient.id);
        }}
      />
    </div>
  );
};
