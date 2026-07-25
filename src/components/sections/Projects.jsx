import React, { useState, useEffect } from "react";
import "./Proyects.css";
import { useNavigate } from "react-router-dom";
import ProfileTemplate from "../layout/ProfileTemplate";
import SearchFilter from "../sections/SearchFilter";
import { projects } from "../../data/projectsData";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  const getFilteredProjects = () => {
    const searchLower = searchTerm.toLowerCase().trim();
    if (!searchLower) return projects;
    
    return projects.filter((project) => {
      const searchableFields = [
        project.title,
        project.aim,
        project.duration,
        project.team.join(" "),
        project.role,
        project.overview,
        project.funding,
        project.status
      ].filter(Boolean);
      
      return searchableFields.some(field => 
        field.toLowerCase().includes(searchLower)
      );
    });
  };

  const filteredProjects = getFilteredProjects();
  const hasSearch = searchTerm.trim().length > 0;

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

  const getImagePath = (path) => {
    if (!path) return '';
    if (path.startsWith(import.meta.env.BASE_URL)) return path;
    if (path.startsWith('assets/')) return `${import.meta.env.BASE_URL}${path}`;
    if (path.startsWith('/')) return `${import.meta.env.BASE_URL}${path.substring(1)}`;
    return `${import.meta.env.BASE_URL}${path}`;
  };

  const getStatusBadge = (status) => {
    const handleBadgeClick = (e) => {
      e.stopPropagation();
    };

    if (status === "active") {
      return (
        <span 
          className="status-btn status-btn-active"
          onClick={handleBadgeClick}
        >
          ● Active
        </span>
      );
    } else {
      return (
        <span 
          className="status-btn status-btn-finalized"
          onClick={handleBadgeClick}
        >
          ● Finalized
        </span>
      );
    }
  };

  return (
    <ProfileTemplate title="Tomás I. Marina">
      <SearchFilter 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Search projects by title, aim, team, funding..."
        resultsCount={filteredProjects.length}
        resultsLabel={filteredProjects.length !== 1 ? 'projects' : 'project'}
      />

      <section id="projects" className="projects">
        <span className="section-tag">Research Projects</span>

        <div className="projects-list">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-item"
            >
              <div className="project-item-layout">
                {/* IMAGEN CLICKEABLE */}
                <div 
                  className="project-item-image"
                  onClick={() => handleProjectClick(project.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <img 
                    src={getImagePath(project.image)} 
                    alt={project.title}
                    className="project-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"%3E%3Crect width="300" height="200" fill="%23f0faf9"/%3E%3Ctext x="150" y="100" font-family="Arial" font-size="16" fill="%232ec4b6" text-anchor="middle" dominant-baseline="middle"%3EProject%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
                
                <div className="project-item-content">
                  <div className="project-header">
                    {/* TITULO CLICKEABLE */}
                    <h2 
                      className="project-title"
                      onClick={() => handleProjectClick(project.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      {hasSearch ? highlightText(project.title, searchTerm) : project.title}
                    </h2>
                  </div>
                  <div className="project-actions">
                    {/* BOTON VIEW PROJECT CLICKEABLE */}
                    <button 
                      onClick={() => handleProjectClick(project.id)}
                      className="view-project-btn"
                    >
                      View Project →
                    </button>
                    {/* BADGE DECORATIVO (NO CLICKEABLE) */}
                    {getStatusBadge(project.status)}
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