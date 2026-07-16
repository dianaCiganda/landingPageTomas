import React, { useState, useEffect } from "react";
import "./Publications.css";
import { Link, useNavigate } from "react-router-dom";
import ProfileTemplate from "../layout/ProfileTemplate";

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []); 
  
  // Array de publicaciones - Sin keywords
  const publications = [
    {
      id: 1,
      title: "First evidence of correlated ecosystem service and food web robustness in a sub-Antarctic marine protected area",
      authors: "J. Mitchell Porter, Luciana Riccialdelli, Gustavo A. Lovrich & Tomás I. Marina",
      year: 2026,
      journal: "Ecological Applications",
      doi: "10.1002/eap.70268",
      url: "https://doi.org/10.1002/eap.70268",
      pdf: `${import.meta.env.BASE_URL}assets/Featured-pub-1.pdf`,
      image: `${import.meta.env.BASE_URL}assets/Featured-pub-1.png`
    },
    {
      id: 2,
      title: "Disentangling the structure of an Antarctic plankton food web in bloom and non-bloom conditions",
      authors: "Sarah L. Mayr, Irene R. Schloss, Maximiliano D. García, Gastón O. Almandoz, Julieta S. Antoni & Tomás I. Marina",
      year: 2026,
      journal: "Frontiers in Marine Science",
      doi: "10.3389/fmars.2026.1868956",
      url: "https://doi.org/10.3389/fmars.2026.1868956",
      pdf: `${import.meta.env.BASE_URL}assets/Featured-pub-2.pdf`,
      image: `${import.meta.env.BASE_URL}assets/Featured-pub-2.png`
    },
    {
      id: 3,
      title: "The response of trophic interaction networks to multiple stressors along a large-scale latitudinal range in the Southern Hemisphere",
      authors: "Tomás I. Marina, Leonardo A. Saravia, Iara D. Rodriguez, Manuela Funes, Georgina Cordone, Santiago R. Doyle, Anahí Silvestro, David E. Galván, Susanne Kortsch & Fernando R. Momo",
      year: 2024,
      journal: "Environmental Reviews",
      doi: "10.1139/er-2024-0012",
      url: "https://doi.org/10.1139/er-2024-0012",
      pdf: `${import.meta.env.BASE_URL}assets/Featured-pub-3.pdf`,
      image: `${import.meta.env.BASE_URL}assets/Featured-pub-3.png`
    }
  ];

  // Función para filtrar publicaciones
  const getFilteredPublications = () => {
    const searchLower = searchTerm.toLowerCase().trim();
    
    if (!searchLower) {
      return publications;
    }
    
    return publications.filter((pub) => {
      return (
        pub.title.toLowerCase().includes(searchLower) ||
        pub.authors.toLowerCase().includes(searchLower) ||
        pub.journal.toLowerCase().includes(searchLower) ||
        pub.year.toString().includes(searchLower) ||
        pub.doi.toLowerCase().includes(searchLower)
      );
    });
  };

  const filteredPublications = getFilteredPublications();
  const hasSearch = searchTerm.trim().length > 0;

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

  // Función para manejar el clic en "Read more"
  const handleReadMore = (id) => {
    console.log("Navegando a publicación con ID:", id);
    try {
      navigate(`/publication-detail/${id}`);
    } catch (error) {
      console.error("Error con navigate, usando fallback:", error);
      window.location.href = `/publication-detail/${id}`;
    }
  };

  const allPublications = filteredPublications;

  return (
    <ProfileTemplate title="Tomás I. Marina">
      {/* BARRA DE BÚSQUEDA */}
      <div className="search-container">
        <div className="search-wrapper">
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            className="search-input"
            placeholder="Search publications by title, author, journal, year..."
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
          {hasSearch ? `${filteredPublications.length} result${filteredPublications.length !== 1 ? 's' : ''}` : `${publications.length} results`}
        </span>
      </div>

      <section id="publications" className="publications">
        <span className="section-tag">Featured publications</span>

        <div className="publications-content">
          {allPublications.map((publication, index) => (
            <div 
              key={publication.id} 
              className={`publication-preview ${index === 0 ? 'featured' : ''}`}
              style={index > 0 ? { marginTop: '30px' } : {}}
            >
              <div className="publication-preview-layout">
                <div className="publication-preview-image">
                  <img 
                    src={publication.image} 
                    alt={publication.title}
                    className="pub-featured-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"%3E%3Crect width="300" height="300" fill="%23f0faf9"/%3E%3Ctext x="150" y="150" font-family="Arial" font-size="16" fill="%232ec4b6" text-anchor="middle" dominant-baseline="middle"%3EPublication%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
                <div className="publication-preview-content">
                  {/* TÍTULO CLICKEABLE */}
                  <h2 
                    className="titulo-publication"
                    style={{ 
                      cursor: 'pointer',
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: '#1a2a3a',
                      marginBottom: '16px',
                      lineHeight: '1.3',
                      transition: 'color 0.3s ease'
                    }}
                    onClick={() => handleReadMore(publication.id)}
                    onMouseEnter={(e) => e.target.style.color = '#0d6b61'}
                    onMouseLeave={(e) => e.target.style.color = '#1a2a3a'}
                  >
                    {hasSearch ? highlightText(publication.title, searchTerm) : publication.title}
                  </h2>
                  
                  <div className="publication-meta">
                    <p>
                      <span className="meta-label">Authors:</span> 
                      {hasSearch ? highlightText(publication.authors, searchTerm) : highlightAuthor(publication.authors)}
                    </p>
                    <p>
                      <span className="meta-label">Journal:</span> 
                      {hasSearch ? highlightText(publication.journal, searchTerm) : publication.journal}
                    </p>
                    <p>
                      <span className="meta-label">Year:</span> 
                      {hasSearch ? highlightText(publication.year.toString(), searchTerm) : publication.year}
                    </p>
                    <p>
                      <span className="meta-label">DOI:</span> 
                      <a href={publication.url} target="_blank" rel="noopener noreferrer" className="doi-link">
                        {hasSearch ? highlightText(publication.doi, searchTerm) : publication.doi}
                      </a>
                    </p>
                  </div>
                  
                  <div className="publication-actions">
                    <a 
                      href={publication.pdf} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="view-pdf-btn"
                    >
                      View PDF →
                    </a>
                    <button 
                      onClick={() => handleReadMore(publication.id)}
                      className="read-more-btn"
                    >
                      Read more →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

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