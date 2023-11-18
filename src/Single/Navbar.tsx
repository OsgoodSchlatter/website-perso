import { useEffect, useRef, useState } from "react";
import { GrGithub } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { FaBookOpen, FaHome, FaUtensilSpoon } from "react-icons/fa";
import { BiSpreadsheet } from "react-icons/bi";
import Pdf from "../../src/CV_EN.pdf";
import { TfiWrite } from "react-icons/tfi";

import { Link } from "react-router-dom";
import Tooltip2 from "./Tooltip_chatgpt";
import GmailButton from "./Gmailbutton";

export const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setMenuVisible((prevMenuVisible) => !prevMenuVisible);
  };

  const handleDocumentClick = (e: MouseEvent) => {
    if (menuRef.current && buttonRef.current && !menuRef.current.contains(e.target as Node) && !buttonRef.current.contains(e.target as Node)) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);


  return (
    <>
      <header className="h-20 px-4 bg-slate-100 flex items-center overflow-hidden justify-between">
        <div className="flex md:text-3xl">
          <Tooltip2 text="Home">
            <Link
              to="/"
              className="text-black md:px-4 p-2 flex hover:bg-slate-100 bg-white rounded-lg"
            >
              <FaHome size={30} />
            </Link>
          </Tooltip2>

          <Tooltip2 text="Meal CO2">
            <Link
              to="/carbon"
              className="text-black md:px-4 p-2 ml-2 flex hover:bg-slate-100 bg-white rounded-lg"
            >
              <FaUtensilSpoon size={30} />
            </Link>
          </Tooltip2>
        </div>
        <div className="flex items-center">
          <div
            className={`${"hover:bg-green-400 bg-green-500 flex gap-2 m-2 p-2 rounded-md items-end"} ${window.innerWidth <= 768
              ? "hidden md:block" // Hidden on screens smaller or equal to 768px
              : ""
              }`}
          >
            {" "}
            <Tooltip2 text="Website CO2">
              <a href="https://www.websitecarbon.com/website/osgood-on-the-web-ml/">
                {" "}
                0.02 gCO2eq
              </a>
            </Tooltip2>
          </div>
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <GmailButton />
          </button>
          {menuVisible && (
            <div ref={menuRef}
              className="absolute bg-white p-2 top-20 right-4 shadow-lg px-4 border-2 border-slate-100 rounded-lg text-right"
              style={{ display: menuVisible ? "block" : "none" }}
            >
              <div className="hover:bg-slate-100 rounded-lg">
                <a href={"https://www.linkedin.com/in/eloi-besnard-489a69170/"}>

                  <div className="flex p-1 justify-between">
                    <span className="px-2 mt-1 font-bold">LinkedIn</span>{" "}
                    <GrLinkedin size={30} />
                  </div>

                </a>
              </div>
              <div className="hover:bg-slate-100 rounded-lg">
                <a href={"https://github.com/OsgoodSchlatter"}>

                  <div className="flex p-1 justify-between">
                    <span className="px-2 mt-1 font-bold">GitHub</span>{" "}
                    <GrGithub size={30} />
                  </div>

                </a>
              </div>
              <div className="hover:bg-slate-100 rounded-lg">
                <Link to="/publi_talks">

                  <div className="flex p-1 justify-between">
                    <span className="px-2 mt-1 font-bold">Publications</span>{" "}
                    <FaBookOpen size={30} />
                  </div>

                </Link>
              </div>
              <div className="rounded-lg hover:bg-slate-100">

                {" "} <a href={Pdf} target="_blank">
                  <div className="flex p-1 justify-between">
                    <span className="px-2 mt-1 font-bold">Resume</span>{" "}

                    {" "}
                    <BiSpreadsheet size={30} />
                  </div>
                </a>
              </div>
              <div className="rounded-lg hover:bg-slate-100">

                <Link to={"/recruiter"}>
                  <div className="flex p-1 justify-between">
                    <span className="px-2 mt-1 font-bold">Contact</span>
                    <TfiWrite size={30} />
                  </div>
                </Link>

              </div>
            </div>

          )}
        </div>
      </header>
    </>
  );
};
