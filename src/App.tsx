import React from "react";
import "./App.css";
import { Navbar } from "./Single/Navbar";
import { Main } from "./Views/Main";
import { Ingredient } from "./Ingredient/Ingredient";
import { Ingredients } from "./Ingredient/Ingredients";

function App() {
  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}

export default App;
