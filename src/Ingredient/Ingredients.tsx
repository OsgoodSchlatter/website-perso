import { useState } from "react";
import { Button } from "../Single/Button";
import { Ingredient } from "../Ingredient/Ingredient";
import { IngredientModal } from "../Ingredient/IngredientModal";
import Modal from "../Single/Modal";

export const Ingredients = () => {
  const allItems = [
    { label: "Fromage", unit: "kg" },
    { label: "Boeuf", unit: "kg" },
    { label: "Chocolat", unit: "kg" },
    { label: "Boeuf", unit: "kg" },
  ];

  const [newItems, setNewItems] = useState<{
    label: string;
    unit: string;
  }>();
  const addItems = (newItem: { label: string; unit: string }) => {
    allItems.concat(newItem);
  };

  return (
    <div className="flex-fill flex-col items-center">
      <div className="p-2">
        {allItems.map((ingr) => (
          <Ingredient label={ingr.label} unit={ingr.unit} />
        ))}
        {newItems ? (
          <Modal />
        ) : (
          <div className="p-2">
            <Button
              label="Ajouter"
              onClick={() => setNewItems({ label: "", unit: "" })}
            />
          </div>
        )}
      </div>
    </div>
  );
};
