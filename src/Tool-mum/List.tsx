import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../Single/Button";

enum Types {
  clef = "clef",
  aimant = "aimant",
  badge = "badge",
}

export type ItemsProps = {
  id: string;
  num: number;
  isTaken: boolean;
  type: Types;
};

export const List = ({
  handleEdit,
}: {
  handleEdit?: (user: ItemsProps) => any;
}) => {
  const [list, setList] = useState<ItemsProps[]>(() => [
    { id: uuidv4(), num: 1, isTaken: false, type: Types.badge },
    { id: uuidv4(), num: 1, isTaken: false, type: Types.clef },
    { id: uuidv4(), num: 1, isTaken: false, type: Types.aimant },
    { id: uuidv4(), num: 1, isTaken: false, type: Types.clef },
    { id: uuidv4(), num: 1, isTaken: false, type: Types.aimant },
  ]);
  return (
    <>
      <div className="p-2 mt-2 rounded border-transparent bg-blue-100 px-4 py-2 font-medium text-blue-900 hover:bg-blue-200 flex items-center ">
        {list
          .sort((a, b) =>
            a.type.valueOf() > b.type.valueOf()
              ? 1
              : b.type.valueOf() > a.type.valueOf()
              ? -1
              : 0
          )
          .map((i: ItemsProps) => (
            <div className="flex-col items-center justify-evenly">
              {!i.isTaken && (
                <div className="p-2">
                  <h1>{i.type.valueOf()}</h1>
                  <h1>{i.num}</h1>
                </div>
              )}
            </div>
          ))}
        <Button
          label="Edit"
          className="rounded-md bg-green-400 hover:bg-green-500 ml-2"
          //   onClick={() => handleEdit?.()}
        >
          Edit
        </Button>
      </div>
    </>
  );
};
