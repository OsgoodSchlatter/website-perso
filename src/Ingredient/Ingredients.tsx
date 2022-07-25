import { useEffect, useState } from "react";
import { Button } from "../Single/Button";
import { Ingredient, IngredientProps } from "../Ingredient/Ingredient";
import Modal from "../Single/Modal";
import { v4 as uuidv4 } from "uuid";

export const Ingredients = () => {
  const [open, setOpen] = useState(false);

  const [list, setList] = useState(() => [
    { id: uuidv4(), label: "Fromage", value: "0", unit: "kg" },
    { id: uuidv4(), label: "Boeuf", value: "0", unit: "kg" },
    { id: uuidv4(), label: "Chocolat", value: "0", unit: "kg" },
  ]);

  function count(list: [IngredientProps]) {
    //WIP
  }

  function handleAdd(el: IngredientProps) {
    const newList = list.concat(el);
    setList(newList);
  }

  function handleEdit(el: IngredientProps) {}

  function handleDelete(id: any) {
    let newList = [...list];
    console.log(newList);
    newList = newList.filter((item) => item.id !== id);
    setList(newList);
  }

  return (
    <div className="flex-fill items-center">
      <div className="p-2">
        {list.map((ingr) => (
          <div className="flex-col flex-fill">
            <Ingredient
              id={ingr.id}
              label={ingr.label}
              value={ingr.value}
              unit={ingr.unit}
              handleDelete={handleDelete}
            />
          </div>
        ))}
        <div className="p-2">
          <Button label="Ajouter" onClick={() => setOpen(true)} />
        </div>
        {open && <Modal close={setOpen} item={handleAdd} />}
      </div>
    </div>
  );
};
