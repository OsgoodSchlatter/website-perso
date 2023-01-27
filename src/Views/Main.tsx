import { Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { DisplayIngredients } from "./CarbonCalculator/DisplayIngredients";
import { DisplayConso } from "./SNCFCockpit/DisplayConso";

export const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/sncf" element={<DisplayConso />} /> */}
        <Route path="/carbon" element={<DisplayIngredients />} />
      </Routes>
    </>
  );
};
