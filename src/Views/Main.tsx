import { Books } from "./Books/Books";
import { DisplayIngredients } from "./CarbonCalculator/DisplayIngredients";
import { Chess } from "./Chess/Chess";
import { Climate } from "./Climate/Climate";
import { CS } from "./ComputerScience/CS";
import { Crypto } from "./Crypto/Crypto";
import { CryptoPosts } from "./Crypto/CryptoPosts/CryptoPosts";
import { Guitar } from "./Guitar/Guitar";
import { Home } from "./Home/Home";
import { Maths } from "./Maths/Maths";
import { Physics } from "./Physics/Physics";
import { PhysicsPosts } from "./Physics/PhysicsPosts/PhysicsPosts";
import { Piano } from "./Piano/Piano";
import { PianoPosts } from "./Piano/PianoPosts/PianoPosts";
import { Sport } from "./Sport/Sport";
import { Trips } from "./Trips/Trips";
import React from "react";
import { Route, Routes } from "react-router-dom";

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
        <Route path="/piano/:postID" element={<PianoPosts />} />
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
