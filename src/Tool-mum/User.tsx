import { Button } from "../Single/Button";

export type UserProps = {
  id: string;
  username: string;
  pass?: boolean;
  aimant?: boolean;
  badge?: boolean;
  poste?: string;
  handleDelete?: (id: string) => any;
  handleEdit?: (user: UserProps) => any;
};

export const User = ({
  user,
  handleDelete,
  handleEdit,
}: {
  user: UserProps;
  handleDelete?: (id: string) => any;
  handleEdit?: (user: UserProps) => any;
}) => {
  return (
    <div
      className="p-2 mt-2 rounded border-transparent bg-blue-100 px-4 py-2 font-medium text-blue-900 hover:bg-blue-200 flex items-center"
      id={user.id}
    >
      <div className="w-1/5 text-3xl font-semibold text-black">
        {user.username}{" "}
      </div>
      <h1 className="text-2xl p-2">
        {" "}
        <span role="img" aria-label="pass">
          💳
        </span>
        {user.pass ? " oui " : " non "}
      </h1>
      <h1 className="text-2xl p-2">
        <span role="img" aria-label="aimant">
          🧲
        </span>{" "}
        {user.aimant ? " oui " : " non "}
      </h1>
      <h1 className="text-2xl p-2">
        {" "}
        <span role="img" aria-label="badge">
          🪪
        </span>{" "}
        {user.badge ? " oui " : " non "}
      </h1>
      <h1 className="text-2xl p-2">
        {" "}
        <span role="img" aria-label="poste">
          💼
        </span>{" "}
        {user.poste}{" "}
      </h1>
      <div className=" justify-end">
        <Button
          label="Edit"
          className="rounded-md bg-green-400 hover:bg-green-500 ml-2 "
          onClick={() => handleEdit?.(user)}
        >
          Edit
        </Button>
        <Button
          label="Suppr"
          className="rounded-md bg-red-400 hover:bg-red-500 ml-2"
          onClick={() => handleDelete?.(user.id)}
        >
          Suppr
        </Button>
      </div>
    </div>
  );
};
