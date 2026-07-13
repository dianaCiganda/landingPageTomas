import React, { useState } from "react";
import "./CV.css";

const CVPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const pdfUrl = "/assets/cvTomas.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV-Tomas-Imarina.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
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
  );
};

export default CVPage;