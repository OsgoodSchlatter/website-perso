import React from "react";
import "./App.css";
import { Navbar } from "./Single/Navbar";
import { Main } from "./Views/Main";
import { Link, Route, Router, Routes } from "react-router-dom";
import { Ingredients } from "./Ingredient/Ingredients";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <hr />
        <Main />
      </div>
    </>
  );
}

export default App;
