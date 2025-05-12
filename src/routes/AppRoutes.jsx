import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/home/Home";
import { About } from "../components/about/About";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
