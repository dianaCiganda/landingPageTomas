import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import CVPage from "./components/sections/CV";
import Home from "./components/sections/Home";
import "./styles/App.css";


function App() {

  return (
    <BrowserRouter>

      <Layout>

        <Routes>

          <Route 
            path="/" 
            element={<Home />} 
          />

          <Route 
            path="/cv" 
            element={<CVPage />} 
          />

        </Routes>

      </Layout>

    </BrowserRouter>
  );
}


export default App;