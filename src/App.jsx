import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // ← NUEVO
import Layout from "./components/layout/Layout";
import CVPage from "./components/sections/CV";
import Home from "./components/sections/Home";
import Contact from "./components/sections/Contact";
import Publications from "./components/sections/Publications";
import PublicationsDetail1 from "./components/sections/PublicationDetail-1";
import Projects from "./components/sections/Projects";
import ProjectDetail from "./components/sections/ProjectDetail";
import Teaching from "./components/sections/Teaching";
import Supervision from "./components/sections/Supervision";
import News from "./components/sections/News"; 
import supervision from "./data/supervisionsData";
import "./styles/App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />   {/* ← NUEVO: debe ir dentro del BrowserRouter */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/publication-detail/:id" element={<PublicationsDetail1 />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project-detail/:id" element={<ProjectDetail />} />
          <Route path="/supervision" element={<Supervision supervision={supervision} />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/news" element={<News />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;