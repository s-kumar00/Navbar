import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="bg-primary text-tertiary">
      <Header />
      <Outlet />
    </main>
  );
}

export default App;
