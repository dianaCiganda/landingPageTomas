// components/sections/publication-details/PublicationDetail1.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProfileTemplate from "../layout/ProfileTemplate";
import "./PublicationDetail.css";

const PublicationDetail1 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  
  // FORZAR SCROLL AL INICIO
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
    const timers = [
      setTimeout(() => window.scrollTo(0, 0), 0),
      setTimeout(() => window.scrollTo(0, 0), 50),
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100)
    ];
    
    return () => timers.forEach(timer => clearTimeout(timer));
  }, [location.pathname, location.key]);
  
  const publication = {
    id: 1,
    title: "First evidence of correlated ecosystem service and food web robustness in a sub-Antarctic marine protected area",
    type: "Journal article",
    authors: "J. Mitchell Porter, Luciana Riccialdelli, Gustavo A. Lovrich & Tomás I. Marina",
    year: 2026,
    journal: "Ecological Applications",
    volume: "45(2)",
    pages: "123-145",
    doi: "10.1002/eap.70268",
    abstract: "In protected areas management, ecosystem services (ES) are increasingly considered alongside biodiversity conservation. Even so, the decisions made with respect to ecosystem service conservation rarely include the potential cascade effects of biodiversity loss on ecosystem service provisions. We performed a series of extinction simulations for eight ES integrated into a food web model for the Namuncurá-Burdwood Bank Marine Protected Areas I and II (N-BB MPA; ~54–56° S, ~56–62° W). For the first time in a marine ecosystem of this scale, we find that the robustness of the food web to species loss is highly correlated with ES's robustness to species loss. This study builds on recent efforts to deploy network theory for establishing conservation goals and presents a novel approach for applying network theory to ES maintenance. We determine that ecosystem service providers play little role in maintaining network stability, and that highly connected species and species which support ES indirectly should receive greater attention from conservation planners. While existing data are likely insufficient to determine the true robustness of individual services, we suggest that integrating ES into existing food webs, even without detailed quantitative data on service provision, can complement existing predictions of structural changes to food webs to identify vulnerable ES.",
    keywords: ["Ecosystem services", "Food web robustness", "Marine protected areas", "Network theory", "Sub-Antarctic", "Conservation planning"],
    url: "https://doi.org/10.1002/eap.70268",
    pdf: `${import.meta.env.BASE_URL}assets/publicacion1.pdf`
  };

  // Función para manejar el click en "All publications"
  const handleGoToPublications = (e) => {
    e.preventDefault();
    navigate('/publications');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  // Función para resaltar "Tomás I. Marina"
  const highlightAuthor = (authors) => {
    const nameToHighlight = "Tomás I. Marina";
    const parts = authors.split(nameToHighlight);
    
    if (parts.length === 1) {
      return <span>{authors}</span>;
    }
    
    return (
      <span>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < parts.length - 1 && (
              <strong className="highlighted-author">{nameToHighlight}</strong>
            )}
          </React.Fragment>
        ))}
      </span>
    );
  };

  // Función para resaltar el término de búsqueda en un texto
  const highlightText = (text, searchTerm) => {
    if (!searchTerm || !text) return text;
    
    const searchLower = searchTerm.toLowerCase().trim();
    const textLower = text.toLowerCase();
    
    if (!textLower.includes(searchLower)) return text;
    
    const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      part.toLowerCase() === searchLower ? 
        <mark key={index} className="search-highlight">{part}</mark> : 
        part
    );
  };

  // Función para verificar si el texto contiene la búsqueda
  const matchesSearch = (text, searchTerm) => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase().trim();
    if (!searchLower) return true;
    return text.toLowerCase().includes(searchLower);
  };

  // Verificar si hay búsqueda
  const hasSearch = searchTerm.trim().length > 0;

  // Verificar si la publicación coincide con la búsqueda
  const publicationMatches = hasSearch ? (
    matchesSearch(publication.title, searchTerm) ||
    matchesSearch(publication.authors, searchTerm) ||
    matchesSearch(publication.journal, searchTerm) ||
    matchesSearch(publication.year.toString(), searchTerm) ||
    matchesSearch(publication.doi, searchTerm) ||
    matchesSearch(publication.abstract, searchTerm) ||
    publication.keywords.some(keyword => matchesSearch(keyword, searchTerm))
  ) : true;

  // Contar resultados encontrados
  const getMatchCount = () => {
    if (!hasSearch) return 0;
    let count = 0;
    if (matchesSearch(publication.title, searchTerm)) count++;
    if (matchesSearch(publication.authors, searchTerm)) count++;
    if (matchesSearch(publication.journal, searchTerm)) count++;
    if (matchesSearch(publication.year.toString(), searchTerm)) count++;
    if (matchesSearch(publication.doi, searchTerm)) count++;
    if (matchesSearch(publication.abstract, searchTerm)) count++;
    publication.keywords.forEach(keyword => {
      if (matchesSearch(keyword, searchTerm)) count++;
    });
    return count;
  };

  const matchCount = getMatchCount();

  return (
    <ProfileTemplate title="Tomás I. Marina">
      {/* BARRA DE BÚSQUEDA - DEBAJO DEL BANNER */}
      <div className="search-container">
        <div className="search-wrapper">
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            className="search-input"
            placeholder="Search in this publication..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button 
              className="search-clear"
              onClick={() => setSearchTerm("")}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
        <span className="search-results-count">
          {hasSearch ? `${matchCount} match${matchCount !== 1 ? 'es' : ''} found` : '0 results'}
        </span>
      </div>

      {/* MOSTRAR PUBLICACIÓN SOLO SI COINCIDE CON LA BÚSQUEDA */}
      {publicationMatches ? (
        <div className="publication-detail">
          {/* TÍTULO */}
          <h1 className="publication-detail-title">
            {hasSearch ? highlightText(publication.title, searchTerm) : publication.title}
          </h1>

          {/* TIPO DE PUBLICACIÓN */}
          <div className="publication-detail-type">
            {hasSearch ? highlightText(publication.type, searchTerm) : publication.type}
          </div>

          {/* AUTORES */}
          <div className="publication-detail-authors">
            {hasSearch ? highlightText(publication.authors, searchTerm) : highlightAuthor(publication.authors)}
          </div>

          {/* REVISTA, VOLUMEN, AÑO, PÁGINAS - EN UNA LÍNEA */}
          <div className="publication-detail-journal">
            <span className="journal-name">
              {hasSearch ? highlightText(publication.journal, searchTerm) : publication.journal}
            </span>
            <span className="journal-meta">
              {hasSearch ? (
                <>
                  , vol. {highlightText(publication.volume, searchTerm)}, {highlightText(publication.year.toString(), searchTerm)}, pp. {highlightText(publication.pages, searchTerm)}
                </>
              ) : (
                `, vol. ${publication.volume}, ${publication.year}, pp. ${publication.pages}`
              )}
            </span>
          </div>

          {/* DOI */}
          <div className="publication-detail-doi">
            <span className="doi-label">DOI: </span>
            <a href={publication.url} target="_blank" rel="noopener noreferrer" className="doi-link">
              {hasSearch ? highlightText(publication.doi, searchTerm) : publication.doi}
            </a>
          </div>

          {/* VIEW PDF - MOVIDO DEBAJO DEL DOI */}
          <div className="publication-detail-pdf">
            <a 
              href={publication.pdf} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="view-pdf-btn"
            >
              View PDF →
            </a>
          </div>

          {/* ABSTRACT CON TÍTULO */}
          <div className="publication-detail-abstract-section">
            <h2 className="abstract-title">
              {hasSearch ? highlightText("Abstract", searchTerm) : "Abstract"}
            </h2>
            <p className="abstract-text">
              {hasSearch ? highlightText(publication.abstract, searchTerm) : publication.abstract}
            </p>
          </div>

          {/* ACCIONES */}
          <div className="publication-detail-actions">
            <button 
              onClick={handleGoToPublications}
              className="btn-secondary"
            >
              All publications
            </button>
          </div>
        </div>
      ) : (
        /* MENSAJE DE NO RESULTADOS */
        <div className="no-results">
          <i className="fas fa-search no-results-icon"></i>
          <p className="no-results-text">
            No matches found for "<strong>{searchTerm}</strong>"
          </p>
          <p className="no-results-hint">
            Try searching for a different term in this publication.
          </p>
        </div>
      )}
    </ProfileTemplate>
  );
};

export default PublicationDetail1;