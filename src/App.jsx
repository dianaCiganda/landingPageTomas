import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import CVPage from "./components/sections/CV";
import Home from "./components/sections/Home";
import Contact from "./components/sections/Contact";
import Publications from "./components/sections/Publications";
import PublicationsDetail1 from "./components/sections/PublicationDetail-1";
import Projects from "./components/sections/Projects";
import ProjectDetail from "./components/sections/ProjectDetail"; // Importar
import "./styles/App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <BrowserRouter basename="/landingPageTomas">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/publication-detail/:id" element={<PublicationsDetail1 />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project-detail/:id" element={<ProjectDetail />} /> {/* Nueva ruta */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;