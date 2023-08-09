import React from "react";
import { Link } from "react-router-dom";

export const Header = ({ name, posts }: { name: string; posts: number }) => {
  return (
    <div className="flex justify-center">
      <div>
        <div className="pt-10 text-4xl font-bold text-center">
          {name}
          <div className="w-[400px] px-4"> {/* Center the line */}
            <div className="py-2 border-b-2 border-slate-500"></div>
          </div>
        </div>
        <div className="flex justify-between px-4">
          {posts}
          <div className="hover:underline">
            <Link to="/">see all topics</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
