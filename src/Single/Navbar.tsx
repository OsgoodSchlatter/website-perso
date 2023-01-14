import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <header className="h-24 p-2 bg-black flex items-center overflow-hidden">
        <label htmlFor="" className="text-white">
          <Link to="/" className="text-white">
            Osgood's website
          </Link>
        </label>
        <li>
          <Link to="/carbon" className="text-white">
            Carbon Calculator
          </Link>
        </li>
        <li>
          <Link to="/settings" className="text-white">
            Settings
          </Link>
        </li>
      </header>
    </>
  );
};
