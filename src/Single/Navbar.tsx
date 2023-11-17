import { useState } from "react";
import { GrGithub } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { FaBookOpen, FaHome, FaUtensilSpoon } from "react-icons/fa";
import { BiSpreadsheet } from "react-icons/bi";
import Pdf from '../../src/CV_EN.pdf';



import { Link } from "react-router-dom";
import Tooltip2 from "./Tooltip_chatgpt";


export const Navbar = () => {
  return (
    <>
      <header className="h-20 px-4 bg-slate-100 flex items-center overflow-hidden justify-between">
        <div className="flex md:text-3xl">
          <Tooltip2 text="Home">
            <Link to="/" className="text-black md:px-4 p-2 flex hover:bg-slate-100 bg-white rounded-lg">
              <FaHome size={30} />
            </Link>
          </Tooltip2>

          <Tooltip2 text="Meal CO2">
            <Link to="/carbon" className="text-black md:px-4 p-2 ml-2 flex hover:bg-slate-100 bg-white rounded-lg">
              <FaUtensilSpoon size={30} />
            </Link>
          </Tooltip2>

        </div>
        <div className="flex items-center">
          <div
            className={`${"hover:bg-green-400 bg-green-500 flex gap-2 m-2 p-2 rounded-md items-end"
              } ${window.innerWidth <= 768
                ? "hidden md:block" // Hidden on screens smaller or equal to 768px
                : ""
              }`}
          >
            {" "}
            <Tooltip2 text="Website">
              <a href="https://www.websitecarbon.com/website/osgood-on-the-web-ml/">
                {" "}
                0.02 gCO2eq
              </a>
            </Tooltip2>
          </div>

          <div className="flex bg-white gap-2 m-2 px-2 pt-2 pb-1 rounded-md items-end">
            <div className="hover:bg-slate-500 rounded-lg">
              <a
                href={"https://www.linkedin.com/in/eloi-besnard-489a69170/"}
              >
                <Tooltip2 text="LinkedIn">
                  <GrLinkedin size={30} />
                </Tooltip2>
              </a>
            </div>
            <div className="hover:bg-slate-500 rounded-lg">
              <a href={"https://github.com/OsgoodSchlatter"}>
                <Tooltip2 text="GitHub"> <GrGithub size={30} />
                </Tooltip2>
              </a>
            </div>
            <div className="hover:bg-slate-500 rounded-lg">
              <Link to="/publi_talks">
                <Tooltip2 text="Publications"> <FaBookOpen size={30} />
                </Tooltip2>

              </Link>
            </div>
            <div className="rounded-lg hover:bg-slate-500">
              <Tooltip2 text="CV">  <a href={Pdf} target="_blank"> <BiSpreadsheet size={30} /></a>
              </Tooltip2>

            </div>
          </div>
        </div>
      </header>
    </>
  );
};
