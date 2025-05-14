import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import { AppRoutes } from "./routes/AppRoutes";
import { Footer } from "./components/footer/Footer";
import "./App.css";

export function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}
