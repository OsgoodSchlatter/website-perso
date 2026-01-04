import { RefObject, useEffect, useRef, useState } from "react";
import "../Views/Home/Home.css"

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
        <header className="h-20 md:w-1/2 flex items-center overflow-hidden justify-center">
          <div>


            <div className="flex items-center text-center justify-between p-2 mt-2">

              <Link
                to={"/"}
                className=""
              >
                <div className="font-pinco text-3xl text-blue-400 text-3d text-center mt-2">Osgood</div>
              </Link>

              <div className="flex items-center justify-center ml-4 ">
                <Link
                  to="/about/1"
                  className=" px-1 font-bold md:text-xl text-sm flex rounded-lg hover:bg-black"
                >
                  about
                </Link>
                <Link
                  to="/maps/1"
                  className=" px-1 font-bold md:text-xl text-sm flex rounded-lg hover:bg-black"
                >
                  maps
                </Link>
                <Link
                  to="/gallery/1"
                  className=" px-1 font-bold md:text-xl text-sm flex rounded-lg hover:bg-black"
                >
                  gallery
                </Link>
                <Link
                  to="/music/1"
                  className=" px-1 font-bold md:text-xl text-sm text-lg flex rounded-lg hover:bg-black"
                >
                  music
                </Link>
                <Link
                  to="/contact/1"
                  className=" px-1 font-bold md:text-xl text-sm flex rounded-lg hover:bg-black"
                >
                  contact
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
