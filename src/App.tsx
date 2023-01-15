import React from "react";
import "./App.css";
import { Navbar } from "./Single/Navbar";
import { Main } from "./Views/Main";

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
