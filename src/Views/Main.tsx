import { Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { DisplayIngredients } from "./CarbonCalculator/DisplayIngredients";
import { CS } from "./ComputerScience/CS";
import { Chess } from "./Chess/Chess";
import { Trips } from "./Trips/Trips";
import { Books } from "./Books/Books";
import { Physics } from "./Physics/Physics";
import { PhysicsPosts } from "./Physics/PhysicsPosts/PhysicsPosts";

import { Piano } from "./Piano/Piano";
import { Crypto } from "./Crypto/Crypto";
import { Maths } from "./Maths/Maths";
import { Guitar } from "./Guitar/Guitar";
import { Sport } from "./Sport/Sport";
import { Climate } from "./Climate/Climate";
import { CryptoPosts } from "./Crypto/CryptoPosts/CryptoPosts";
import React from "react";

export const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carbon" element={<DisplayIngredients />} />
        <Route path="/CS" element={<CS />} />
        <Route path="/chess" element={<Chess />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/books" element={<Books />} />
        <Route path="/physics/*" element={<Physics />} />
        <Route path="/physics/:postID" element={<PhysicsPosts />} />
        <Route path="/piano" element={<Piano />} />
        <Route path="/cryptography/*" element={<Crypto />} />
        <Route path="/cryptography/:postID" element={<CryptoPosts />} />
        <Route path="/guitar" element={<Guitar />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/maths" element={<Maths />} />
        <Route path="/climate" element={<Climate />} />
      </Routes>
    </>
  );
};
