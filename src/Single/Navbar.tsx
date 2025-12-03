import { RefObject, useEffect, useRef, useState } from "react";

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
      <div className="md:flex md:justify-center w-full fixed top-0 left-0 bg-slate-700 z-[1000]">
        <header className="h-20 md:w-1/2 flex items-center overflow-hidden justify-center">
          <div>
            <div className="flex justify-center md:text-4xl text-3xl mb-1">
              <Link
                to="/"
                className="text-green-400 px-6 md:px-2 flex rounded-lg hover:underline"
              >
                @osgood
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Link
                to="/about/1"
                className=" px-2 md:text-2xl text-xl flex rounded-lg hover:underline"
              >
                about
              </Link>
              <Link
                to="/maps/1"
                className=" px-2  md:text-2xl text-xl flex rounded-lg hover:underline"
              >
                maps
              </Link>
              <Link
                to="/gallery/1"
                className=" px-2  md:text-2xl text-xl flex rounded-lg hover:underline"
              >
                gallery
              </Link>
              <Link
                to="/contact/1"
                className=" px-2  md:text-2xl text-xl flex rounded-lg hover:underline"
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
