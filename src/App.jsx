import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import { AppRoutes } from "./routes/AppRoutes";
import { Footer } from "./components/footer/Footer";
import CatsbyFixed from "./assets/CatsbyFixed.png";
import "./App.css";

export function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <AppRoutes />
      <img
        src={CatsbyFixed}
        alt="Image of Catsby being happy"
        className="catsbyImg"
      />
      <Footer />
    </div>
  );
}
