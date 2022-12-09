import { useEffect, useState } from "react";
import { Button } from "../Single/Button";
import { Ingredient, IngredientProps } from "../Ingredient/Ingredient";
import Modal from "../Single/Modal";
import { v4 as uuidv4 } from "uuid";
import { render } from "@headlessui/react/dist/utils/render";

export const Ingredients = () => {
  const [open, setOpen] = useState(false);

  const [list, setList] = useState(() => [
    { id: uuidv4(), label: "Fromage", value: "100", unit: "g" },
    { id: uuidv4(), label: "Boeuf", value: "500", unit: "g" },
    { id: uuidv4(), label: "Chocolat", value: "200", unit: "g" },
  ]);

  return (
    <div className="flex justify-center">
      <div className="flex-fill w-[1000px] items-center">
        <div className="p-2">
          {list.map((ingr) => (
            <div
              className="flex-col flex-fill"
              onClick={() => {
                console.log(ingr);
              }}
            >
              <Ingredient
                ingredient={ingr}
                handleDelete={(id) =>
                  setList(list.filter((item) => item.id !== id))
                }
                handleEdit={(el) =>
                  setList(list.map((item) => (item.id === el.id ? el : item)))
                }
              />
            </div>
          ))}
          <div className="p-2 flex justify-center space-x-2">
            <Button
              label="Ajouter"
              className="rounded-md border border-transparent bg-orange-200 px-4 py-2 text-lg font-medium text-blue-800 hover:bg-orange-300"
              onClick={() => setOpen(true)}
            />
            <Button
              label="show list"
              className="rounded-md border border-transparent bg-orange-200 px-4 py-2 text-lg font-medium text-blue-800 hover:bg-orange-300"
              onClick={() => console.log(list)}
            />
          </div>
          {open && (
            <Modal close={setOpen} item={(el) => setList(list.concat(el))} />
          )}
        </div>
      </div>
    </div>
  );
};
