import { useState } from "react";

const WIDTH = 300;

export const Navbar = () => {
  const [side, setSide] = useState(Boolean);
  return (
    <>
      <div className="h-14 p-2 bg-black flex items-center justify-between">
        <label htmlFor="" className="text-white">
          My carbon calculator
        </label>
        <button
          className="p-2  bg-slate-300 rounded"
          onClick={() => setSide(!side)}
        >
          {side ? "<" : ">"}
        </button>
      </div>
      <div
        className="absolute bg-slate-300 h-full shadow-sm"
        style={{ right: side ? 0 : -WIDTH, width: WIDTH }}
      >
        <div className="p-2 font-semibold">hello</div>
      </div>
    </>
  );
};
