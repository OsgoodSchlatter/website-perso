import { useEffect, useState } from "react";
import { Button } from "../Single/Button";
import { Ingredient, IngredientProps } from "../Ingredient/Ingredient";
import Modal from "../Single/Modal";
import { v4 as uuidv4 } from "uuid";

export const Ingredients = () => {
  const [open, setOpen] = useState(false);

  const [list, setList] = useState(() => [
    { id: uuidv4(), label: "Fromage", unit: "kg" },
    { id: uuidv4(), label: "Boeuf", unit: "kg" },
    { id: uuidv4(), label: "Chocolat", unit: "kg" },
    { id: uuidv4(), label: "Boeuf", unit: "kg" },
  ]);

  function handleAdd(el: IngredientProps) {
    const newList = list.concat(el);
    setList(newList);
  }

  return (
    <div className="flex-fill flex-col items-center">
      <div className="p-2">
        {list.map((ingr) => (
          <Ingredient id={ingr.id} label={ingr.label} unit={ingr.unit} />
        ))}
        <div className="p-2">
          <Button label="Ajouter" onClick={() => setOpen(true)} />
        </div>
        {open && <Modal close={setOpen} item={handleAdd} />}
      </div>
    </div>
  );
};
