import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

const entryPoint = document.getElementById("root");

ReactDOM.createRoot(entryPoint).render(
  <BrowserRouter basename="/devfinder">
    <App />
  </BrowserRouter>
);
