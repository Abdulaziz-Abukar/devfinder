import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import { AppRoutes } from "./routes/AppRoutes";

export function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
}
