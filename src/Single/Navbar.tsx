import { RefObject, useEffect, useRef, useState } from "react";
import { GrGithub } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { FaBookOpen, FaHome, FaUtensilSpoon } from "react-icons/fa";
import { BiSpreadsheet } from "react-icons/bi";
import Pdf from "../../src/CV_EN.pdf";
import { TfiWrite } from "react-icons/tfi";
import { IoIosApps } from "react-icons/io";
import { SiLichess } from "react-icons/si";
import { GiGuitarHead } from "react-icons/gi";



import { Link } from "react-router-dom";
import Tooltip2 from "./Tooltip_chatgpt";
import GmailButton from "./Gmailbutton";

export const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [toolsVisible, setToolsVisible] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const toolRef = useRef<HTMLDivElement>(null);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonToolRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setMenuVisible((prevMenuVisible) => !prevMenuVisible);
  };

  const toggleTools = () => {
    setToolsVisible((prevToolsVisible) => !prevToolsVisible);
  };

  const handleMenuDocumentClick = (e: MouseEvent) => {
    if (
      menuRef.current &&
      buttonRef.current &&
      !menuRef.current.contains(e.target as Node) &&
      !buttonRef.current.contains(e.target as Node)
    ) {
      setMenuVisible(false);
    }
  };

  const handleToolsDocumentClick = (e: MouseEvent) => {
    if (
      toolRef.current &&
      buttonToolRef.current &&
      !toolRef.current.contains(e.target as Node) &&
      !buttonToolRef.current.contains(e.target as Node)
    ) {
      setToolsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleMenuDocumentClick);
    document.addEventListener("click", handleToolsDocumentClick);
    return () => {
      document.removeEventListener("click", handleMenuDocumentClick);
      document.removeEventListener("click", handleToolsDocumentClick);
    };
  }, []);


  return (
    <>
      <header className="h-20 px-4 flex items-center overflow-hidden justify-between">
        <div className="flex md:text-3xl">
          <Tooltip2 text="Home">
            <Link
              to="/"
              className="text-black md:px-4 p-2 flex hover:bg-slate-100 bg-white rounded-lg"
            >
              <FaHome size={30} />
            </Link>
          </Tooltip2>

          <Tooltip2 text="Apps">
            <button ref={buttonToolRef}
              onClick={toggleTools}
              className="text-black md:px-4 p-2 flex hover:bg-slate-100 bg-white rounded-lg ml-2">
              <IoIosApps size={30} />
            </button>
          </Tooltip2>
          {toolsVisible && (
            <div ref={toolRef}
              className="absolute bg-white p-2 left-40 shadow-lg px-4 border-2 border-slate-100 rounded-lg text-right"
              style={{ display: toolsVisible ? "block" : "none" }}
            >
              <div className="hover:bg-slate-100 rounded-lg">
                <Link
                  to="/chess/1"
                  className="text-black md:px-4 p-2 flex hover:bg-slate-100 bg-white rounded-lg"
                >
                  <SiLichess />
                </Link>
              </div>
              <div className="hover:bg-slate-100 rounded-lg mt-2">
                <Link
                  to="/climate/2"
                  className="text-black md:px-4 p-2 flex hover:bg-slate-100 bg-white rounded-lg"
                >
                  <FaUtensilSpoon />
                </Link>
              </div>
              <div className="hover:bg-slate-100 rounded-lg mt-2">
                <Link
                  to="/music/2"
                  className="text-black md:px-4 p-2 flex hover:bg-slate-100 bg-white rounded-lg"
                >
                  <GiGuitarHead />
                </Link>
              </div>

            </div>

          )}
        </div>
        <div className="p-10 font-bold text-4xl text-center" >Osgood's website</div>
        <div className="flex items-center">
          <div
            className={`${"hover:bg-green-400 bg-green-500 flex gap-2 m-2 p-2 rounded-md items-end"} ${window.innerWidth <= 768
              ? "hidden md:block" // Hidden on screens smaller or equal to 768px
              : ""
              }`}
          >
            {" "}
            <Tooltip2 text="Website CO2">
              <a className="text-black" href="https://www.websitecarbon.com/website/osgood-pro/">
                {" "}
                0.08 gCO2eq
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
                <Link to="/publi_talks/1">

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

                <Link to={"/recruiter/1"}>
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
