import React, { useState, useEffect } from "react";
import "./Publications.css";
import { Link } from "react-router-dom";
import ProfileTemplate from "../layout/ProfileTemplate";

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []); 
  
  // Array de publicaciones - Usando BASE_URL para rutas
  const publications = [
    {
      id: 1,
      title: "First evidence of correlated ecosystem service and food web robustness in a sub-Antarctic marine protected area",
      authors: "J. Mitchell Porter, Luciana Riccialdelli, Gustavo A. Lovrich & Tomás I. Marina",
      year: 2026,
      journal: "Ecological Applications",
      volume: "45(2)",
      pages: "123-145",
      doi: "10.1002/eap.70268",
      abstract: "In protected areas management, ecosystem services (ES) are increasingly considered alongside biodiversity conservation. Even so, the decisions made with respect to ecosystem service conservation rarely include the potential cascade effects of biodiversity loss on ecosystem service provisions. We performed a series of extinction simulations for eight ES integrated into a food web model for the Namuncurá-Burdwood Bank Marine Protected Areas I and II (N-BB MPA; ~54–56° S, ~56–62° W). For the first time in a marine ecosystem of this scale, we find that the robustness of the food web to species loss is highly correlated with ES's robustness to species loss. This study builds on recent efforts to deploy network theory for establishing conservation goals and presents a novel approach for applying network theory to ES maintenance. We determine that ecosystem service providers play little role in maintaining network stability, and that highly connected species and species which support ES indirectly should receive greater attention from conservation planners. While existing data are likely insufficient to determine the true robustness of individual services, we suggest that integrating ES into existing food webs, even without detailed quantitative data on service provision, can complement existing predictions of structural changes to food webs to identify vulnerable ES.",
      keywords: ["Ecosystem services", "Food web robustness", "Marine protected areas", "Network theory", "Sub-Antarctic", "Conservation planning"],
      url: "https://doi.org/10.1002/eap.70268",
      pdf: `${import.meta.env.BASE_URL}assets/publicacion1.pdf`,
      image: `${import.meta.env.BASE_URL}assets/Featured-pub-1.png`
    }
  ];

  // Función para filtrar publicaciones
  const getFilteredPublications = () => {
    const searchLower = searchTerm.toLowerCase().trim();
    
    // Si no hay término de búsqueda, devolver TODAS las publicaciones
    if (!searchLower) {
      return publications;
    }
    
    return publications.filter((pub) => {
      return (
        pub.title.toLowerCase().includes(searchLower) ||
        pub.authors.toLowerCase().includes(searchLower) ||
        pub.journal.toLowerCase().includes(searchLower) ||
        pub.year.toString().includes(searchLower) ||
        pub.keywords.some(keyword => keyword.toLowerCase().includes(searchLower)) ||
        pub.abstract.toLowerCase().includes(searchLower)
      );
    });
  };

  // Calcular publicaciones filtradas
  const filteredPublications = getFilteredPublications();

  // Determinar si hay una búsqueda activa
  const hasSearch = searchTerm.trim().length > 0;

  // Función para resaltar "Tomás I. Marina" en negrita
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

  // Obtener la primera publicación
  const firstPublication = filteredPublications.length > 0 ? filteredPublications[0] : null;

  return (
    <ProfileTemplate title="Tomás I. Marina">
      {/* BARRA DE BÚSQUEDA */}
      <div className="search-container">
        <div className="search-wrapper">
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            className="search-input"
            placeholder="Search publications by title, author, journal, year, or keyword..."
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
          {hasSearch ? `${filteredPublications.length} result${filteredPublications.length !== 1 ? 's' : ''}` : '0 results'}
        </span>
      </div>

      <section id="publications" className="publications">
        <span className="section-tag">Featured publications</span>

        <div className="publications-content">
          {/* Vista previa de la primera publicación (destacada) */}
          {firstPublication && (
            <div className="publication-preview featured">
              <div className="publication-preview-layout">
                <div className="publication-preview-image">
                  <img 
                    src={firstPublication.image} 
                    alt={firstPublication.title}
                    className="pub-featured-image"
                  />
                </div>
                <div className="publication-preview-content">
                  <Link 
                    to={`/publication-detail/${firstPublication.id}`}
                    className="titulo-publication"
                  >
                    {hasSearch ? highlightText(firstPublication.title, searchTerm) : firstPublication.title}
                  </Link>
                  <div className="publication-meta">
                    <p>
                      <span className="meta-label">Authors:</span> 
                      {hasSearch ? highlightText(firstPublication.authors, searchTerm) : highlightAuthor(firstPublication.authors)}
                    </p>
                    <p>
                      <span className="meta-label">Journal:</span> 
                      {hasSearch ? highlightText(firstPublication.journal, searchTerm) : firstPublication.journal}
                    </p>
                    <p>
                      <span className="meta-label">Year:</span> 
                      {hasSearch ? highlightText(firstPublication.year.toString(), searchTerm) : firstPublication.year}
                    </p>
                    <p>
                      <span className="meta-label">DOI:</span> 
                      <a href={firstPublication.url} target="_blank" rel="noopener noreferrer" className="doi-link">
                        {hasSearch ? highlightText(firstPublication.doi, searchTerm) : firstPublication.doi}
                      </a>
                    </p>
                  </div>
                  <p className="publication-abstract-preview">
                    {hasSearch ? highlightText(firstPublication.abstract.substring(0, 180), searchTerm) : firstPublication.abstract.substring(0, 180)}...
                  </p>
                  <div className="publication-actions">
                    <a 
                      href={firstPublication.pdf} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="view-pdf-btn"
                    >
                      View PDF →
                    </a>
                    <Link 
                      to={`/publication-detail/${firstPublication.id}`}
                      className="read-more-btn"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MENSAJE DE NO RESULTADOS (solo cuando hay búsqueda y no hay resultados) */}
          {hasSearch && filteredPublications.length === 0 && (
            <div className="no-results">
              <i className="fas fa-search no-results-icon"></i>
              <p className="no-results-text">
                No publications found matching "<strong>{searchTerm}</strong>"
              </p>
              <p className="no-results-hint">
                Try adjusting your search terms or browse all publications above.
              </p>
            </div>
          )}
        </div>
      </section>
    </ProfileTemplate>
  );
};

export default Publications;