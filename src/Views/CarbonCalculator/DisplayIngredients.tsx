import { useEffect, useState, Fragment } from "react";
import { Button } from "../../Single/Button";
import { v4 as uuidv4 } from "uuid";
import { Ingredient, IngredientProps } from "./Ingredient";
import ModalIngredient from "../../Single/ModalIngredient";
import ComputeResult, { MapIngredient } from "../../Single/ComputeResult";
import { BsFillTrashFill } from "react-icons/bs";
import InfoCarbonModal from "../../Single/InfoCarbonModal";
import { Tooltip } from "../../Single/Tooltip";

export const DisplayIngredients = () => {
  const [open, setOpen] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [hover, setHover] = useState(false);
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
        <div className="flex-fill w-[1000px] items-center">
          <div className="p-2">
            <>
              <div className="p-2 mt-2 flex rounded border-transparent bg-blue-100 px-4 py-2 font-medium text-blue-900 hover:bg-blue-200 justify-between">
                <div className="w-2/3 grid grid-cols-2 gap-[145px]">
                  <div className="text-3xl text-black">Name</div>
                  <div className="text-3xl px-10 text-black">Value (kg)</div>
                </div>
                <div className="flex ">
                  <select
                    className="p-2 rounded-md border border-transparent"
                    onChange={(e) => setSortType(e.target.value)}
                  >
                    <option value="name">Name</option>
                    <option value="value">Value</option>
                  </select>
                  <Button
                    label={<BsFillTrashFill />}
                    className="rounded-md  bg-red-400 hover:bg-red-500 ml-2 text-black"
                    onClick={() => setList([])}
                  />
                </div>
              </div>
              {list.map((i: IngredientProps) => (
                <>
                  <div className="flex-col flex-fill">
                    <Ingredient
                      ingr={i}
                      handleDelete={(id) =>
                        setList(list.filter((i) => i.id !== id))
                      }
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
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-md border border-transparent flex justify-center space-x-2">
                  <Button
                    label="Add"
                    className="rounded-md border border-transparent bg-orange-200 px-4 py-2 text-lg font-medium text-blue-800 hover:bg-orange-300"
                    onClick={() => setOpen(true)}
                  />
                  <Button
                    label="Compute"
                    className="rounded-md border border-transparent bg-green-200 px-4 py-2 text-lg font-medium text-blue-800 hover:bg-green-300"
                    onClick={() => setResult(true)}
                  />
                </div>
                <Tooltip content="Info">
                  {(props) => {
                    console.log("hey");
                    return (
                      <Button
                        label="?"
                        className="rounded-md border border-transparent bg-blue-200 px-4 py-2 text-lg font-medium text-black hover:bg-blue-300"
                        onClick={() => setOpenInfo(true)}
                        {...props}
                      />
                    );
                  }}
                </Tooltip>
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
              {openInfo && (
                <InfoCarbonModal close={setOpenInfo} list={MapIngredient} />
              )}
            </>
          </div>
        </div>
      </div>
    </>
  );
};
