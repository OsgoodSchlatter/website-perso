import { Link } from "react-router-dom";

export const Header = ({ name, posts }: { name: string; posts: number }) => {
  return (
    <div className="flex justify-center">
      <div>
        <div className="pt-10 text-4xl font-bold text-center">
          {name}
          <div className="w-[400px] py-2 border-b-2 border-slate-500" />
        </div>
        <div className="flex justify-between">
          {posts}
          <div className="hover:underline">
            <Link to="/">see all topics</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
