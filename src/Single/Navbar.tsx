import { Link } from "react-router-dom";
import { GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";
import { useState } from "react";

export const Navbar = () => {
  const [hoverGH, setHoverGH] = useState(false);
  const [hoverLKD, setHoverLKD] = useState(false);
  return (
    <>
      <header className="h-20 px-4 bg-black flex items-center overflow-hidden justify-between">
        <div className="flex">
          <label htmlFor="" className=" text-white">
            <Link to="/" className="text-white">
              Home
            </Link>
          </label>
          <li>
            <Link to="/carbon" className="text-white">
              Carbon Calculator
            </Link>
          </li>
          <li>
            <Link to="/sncf" className="text-white">
              Sncf
            </Link>
          </li>
        </div>
        <div className="flex bg-white gap-2 m-2 p-2 rounded-md items-end">
          <a href={"https://www.linkedin.com/in/eloi-besnard-489a69170/"}>
            <div
              onMouseOver={() => setHoverLKD(true)}
              onMouseLeave={() => setHoverLKD(false)}
            >
              <GrLinkedin size={hoverLKD ? 40 : 30} />
            </div>
          </a>
          <div
            onMouseOver={() => setHoverGH(true)}
            onMouseLeave={() => setHoverGH(false)}
          >
            <a href={"https://github.com/OsgoodSchlatter"}>
              <GoMarkGithub size={hoverGH ? 40 : 30} />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
