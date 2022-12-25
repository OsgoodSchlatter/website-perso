import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Cv from "./CV/Cv";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Ingredients } from "./Ingredient/Ingredients";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/cv" element={<Cv />} />
          <Route path="/carbon" element={<Ingredients />} />
          {/* <Route path="/tool-mum" element={<ToolMum />} /> */}
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
