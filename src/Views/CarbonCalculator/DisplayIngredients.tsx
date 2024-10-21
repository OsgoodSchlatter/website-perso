import { useEffect, useState, Fragment } from "react";
import { Button } from "../../Single/Button";
import { v4 as uuidv4 } from "uuid";
import { Ingredient, IngredientProps } from "./Ingredient";
import ModalIngredient from "../../Single/ModalIngredient";
import ComputeResult, { MapIngredient } from "../../Single/ModalComputeResult";
import { BsFillTrashFill } from "react-icons/bs";
import InfoCarbonModal from "../../Single/ModalInfoCarbon";
import { HeaderCategory } from "../../Single/HeaderCategory";

const DisplayIngredients = () => {
  const [open, setOpen] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);

  const [result, setResult] = useState(false);

  const [sortType, setSortType] = useState("value");
  const [edit, setEdit] = useState(false);
  const [ingrToEdit, setIngrToEdit] = useState<IngredientProps>({
    id: uuidv4(),
    name: "",
    value: 0,
  });

  const [list, setList] = useState<IngredientProps[]>(() => {
    const storedList: IngredientProps[] = JSON.parse(
      localStorage.getItem("list") ?? "[]"
    );
    return storedList;
  });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    const sortArray = (type: string) => {
      const types: Record<string, keyof IngredientProps> = {
        name: "name",
        value: "value",
      };
      const sortProperty: keyof IngredientProps = types[type];

      let sorted = [...list];
      if (sortProperty === "value") {
        sorted = sorted.sort(
          (a: IngredientProps, b: IngredientProps) =>
            b[sortProperty] - a[sortProperty]
        );
      } else {
        sorted = sorted.sort((a: IngredientProps, b: IngredientProps) => {
          const aValue = a[sortProperty] as string;
          const bValue = b[sortProperty] as string;
          if (aValue < bValue) {
            return -1;
          }
          if (aValue > bValue) {
            return 1;
          }
          return 0;
        });
      }
      setList(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  return (
    <>
      <div className="flex justify-center">
        <div className="flex-col p-2 max-w-2xl">
          <div className="justify-center">
            <div className="p-2 mt-2 flex rounded border-transparent px-4 py-2 font-medium grid grid-cols-8 gap-2 items-center">
              <div className="md:text-3xl  col-start-1 col-end-3 cold-span-2">
                My meal{" "}
              </div>
              <div className="md:text-3xl  col-start-4 col-end-6 cold-span-2">
                Value (g)
              </div>
              <div
                className={
                  "flex items-center col-start-7 col-end-9 cold-span-1"
                }
              >
                <div
                  className={`${window.innerWidth <= 768
                    ? "hidden md:block" // Hidden on screens smaller or equal to 768px
                    : ""
                    }`}
                >
                  <select
                    className="p-2 rounded-md border border-transparent bg-slate-700"
                    onChange={(e) => setSortType(e.target.value)}
                  >
                    <option value="name">Name</option>
                    <option value="value">Value</option>
                  </select>
                </div>

                <Button
                  label="?"
                  className="rounded-xl ml-2 border border-transparent bg-blue-300 h-[50px] w-12 text-lg font-bold  hover:bg-blue-200"
                  onClick={() => setOpenInfo(true)}
                />
              </div>
            </div>
          </div>
          {list.map((i: IngredientProps) => (
            <>
              <div className="flex-col flex-fill">
                <Ingredient
                  ingr={i}
                  handleDelete={(id) => {
                    setList(list.filter((i) => i.id !== id));
                  }}
                  handleEdit={(el) => {
                    setIngrToEdit(i);
                    setEdit(true);
                    setOpen(true);
                    setList(list.filter((i) => i.id !== el.id));
                  }}
                ></Ingredient>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="p-2 rounded-md border border-transparent flex justify-center space-x-2">
          <Button
            label="Add"
            className="rounded-md border border-transparent bg-orange-700 px-4 py-2 text-lg font-medium  hover:bg-orange-200"
            onClick={() => setOpen(true)}
          />
          <Button
            label="Compute"
            className="rounded-md border border-transparent bg-green-700 px-4 py-2 text-lg font-medium  hover:bg-green-600"
            onClick={() => setResult(true)}
          />
          <Button
            label="Clean"
            className="rounded-md bg-red-700 hover:bg-red-300 ml-2 "
            onClick={() => setList([])}
          />
        </div>
      </div>
      {open && (
        <ModalIngredient
          close={setOpen}
          edit={setEdit}
          onEdit={edit}
          _ingr={ingrToEdit}
          item={(el) => setList(list.concat(el))}
        />
      )}
      {result && <ComputeResult close={setResult} list={list} />}
      {openInfo && <InfoCarbonModal close={setOpenInfo} list={MapIngredient} />}
    </>
  );
};
export default DisplayIngredients;
