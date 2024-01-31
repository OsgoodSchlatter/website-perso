import React from "react";
import "./App.css";
import { Navbar } from "./Single/Navbar";
import { Main } from "./Views/Main";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <hr />
        <Main />
      </div>
    </div>
  );
}

export default App;
