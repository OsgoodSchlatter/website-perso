import { Link, Route, Routes } from "react-router-dom";
import { Home } from "../Component/Home";
import { Settings } from "../Component/Settings";
import { Ingredients } from "../Ingredient/Ingredients";

export const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/carbon" element={<Ingredients />} />
      </Routes>
    </>
  );
};
