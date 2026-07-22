import React, { useState, useEffect } from "react";
import "./Projects.css";
import { useNavigate } from "react-router-dom";
import ProfileTemplate from "../layout/ProfileTemplate";
import SearchFilter from "../sections/SearchFilter";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  // Array de proyectos
  const projects = [
    {
      id: 1,
      title: "GLACIER-WEB – Glacier retreat and changing food webs: a bipolar eDNA assessment in fjord ecosystems",
      image: `${import.meta.env.BASE_URL}assets/Proy 1.png`,
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
      funding: "POLARIN: Polar Research Infrastructure Network (HORIZON-Research infrastructures-101130949), European Union. https://eu-polarin.eu/"
    },
    {
      id: 2,
      title: "What are the effects of anthropogenic environmental changes on trophic interactions in marine communities along the Southwest Atlantic - Antarctica latitudinal gradient?",
      image: `${import.meta.env.BASE_URL}assets/Proy 2.png`,
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
      funding: "Consejo Nacional de Investigaciones Científicas y Técnicas (Resolución Nº RESOL-2022-1927-APN-DIR#CONICET), Argentina. PIP 0907."
    }
  ];

  // Función para filtrar proyectos
  const getFilteredProjects = () => {
    const searchLower = searchTerm.toLowerCase().trim();
    
    if (!searchLower) {
      return projects;
    }
    
    return projects.filter((project) => {
      const searchableFields = [
        project.title,
        project.aim,
        project.duration,
        project.team.join(" "),
        project.role,
        project.overview,
        project.funding
      ].filter(Boolean);
      
      return searchableFields.some(field => 
        field.toLowerCase().includes(searchLower)
      );
    });
  };

  const filteredProjects = getFilteredProjects();
  const hasSearch = searchTerm.trim().length > 0;

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

  const handleProjectClick = (id) => {
    try {
      navigate(`/project-detail/${id}`);
    } catch (error) {
      console.error("Error con navigate, usando fallback:", error);
      window.location.href = `/project-detail/${id}`;
    }
  };

  return (
    <ProfileTemplate title="Tomás I. Marina">
      {/* FILTRO DE BÚSQUEDA */}
      <SearchFilter 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Search projects by title, aim, team, funding..."
        resultsCount={filteredProjects.length}
        resultsLabel={filteredProjects.length !== 1 ? 'projects' : 'project'}
      />

      <section id="projects" className="projects">
        <span className="section-tag">Research Projects</span>

        <div className="projects-content">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-preview ${index === 0 ? 'featured' : ''}`}
              onClick={() => handleProjectClick(project.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="project-preview-layout">
                <div className="project-preview-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-featured-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"%3E%3Crect width="300" height="300" fill="%23f0faf9"/%3E%3Ctext x="150" y="150" font-family="Arial" font-size="16" fill="%232ec4b6" text-anchor="middle" dominant-baseline="middle"%3EProject%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
                <div className="project-preview-content">
                  <h2 className="titulo-project">
                    {hasSearch ? highlightText(project.title, searchTerm) : project.title}
                  </h2>
                  
                  <div className="project-actions">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(project.id);
                      }}
                      className="view-project-btn"
                    >
                      View Project →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasSearch && filteredProjects.length === 0 && (
          <div className="no-results">
            <i className="fas fa-search no-results-icon"></i>
            <p className="no-results-text">
              No projects found matching "<strong>{searchTerm}</strong>"
            </p>
            <p className="no-results-hint">
              Try adjusting your search terms or browse all projects above.
            </p>
          </div>
        )}
      </section>
    </ProfileTemplate>
  );
};

export default Projects;