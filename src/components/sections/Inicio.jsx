// components/sections/Inicio.jsx
import React from "react";
import { Link } from "react-router-dom";
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
                I am an Associate Researcher at <strong>CADIC-CONICET</strong> in Ushuaia, Argentina.
                Holding an M.Sc. in Marine Biology (Cinvestav, Mexico) and a Ph.D. in Science and
                Technology (UNGS, Argentina), my research focuses on the structure, functioning,
                and dynamic stability of marine ecosystems across polar and sub-polar regions,
                specifically along the Southwest Atlantic and Antarctic gradient. I apply
                quantitative ecological modeling, complex network theory, and metaweb frameworks
                to investigate how trophic and non-trophic interactions respond to environmental
                drivers, human activities, and climate-driven extreme events.
              </p>
              <p>
                I have authored <strong>25 peer-reviewed publications</strong> (September 2026) in
                journals such as <em>PNAS</em>, <em>Earth-Science Reviews</em>,{" "}
                <em>Ecological Applications</em>, and <em>Oikos</em>, and have served as Principal
                Investigator on projects evaluating multi-stressor impacts and food-web architecture
                in oceanic Marine Protected Areas. Beyond research, I serve as an Associate Editor
                for <em>Ecological Indicators</em>, <em>Food Webs</em> and{" "}
                <em>Oecologia Australis</em>, lead the postgraduate course{" "}
                <em>Análisis de Redes Tróficas Complejas en Ecosistemas Marinos</em> at CICESE
                (Mexico), and work to bridge scientific modeling with conservation policy,
                fisheries sustainability, and polar expedition outreach.
              </p>
              <p>
                If you have questions about my work, are interested in partnering on a research
                project, or just want to connect, please feel free to{" "}
              <Link to="/contact" className="contact-link">
  reach out
</Link>
                .
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
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <h1 className="colaboraciones-title">SCIENTIFIC COLLABORATIONS</h1>
        </div>

        <div className="map-wrapper">
          <Mapamundi />
        </div>
      </section>
    </ProfileTemplate>
  );
};

export default Inicio;