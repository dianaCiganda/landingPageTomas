// components/sections/Inicio.jsx
import React from "react";
import ProfileTemplate from "../layout/ProfileTemplate";
import "./Inicio.css";
import Mapamundi from "../../components/Mapamundi";

const Inicio = () => {
  return (
    <ProfileTemplate title="Tomás I. Marina">
      <section className="about">
        <div className="about-container">
          <div className="about-wrapper">
            <div className="about-text">
              <span className="section-tag">About Me</span>
              <p className="about-intro">
                I am a full-time researcher at <strong>CADIC-CONICET</strong> in Ushuaia, Argentina.
                With an M.Sc. in Biological Oceanography (CINVESTAV-IPN, Mexico) and a Ph.D. in Science
                (UNGS, Argentina), my research focuses on <strong>modeling species interactions</strong>
                in high-latitude marine ecosystems using a network perspective.
              </p>
              <p>
                I have published over <strong>20 peer-reviewed articles</strong> and I am currently
                (2022–2026) leading a project on the effects of multiple stressors on marine ecosystems.
                I also teach a postgraduate course on <strong>food web modeling</strong>.
              </p>
            </div>
          </div>
        </div>
        
        {/* TÍTULO COLABORACIONES CON ICONO DEL MUNDO */}
        <div className="colaboraciones-header">
          <svg 
            className="colaboraciones-icon" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          <h1 className="colaboraciones-title">Colaboraciones Científicas</h1>
        </div>
        
        <div className="map-wrapper">
          <Mapamundi />
        </div>
      </section>
    </ProfileTemplate>
  );
};

export default Inicio;