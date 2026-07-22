import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProfileTemplate from "../layout/ProfileTemplate";
import SearchFilter from "../sections/SearchFilter";
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

  // Función para convertir URLs en enlaces clickeables
  const renderTextWithLinks = (text) => {
    if (!text) return text;
    
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    
    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
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

  // Datos de proyectos
  const getProjectById = (id) => {
    const projects = {
      1: {
        id: 1,
        title: "GLACIER-WEB – Glacier retreat and changing food webs: a bipolar eDNA assessment in fjord ecosystems",
        aim: "Study ecosystem responses to glacier retreat in Antarctic and Arctic marine fjord ecosystems by applying a spatially explicit, high-resolution, multi-trophic and multi-habitat approach.",
        duration: "01.2026 - 12.2029",
        team: [
          "Iara D. Rodríguez (Principal Investigator; University of Helsinki, Finland)",
          "Tomás I. Marina (Core Member; CADIC-CONICET, Argentina)",
          "Charlotte Havermans (Core Member; University of Bremen, Germany)",
          "Ulrike Braeckman (Core Member; Ghent University, Belgium)"
        ],
        role: "Core Member of Core Team",
        overview: "Polar regions are experiencing unprecedented climate warming, driving accelerated glacier retreat and increased freshwater, sediment, and nutrient discharge into coastal fjords. These changes are shaping marine biodiversity and ecosystem functioning, yet their effects on the structure and stability of polar coastal food webs remain poorly understood. The GLACIER-WEB project aims to bridge this gap by integrating environmental DNA (eDNA) metabarcoding and food web reconstruction to quantify biodiversity and trophic interactions along glacier influence gradients in two key polar fjords: Potter Cove (Antarctica) and Kongsfjorden (Arctic). This will provide the first bipolar, spatially explicit, multi-trophic, and multi-habitat assessment of ecosystem responses to glacier retreat. Using eDNA-derived biodiversity data combined with literature-based trophic information, GLACIER-WEB will build and analyse food webs to evaluate network structure, stability, and species' functional roles across gradients of glacial influence. Comparative analyses between the Arctic and Antarctic sites will reveal common and contrasting patterns in ecosystem response to glacier retreat. The project will deliver an unprecedented, high-resolution dataset on polar biodiversity and food web organization, offering an empirical foundation for long-term ecological monitoring, predictive modelling, and conservation strategies in rapidly changing polar environments.",
        funding: "POLARIN: Polar Research Infrastructure Network (HORIZON-Research infrastructures-101130949), European Union. https://eu-polarin.eu/",
        image: `${import.meta.env.BASE_URL}assets/Proy 1.png`,
        relatedPublications: [
          {
            id: null,
            title: "Coming soon…",
            link: "#",
            isComingSoon: true
          }
        ]
      },
      2: {
        id: 2,
        title: "What are the effects of anthropogenic environmental changes on trophic interactions in marine communities along the Southwest Atlantic - Antarctica latitudinal gradient?",
        aim: "Study the effects of anthropogenic environmental changes, specifically temperature increases and overfishing, on trophic interactions within communities across marine ecosystems along the Southwestern Atlantic–Antarctica latitudinal gradient.",
        duration: "01.2023 - 10.2026",
        team: [
          "Tomás I. Marina (Principal Investigator; CADIC-CONICET, Argentina)",
          "Leonardo A. Saravia (co-Principal Investigator; CADIC-CONICET, Argentina)",
          "Iara D. Rodríguez (CADIC-CONICET, Argentina)",
          "Georgina Cordone",
          "David E. Galván (CESIMAR-CONICET, Argentina)",
          "Manuela Funes (Centro Oceanográfico de Baleares-IEO, Spain)",
          "Santiago R. Doyle",
          "Fernando R. Momo (UNGS, Argentina)",
          "Susanne Kortsch (University of Helsinki, Finland)"
        ],
        role: "Principal Investigator",
        overview: "The effects of anthropogenic environmental changes on marine ecosystem communities have been and continue to be the subject of various lines of research. In recent years, the importance of considering trophic interactions to better understand the effects of such changes on marine ecosystems has become evident.\n\nThe overall objective of the work plan proposed here is to study the effects of anthropogenic environmental changes, specifically temperature increases and overfishing, on trophic interactions within communities across marine ecosystems along the Southwestern Atlantic–Antarctica latitudinal gradient: San Jorge Gulf, Namuncurá MPA–Burdwood Bank, Beagle Channel, and Potter Cove (Antarctica). A complex network approach will be used to incorporate the majority of the ecosystem's species and the predator–prey relationships occurring among them.\n\nThe proposed research tasks support the development of the following lines of study:\n• Characterizing the complexity, structure, and stability of food webs considering the highest possible taxonomic resolution for the species;\n• Simulating realistic environmental (temperature increase) and anthropogenic (overfishing) change scenarios for each study area;\n• Analyzing the effect of these changes on the structure and stability of food webs; and\n• Studying how potential regime shifts caused by anthropogenic environmental changes in a specific study area may influence other areas along the chosen latitudinal gradient.\n\nThe working group consists of national and international researchers alongside graduate students who have been actively collaborating to study the trophic ecology of high-latitude marine ecosystems through a complex systems framework. The project members' host institutions are dedicated to research related to the Argentine Sea: CADIC-CONICET, CESIMAR-CONICET, and INIDEP.\n\nThe project's findings will generate baseline knowledge on the complexity, structure, and stability of food webs across several priority geographical areas of the Argentine Sea and the Antarctic Peninsula. Ultimately, this work aims to highlight the importance of accounting for the intricate web of trophic interactions in marine communities to capture emergent ecosystem phenomena driven by anthropogenic environmental changes.",
        funding: "Consejo Nacional de Investigaciones Científicas y Técnicas (Resolución Nº RESOL-2022-1927-APN-DIR#CONICET), Argentina. PIP 0907.",
        image: `${import.meta.env.BASE_URL}assets/Proy 2.png`,
        relatedPublications: [
          {
            id: 3,
            title: "The response of trophic interaction networks to multiple stressors along a large-scale latitudinal range in the Southern Hemisphere",
            link: "/publication-detail/3",
            isComingSoon: false,
            image: `${import.meta.env.BASE_URL}assets/Featured-pub-3.png`,
            authors: "Tomás I. Marina, Leonardo A. Saravia, Iara D. Rodriguez, Manuela Funes, Georgina Cordone, Santiago R. Doyle, Anahí Silvestro, David E. Galván, Susanne Kortsch & Fernando R. Momo",
            journal: "Environmental Reviews",
            year: 2024,
            doi: "10.1139/er-2024-0012"
          }
        ]
      }
    };
    return projects[id] || projects[1];
  };

  // Obtener el ID de la URL
  const pathParts = location.pathname.split('/');
  const id = parseInt(pathParts[pathParts.length - 1]);
  const project = getProjectById(id);

  // Verificar si hay búsqueda
  const hasSearch = searchTerm.trim().length > 0;

  // Verificar si la publicación coincide con la búsqueda
  const publicationMatches = hasSearch ? (
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
    if (project.relatedPublications) {
      project.relatedPublications.forEach(pub => {
        if (!pub.isComingSoon) {
          if (matchesSearch(pub.title, searchTerm)) count++;
          if (matchesSearch(pub.authors, searchTerm)) count++;
          if (matchesSearch(pub.journal, searchTerm)) count++;
          if (matchesSearch(pub.year.toString(), searchTerm)) count++;
          if (matchesSearch(pub.doi, searchTerm)) count++;
        }
      });
    }
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
  const handlePublicationClick = (e, link) => {
    e.preventDefault();
    navigate(link);
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
      {publicationMatches ? (
        <div className="project-detail">
          {/* TÍTULO */}
          <h1 className="project-detail-title">
            {hasSearch ? highlightText(project.title, searchTerm) : project.title}
          </h1>

          {/* IMAGEN DEL PROYECTO */}
          <div className="project-detail-image-wrapper">
            <img 
              src={project.image} 
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

          {/* OVERVIEW - CON ITEMS FORMATEADOS A, B, C, D */}
          <div className="project-detail-section">
            <h2 className="section-subtitle">Overview</h2>
            <p className="project-detail-text project-overview">
              {hasSearch ? highlightText(renderOverview(project.overview), searchTerm) : renderOverview(project.overview)}
            </p>
          </div>

          {/* FUNDING - CON ENLACES CLICKEABLES */}
          <div className="project-detail-section">
            <h2 className="section-subtitle">Funding</h2>
            <p className="project-detail-text">
              {hasSearch ? highlightText(project.funding, searchTerm) : renderTextWithLinks(project.funding)}
            </p>
          </div>

          {/* RELATED PUBLICATIONS - Vista previa estilo Publications */}
          {project.relatedPublications && project.relatedPublications.length > 0 && (
            <div className="project-detail-section related-publications-section">
              <h2 className="section-subtitle">Related Publications</h2>
              <div className="related-publications-grid">
                {project.relatedPublications.map((pub, index) => {
                  // Verificar si la publicación coincide con la búsqueda
                  const pubMatches = hasSearch ? (
                    matchesSearch(pub.title, searchTerm) ||
                    (pub.isComingSoon ? false : (
                      matchesSearch(pub.authors, searchTerm) ||
                      matchesSearch(pub.journal, searchTerm) ||
                      matchesSearch(pub.year.toString(), searchTerm) ||
                      matchesSearch(pub.doi, searchTerm)
                    ))
                  ) : true;

                  // Si no coincide, no mostrar
                  if (!pubMatches) return null;

                  return (
                    <div key={index} className="related-publication-card">
                      {pub.isComingSoon ? (
                        <div className="coming-soon-card">
                          <div className="coming-soon-image-placeholder">
                            <i className="fas fa-clock"></i>
                          </div>
                          <div className="coming-soon-content">
                            <h3 className="coming-soon-title">
                              {hasSearch ? highlightText(pub.title, searchTerm) : pub.title}
                            </h3>
                            <p className="coming-soon-text">Coming soon…</p>
                          </div>
                        </div>
                      ) : (
                        <div 
                          className="related-publication-card-clickable"
                          onClick={(e) => handlePublicationClick(e, pub.link)}
                        >
                          <div className="related-publication-image-wrapper">
                            <img 
                              src={pub.image} 
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
                      )}
                    </div>
                  );
                })}
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