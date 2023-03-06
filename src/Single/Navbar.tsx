import { Link } from "react-router-dom";
import { GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";
import { useState } from "react";

export const Navbar = () => {
  const [hoverGH, setHoverGH] = useState(false);
  const [hoverLKD, setHoverLKD] = useState(false);
  const [hoverC, setHoverC] = useState(false);
  return (
    <>
      <header className="h-20 px-4 bg-slate-100 flex items-center overflow-hidden justify-between">
        <div className="flex">
          <Link to="/" className="text-black hover:underline">
            Home
          </Link>
          <Link to="/carbon" className="text-black px-10 hover:underline">
            Carbon Calculator
          </Link>
        </div>
        <div className="flex items-center">
          <div
            onMouseOver={() => setHoverC(true)}
            onMouseLeave={() => setHoverC(false)}
          >
            <div
              className={
                "" +
                (hoverC
                  ? "bg-green-500 flex gap-2 m-2 p-2 rounded-md items-end"
                  : "bg-green-400 flex gap-2 m-2 p-2 rounded-md items-end")
              }
            >
              {" "}
              <a href="https://www.websitecarbon.com/website/osgood-on-the-web-ml/">
                {" "}
                0.02 gCO2eq
              </a>
            </div>
          </div>
          <div className="flex bg-white gap-2 m-2 p-2 rounded-md items-end">
            <div
              onMouseOver={() => setHoverLKD(true)}
              onMouseLeave={() => setHoverLKD(false)}
            >
              {hoverLKD ? (
                <div className="bg-slate-500 rounded-lg">
                  <a
                    href={"https://www.linkedin.com/in/eloi-besnard-489a69170/"}
                  >
                    <GrLinkedin size={30} />
                  </a>
                </div>
              ) : (
                <div className=" rounded-lg">
                  <a
                    href={"https://www.linkedin.com/in/eloi-besnard-489a69170/"}
                  >
                    <GrLinkedin size={30} />
                  </a>
                </div>
              )}
            </div>
            <div
              onMouseOver={() => setHoverGH(true)}
              onMouseLeave={() => setHoverGH(false)}
            >
              {hoverGH ? (
                <div className="bg-slate-500 rounded-lg">
                  <a href={"https://github.com/OsgoodSchlatter"}>
                    <GoMarkGithub size={30} />
                  </a>
                </div>
              ) : (
                <div className="rounded-full">
                  <a href={"https://github.com/OsgoodSchlatter"}>
                    <GoMarkGithub size={30} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
