import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import AddItem from "./pages/AddItem";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter
    future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
  >
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/add" element={<AddItem />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  </BrowserRouter>
);
