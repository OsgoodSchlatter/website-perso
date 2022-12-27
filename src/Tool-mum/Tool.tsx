import { useEffect, useState } from "react";
import { Button } from "../Single/Button";
import { User, UserProps } from "./User";
import { v4 as uuidv4 } from "uuid";
import ModalTool from "../Single/ModalTool";
import { List } from "./List";

export const ToolMum = () => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [userToEdit, setUserToEdit] = useState<UserProps>({
    id: uuidv4(),
    username: "",
    pass: false,
    aimant: false,
    badge: false,
    poste: "CDI",
  });
  const [list, setList] = useState<UserProps[]>(() => [
    {
      id: uuidv4(),
      username: "Anne",
      pass: true,
      aimant: true,
      badge: true,
      poste: "CDI",
    },
  ]);

  return (
    <>
      <div className="flex justify-center">
        <div className="flex-fill w-[1000px] items-center">
          <div className="p-2">
            <>
              {list.map((u: UserProps) => (
                <div className="flex-col flex-fill">
                  <User
                    user={u}
                    handleDelete={(id) =>
                      setList(list.filter((user) => user.id !== id))
                    }
                    handleEdit={(el) => {
                      setUserToEdit(u);
                      setEdit(true);
                      setOpen(true);
                      setList(list.filter((user) => user.id !== el.id));
                    }}
                  ></User>
                </div>
              ))}
              <div className="p-2 flex justify-center space-x-2">
                <Button
                  label="Ajouter"
                  className="rounded-md border border-transparent bg-orange-200 px-4 py-2 text-lg font-medium text-blue-800 hover:bg-orange-300"
                  onClick={() => setOpen(true)}
                />
              </div>
              {open && (
                <ModalTool
                  close={setOpen}
                  edit={setEdit}
                  onEdit={edit}
                  _user={userToEdit}
                  item={(el) => setList(list.concat(el))}
                />
              )}
            </>
          </div>
        </div>
        <List />
      </div>
    </>
  );
};
