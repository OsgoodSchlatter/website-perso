import { Link, useNavigate } from "react-router-dom";

export const HeaderPost = ({
  name,
  date,
  back,
}: {
  name: string;
  date: string;
  back: string;
}) => {
  const navigate = useNavigate();

  const handleClick = (back: string) => {
    navigate(back);
  };
  return (
    <div>
      <div className="pt-10 text-4xl font-bold text-center">
        {name}
        <div className="py-2 border-b-2 border-slate-500" />
      </div>
      <div className="flex justify-between">
        {date}
        <div
          className="mx-10 hover:underline"
          onClick={() => handleClick(back)}
        >
          back to {back}
        </div>
        <div className="hover:underline">
          <Link to="/">see all topics</Link>
        </div>
      </div>
    </div>
  );
};
