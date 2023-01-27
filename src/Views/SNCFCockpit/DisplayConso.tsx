import { useEffect, useState } from "react";
import { Button } from "../../Single/Button";
import { v4 as uuidv4 } from "uuid";
import { Conso, ConsoProps } from "./SingleConso";
import ModalConso from "../../Single/ModalConso";
import { FetchData } from "../../Single/Api";
import { BsFillTrashFill } from "react-icons/bs";

export const DisplayConso = () => {
  const [open, setOpen] = useState(false);
  const [sortType, setSortType] = useState("value");
  const [edit, setEdit] = useState(false);
  const [consoToEdit, setConsoToEdit] = useState<ConsoProps>({
    id: uuidv4(),
    chaineMetier: "",
    value: 0,
    url: "",
    seuil: 0,
  });
  const [list, setList] = useState<ConsoProps[]>(() => {
    const storedList: ConsoProps[] = JSON.parse(
      localStorage.getItem("list_conso") ?? "[]"
    );
    return storedList;
  });

  useEffect(() => {
    localStorage.setItem("list_conso", JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    const sortArray = (type: string) => {
      const types: Record<string, keyof ConsoProps> = {
        value: "value",
        chaineMetier: "chaineMetier",
        seuil: "seuil",
      };
      const sortProperty: keyof ConsoProps = types[type];

      let sorted = [...list];
      if (sortProperty === "value") {
        sorted = sorted.sort(
          (a: ConsoProps, b: ConsoProps) => b[sortProperty] - a[sortProperty]
        );
      } else if (sortProperty === "seuil") {
        sorted = sorted.sort(
          (a: ConsoProps, b: ConsoProps) => b[sortProperty] - a[sortProperty]
        );
      } else {
        sorted = sorted.sort((a: ConsoProps, b: ConsoProps) => {
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
              {/* <FetchData
                url={
                  "https://odre.opendatasoft.com/api/records/1.0/search/?dataset=pic-journalier-consommation-brute&q=&facet=date&rows=20&sort=date"
                  // "https://odre.opendatasoft.com/api/records/1.0/search/?dataset=consommation-quotidienne-brute-regionale&q=&facet=date_heure&facet=code_insee_region&facet=region"
                }
              /> */}
              <div className="p-2 mt-2 flex rounded border-transparent bg-blue-100 px-4 py-2 font-medium text-blue-900 hover:bg-blue-200 justify-between">
                <div className="text-3xl text-black">
                  {" "}
                  Cockpit technicentre SNCF
                </div>

                <div className="flex">
                  <div className="p-2">
                    <Button
                      label="Add"
                      className="rounded-md border border-transparent bg-orange-200 px-4 py-2 text-lg font-medium text-blue-800 hover:bg-orange-300"
                      onClick={() => setOpen(true)}
                    />
                  </div>
                  <select
                    className="p-2 rounded-md border border-transparent"
                    onChange={(e) => setSortType(e.target.value)}
                  >
                    <option value="value">Value</option>
                    <option value="seuil">Seuil</option>
                    <option value="chaineMetier">Chaine Métier</option>
                  </select>
                  <Button
                    label={<BsFillTrashFill />}
                    className="rounded-md bg-red-400 hover:bg-red-500 ml-2 text-black"
                    onClick={() => setList([])}
                  />
                </div>
              </div>
              {list.map((c: ConsoProps) => (
                <>
                  <div className="flex-col flex-fill">
                    <Conso
                      conso={c}
                      handleDelete={(id) =>
                        setList(list.filter((conso) => conso.id !== id))
                      }
                      handleEdit={(el) => {
                        setConsoToEdit(c);
                        setEdit(true);
                        setOpen(true);
                        setList(list.filter((conso) => conso.id !== el.id));
                      }}
                    ></Conso>
                  </div>
                </>
              ))}
              {open && (
                <ModalConso
                  close={setOpen}
                  edit={setEdit}
                  onEdit={edit}
                  _conso={consoToEdit}
                  item={(el) => setList(list.concat(el))}
                />
              )}
            </>
          </div>
        </div>
      </div>
    </>
  );
};
