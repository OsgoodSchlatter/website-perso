import { Books } from "./Books/Books";
import { DisplayIngredients } from "./CarbonCalculator/DisplayIngredients";
import { Chess } from "./Chess/Chess";
import { Climate } from "./Climate/Climate";
import { CSPosts } from "./CS/CSPosts/CSPosts"
import { CS } from "./CS/CS";
import { Guitar } from "./Guitar/Guitar";
import { Home } from "./Home/Home";
import { Maths } from "./Maths/Maths";
import { Physics } from "./Physics/Physics";
import { PhysicsPosts } from "./Physics/PhysicsPosts/PhysicsPosts";
import { Piano } from "./Piano/Piano";
import { PianoPosts } from "./Piano/PianoPosts/PianoPosts";
import { Sport } from "./Sport/Sport";
import { Trips } from "./Trips/Trips";
import { Route, Routes } from "react-router-dom";
import { ClimatePosts } from "./Climate/ClimatePosts/ClimatePosts";
import { Languages } from "./Languages/Languages";
import { LanguagesPosts } from "./Languages/LanguagesPosts/LanguagesPosts";

export const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carbon" element={<DisplayIngredients />} />
        <Route path="/climate" element={<Climate />} />
        <Route path="/climate/:postID" element={<ClimatePosts />} />
        <Route path="/chess" element={<Chess />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/books" element={<Books />} />
        <Route path="/physics/*" element={<Physics />} />
        <Route path="/physics/:postID" element={<PhysicsPosts />} />
        <Route path="/piano" element={<Piano />} />
        <Route path="/piano/:postID" element={<PianoPosts />} />
        <Route path="/cs/*" element={<CS />} />
        <Route path="/cs/:postID" element={<CSPosts />} />
        <Route path="/guitar" element={<Guitar />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/maths" element={<Maths />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/languages/:postID" element={<LanguagesPosts />} />
      </Routes>
    </>
  );
};
