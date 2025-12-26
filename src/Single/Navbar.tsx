import { RefObject, useEffect, useRef, useState } from "react";
import logo from "../data/pics/wallpaper/osgood_trimmed.png";

import { Link } from "react-router-dom";

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
      <div className="md:flex md:justify-center w-full fixed top-0 left-0 bg-slate-400 z-20">
        <header className="h-24 md:w-1/2 flex items-center overflow-hidden justify-center">
          <div>
            <div className="flex justify-center md:text-4xl text-3xl mb-1">
              <Link
                to={"/"}
                className="   text-slate-300 flex justify-center rounded-lg  md:text-[50px] text-[30px] text-shadow items-center "
              >
                <img src={logo} alt="Logo" className="w-2/5 h-auto" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center text-slate-100   mt-2">
              <Link
                to="/about/1"
                className=" px-2 font-bold md:text-xl text-lg flex rounded-lg hover:bg-black"
              >
                about
              </Link>
              <Link
                to="/maps/1"
                className=" px-2 font-bold md:text-xl text-lg flex rounded-lg hover:bg-black"
              >
                maps
              </Link>
              <Link
                to="/gallery/1"
                className=" px-2 font-bold md:text-xl text-lg flex rounded-lg hover:bg-black"
              >
                gallery
              </Link>
              <Link
                to="/music/1"
                className=" px-2 font-bold md:text-xl text-lg flex rounded-lg hover:bg-black"
              >
                music
              </Link>
              <Link
                to="/contact/1"
                className=" px-2 font-bold md:text-xl text-lg flex rounded-lg hover:bg-black"
              >
                contact
              </Link>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
