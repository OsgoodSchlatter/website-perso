import { IngredientProps } from "./Ingredient";

export const IngredientModal = ({ label, unit }: IngredientProps) => {
  return (
    <div className="absolute z-10 mt-10 bg-green-200">
      <div className="p-2">
        <input type="text" />
      </div>
    </div>
  );
};
