import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import CVPage from "./components/sections/CV";
import Home from "./components/sections/Home";
import Contact from "./components/sections/Contact";
import Publications from "./components/sections/Publications";
import PublicationDetail1 from "./components/sections/PublicationDetail-1";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter basename="/landingPageTomas">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/publications" element={<Publications />} />
        {/* Rutas para cada PublicationDetail */}
        <Route path="/publication-detail/1" element={<PublicationDetail1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;