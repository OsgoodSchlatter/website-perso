import { IngredientProps } from "./Ingredient";

export const IngredientModal = ({ label, unit }: IngredientProps) => {
  return (
    <div className="fixed inset-0 z-10 mt-20 bg-green-200">
      <div className="p-2">
        <input type="text" />
      </div>
    </div>
  );
};
