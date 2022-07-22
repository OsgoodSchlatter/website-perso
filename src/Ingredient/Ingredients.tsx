import { useState } from "react";
import { Button } from "../Single/Button";
import { Ingredient, IngredientProps } from "../Ingredient/Ingredient";
import Modal from "../Single/Modal";

const allItems = [
  { label: "Fromage", unit: "kg" },
  { label: "Boeuf", unit: "kg" },
  { label: "Chocolat", unit: "kg" },
  { label: "Boeuf", unit: "kg" },
];

export const Ingredients = () => {
  const [open, setOpen] = useState(false);

  const [list, setList] = useState(allItems);
  const [newItem, setNewItem] = useState<IngredientProps>({
    label: "",
    unit: "",
  });

  function handleAdd(el: IngredientProps) {
    setNewItem(el);
    setList(list.concat(...list, newItem));
    console.log(allItems);
  }

  return (
    <div className="flex-fill flex-col items-center">
      <div className="p-2">
        {allItems.map((ingr) => (
          <Ingredient label={ingr.label} unit={ingr.unit} />
        ))}
        <div className="p-2">
          <Button label="Ajouter" onClick={() => setOpen(true)} />
        </div>
        {open && <Modal close={setOpen} item={handleAdd} />}
      </div>
    </div>
  );
};
