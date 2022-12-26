import React from "react";
import "./App.css";
import { Navbar } from "./Single/Navbar";
import { Main } from "./Views/Main";
import { ToolMum } from "./Tool-mum/Tool";

function App() {
  return (
    <>
      <Navbar />
      <ToolMum />
    </>
  );
}

export default App;
