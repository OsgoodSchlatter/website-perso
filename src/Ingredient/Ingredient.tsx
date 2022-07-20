import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type IngredientProps = {
  label: string;
  unit: string;
};

export const Ingredient = ({ label, unit, ...rest }: IngredientProps) => {
  return (
    <div className="p-2 mt-2 rounded bg-green-600 flex items-center">
      {label}
      <input className="w-20 ml-auto mr-1" {...rest} /> {unit}
    </div>
  );
};
