import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import CVPage from "./components/sections/CV";
import Home from "./components/sections/Home";
import Contact from "./components/sections/Contact";
import "./styles/App.css";
function App() {
  return (
    <BrowserRouter basename="/landingPageTomas">
      <Header /> {/* ← Header DENTRO de BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;