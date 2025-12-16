import { RefObject, useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

export const NavbarContour = () => {
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
      <div className="md:flex md:justify-center w-full fixed top-0 left-0 bg-yellow-400 z-20">
        <header className="h-24 md:w-1/2 flex items-center overflow-hidden justify-center">
          <div>
            <div className="flex justify-center md:text-4xl text-3xl mb-1">
              <Link
                to={"/contour/1"}
                className=" font-fatkat text-yellow-300 flex justify-center rounded-lg  md:text-[50px] text-[30px] text-shadow items-center mt-4"
              >
                Contour


              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center text-yellow-100 font-fatkat mt-2">

              <Link
                to="/agenda/2"
                className=" px-2 font-bold md:text-2xl text-lg flex rounded-lg hover:bg-black"
              >
                agenda
              </Link>
              <Link
                to="/shop/3"
                className=" px-2 font-bold md:text-2xl text-lg flex rounded-lg hover:bg-black"
              >
                shop
              </Link>
              <Link
                to="/pictures/4"
                className=" px-2 font-bold md:text-2xl text-lg flex rounded-lg hover:bg-black"
              >
                gallery
              </Link>
              <Link
                to="/form/5"
                className=" px-2 font-bold md:text-2xl text-lg flex rounded-lg hover:bg-black"
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
