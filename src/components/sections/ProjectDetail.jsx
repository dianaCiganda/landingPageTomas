import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProfileTemplate from "../layout/ProfileTemplate";
import SearchFilter from "../sections/SearchFilter";
import { projects } from "../../data/projectsData";
import { publications } from "../../data/publicationsData";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [location.pathname]);

  // Obtener el ID de la URL
  const pathParts = location.pathname.split('/');
  const id = parseInt(pathParts[pathParts.length - 1]);
  
  // Buscar el proyecto en los datos
  const project = projects.find(p => p.id === id);

  // Función para obtener publicaciones relacionadas
  const getRelatedPublications = (projectId) => {
    if (!projectId) return [];
    return publications.filter(pub => 
      pub.projectIds && pub.projectIds.includes(projectId)
    );
  };

  // Si no se encuentra el proyecto, mostrar mensaje
  if (!project) {
    return (
      <ProfileTemplate title="Tomás I. Marina">
        <div className="project-detail">
          <h1>Project not found</h1>
          <button onClick={() => navigate('/projects')} className="btn-secondary">
            Back to Projects
          </button>
        </div>
      </ProfileTemplate>
    );
  }

  // Obtener publicaciones relacionadas
  const relatedPublications = getRelatedPublications(project.id);

  // Función para convertir URLs en enlaces clickeables (SIN SUBRAYADO)
  const renderTextWithLinks = (text) => {
    if (!text) return text;
    
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    
    return parts.map((part, index) => {
      if (part && part.match(urlRegex)) {
        return (
          <a 
            key={index}
            href={part} 
            target="_blank" 
            rel="noopener noreferrer"
            className="funding-link"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  // Función para formatear el overview con items A, B, C, D
  const renderOverview = (text) => {
    if (!text) return text;
    
    const lines = text.split('\n');
    let letterIndex = 0;
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    
    const formattedLines = lines.map(line => {
      if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
        const letter = letters[letterIndex] || String.fromCharCode(65 + letterIndex);
        letterIndex++;
        const cleanLine = line.replace(/^[\s]*[•-][\s]*/, '');
        return `${letter}. ${cleanLine}`;
      }
      return line;
    });
    
    return formattedLines.join('\n');
  };

  // Función para resaltar texto en la búsqueda
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

  // Verificar si el proyecto coincide con la búsqueda
  const projectMatches = hasSearch ? (
    matchesSearch(project.title, searchTerm) ||
    matchesSearch(project.aim, searchTerm) ||
    matchesSearch(project.duration, searchTerm) ||
    matchesSearch(project.team.join(" "), searchTerm) ||
    matchesSearch(project.role, searchTerm) ||
    matchesSearch(project.overview, searchTerm) ||
    matchesSearch(project.funding, searchTerm)
  ) : true;

  // Contar resultados encontrados
  const getMatchCount = () => {
    if (!hasSearch) return 0;
    let count = 0;
    if (matchesSearch(project.title, searchTerm)) count++;
    if (matchesSearch(project.aim, searchTerm)) count++;
    if (matchesSearch(project.duration, searchTerm)) count++;
    if (matchesSearch(project.team.join(" "), searchTerm)) count++;
    if (matchesSearch(project.role, searchTerm)) count++;
    if (matchesSearch(project.overview, searchTerm)) count++;
    if (matchesSearch(project.funding, searchTerm)) count++;
    // Contar también en publicaciones relacionadas
    relatedPublications.forEach(pub => {
      if (matchesSearch(pub.title, searchTerm)) count++;
      if (matchesSearch(pub.authors, searchTerm)) count++;
      if (matchesSearch(pub.journal, searchTerm)) count++;
      if (matchesSearch(pub.year.toString(), searchTerm)) count++;
      if (matchesSearch(pub.doi, searchTerm)) count++;
    });
    return count;
  };

  const matchCount = getMatchCount();

  // Función para resaltar "Tomás I. Marina"
  const highlightAuthor = (text) => {
    const nameToHighlight = "Tomás I. Marina";
    if (!text) return text;
    
    const parts = text.split(nameToHighlight);
    
    if (parts.length === 1) {
      return <span>{text}</span>;
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

  // Función para manejar el click en "All projects"
  const handleGoToProjects = (e) => {
    e.preventDefault();
    navigate('/projects');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  // Función para manejar el click en publicación relacionada
  const handlePublicationClick = (e, id) => {
    e.preventDefault();
    navigate(`/publication-detail/${id}`);
  };

  // Función para obtener la ruta correcta de la imagen
  const getImagePath = (path) => {
    if (!path) return '';
    if (path.startsWith(import.meta.env.BASE_URL)) {
      return path;
    }
    if (path.startsWith('assets/')) {
      return `${import.meta.env.BASE_URL}${path}`;
    }
    if (path.startsWith('/')) {
      return `${import.meta.env.BASE_URL}${path.substring(1)}`;
    }
    return `${import.meta.env.BASE_URL}${path}`;
  };

  // Función para renderizar texto con enlaces (para overview y funding)
  const renderTextWithLinksAndHighlight = (text, searchTerm, hasSearch) => {
    if (!text) return text;
    
    // Primero aplicar renderTextWithLinks para convertir URLs en enlaces
    const withLinks = renderTextWithLinks(text);
    
    // Luego aplicar highlight si hay búsqueda
    if (hasSearch) {
      return highlightText(withLinks, searchTerm);
    }
    
    return withLinks;
  };

  return (
    <ProfileTemplate title="Tomás I. Marina">
      {/* FILTRO DE BÚSQUEDA */}
      <SearchFilter 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Search in this project..."
        resultsCount={matchCount}
        resultsLabel={matchCount !== 1 ? 'matches' : 'match'}
      />

      {/* MOSTRAR PROYECTO SOLO SI COINCIDE CON LA BÚSQUEDA */}
      {projectMatches ? (
        <div className="project-detail">
          {/* TÍTULO */}
          <h1 className="project-detail-title">
            {hasSearch ? highlightText(project.title, searchTerm) : project.title}
          </h1>

          {/* IMAGEN DEL PROYECTO */}
          <div className="project-detail-image-wrapper">
            <img 
              src={getImagePath(project.image)} 
              alt={project.title}
              className="project-detail-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"%3E%3Crect width="600" height="400" fill="%23f0faf9"/%3E%3Ctext x="300" y="200" font-family="Arial" font-size="24" fill="%232ec4b6" text-anchor="middle" dominant-baseline="middle"%3EProject%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>

          {/* AIM */}
          <div className="project-detail-section">
            <h2 className="section-subtitle">Aim</h2>
            <p className="project-detail-text">
              {hasSearch ? highlightText(project.aim, searchTerm) : project.aim}
            </p>
          </div>

          {/* DURATION */}
          <div className="project-detail-section">
            <h2 className="section-subtitle">Duration</h2>
            <p className="project-detail-text">
              {hasSearch ? highlightText(project.duration, searchTerm) : project.duration}
            </p>
          </div>

          {/* TEAM */}
          <div className="project-detail-section">
            <h2 className="section-subtitle">Team</h2>
            <ul className="project-detail-list">
              {project.team.map((member, index) => (
                <li key={index} className="project-detail-list-item">
                  {hasSearch ? highlightText(member, searchTerm) : highlightAuthor(member)}
                </li>
              ))}
            </ul>
          </div>

          {/* ROLE */}
          <div className="project-detail-section">
            <h2 className="section-subtitle">Role</h2>
            <p className="project-detail-text">
              {hasSearch ? highlightText(project.role, searchTerm) : project.role}
            </p>
          </div>

          {/* OVERVIEW - CON ENLACES CLICKEABLES */}
          <div className="project-detail-section">
            <h2 className="section-subtitle">Overview</h2>
            <p className="project-detail-text project-overview">
              {hasSearch 
                ? renderTextWithLinksAndHighlight(renderOverview(project.overview), searchTerm, hasSearch)
                : renderTextWithLinks(renderOverview(project.overview))
              }
            </p>
          </div>

          {/* FUNDING - CON ENLACES CLICKEABLES */}
          <div className="project-detail-section">
            <h2 className="section-subtitle">Funding</h2>
            <p className="project-detail-text">
              {hasSearch 
                ? renderTextWithLinksAndHighlight(project.funding, searchTerm, hasSearch)
                : renderTextWithLinks(project.funding)
              }
            </p>
          </div>

          {/* RELATED PUBLICATIONS */}
          {relatedPublications.length > 0 ? (
            <div className="project-detail-section related-publications-section">
              <h2 className="section-subtitle">Related Publications</h2>
              <div className="related-publications-grid">
                {relatedPublications.map((pub) => {
                  // Verificar si la publicación coincide con la búsqueda
                  const pubMatches = hasSearch ? (
                    matchesSearch(pub.title, searchTerm) ||
                    matchesSearch(pub.authors, searchTerm) ||
                    matchesSearch(pub.journal, searchTerm) ||
                    matchesSearch(pub.year.toString(), searchTerm) ||
                    matchesSearch(pub.doi, searchTerm)
                  ) : true;

                  // Si no coincide, no mostrar
                  if (!pubMatches) return null;

                  return (
                    <div 
                      key={pub.id}
                      className="related-publication-card-clickable"
                      onClick={(e) => handlePublicationClick(e, pub.id)}
                    >
                      <div className="related-publication-image-wrapper">
                        <img 
                          src={getImagePath(pub.image)} 
                          alt={pub.title}
                          className="related-publication-image"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"%3E%3Crect width="300" height="200" fill="%23f0faf9"/%3E%3Ctext x="150" y="100" font-family="Arial" font-size="16" fill="%232ec4b6" text-anchor="middle" dominant-baseline="middle"%3EPublication%3C/text%3E%3C/svg%3E';
                          }}
                        />
                      </div>
                      <div className="related-publication-content">
                        <h3 className="related-publication-title">
                          {hasSearch ? highlightText(pub.title, searchTerm) : pub.title}
                        </h3>
                        <p className="related-publication-authors">
                          {hasSearch ? highlightText(pub.authors, searchTerm) : pub.authors}
                        </p>
                        <p className="related-publication-meta">
                          {hasSearch ? (
                            <>
                              {highlightText(pub.journal, searchTerm)}, {highlightText(pub.year.toString(), searchTerm)}
                            </>
                          ) : (
                            `${pub.journal}, ${pub.year}`
                          )}
                        </p>
                        <p className="related-publication-doi">
                          DOI: {hasSearch ? highlightText(pub.doi, searchTerm) : pub.doi}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="project-detail-section related-publications-section">
              <h2 className="section-subtitle">Related Publications</h2>
              <div className="coming-soon-card">
                <div className="coming-soon-image-placeholder">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="coming-soon-content">
                  <h3 className="coming-soon-title">Coming soon…</h3>
                  <p className="coming-soon-text">Publications related to this project will appear here.</p>
                </div>
              </div>
            </div>
          )}

          {/* ACCIONES */}
          <div className="project-detail-actions">
            <button 
              onClick={handleGoToProjects}
              className="btn-secondary"
            >
              All projects
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
            Try searching for a different term in this project.
          </p>
        </div>
      )}
    </ProfileTemplate>
  );
};

export default ProjectDetail;