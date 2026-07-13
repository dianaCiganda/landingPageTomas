import React, { useState } from "react";
import "./CV.css";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const CVPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const pdfUrl = `${import.meta.env.BASE_URL}assets/cvTomas.pdf`;

  return (
    <>
      <Header/>
      <div className="cv-page">
        <div className="cv-container">
          {isLoading && (
            <div className="cv-loader">
              <div className="spinner"></div>
              <p>Cargando CV...</p>
            </div>
          )}

          <iframe
            src={pdfUrl}
            className="cv-iframe"
            title="CV Tomás Imarina"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CVPage;