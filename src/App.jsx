import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CVPage from "./components/sections/CV";
import Home from "./components/sections/Home";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter basename="/landing-tomas">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;