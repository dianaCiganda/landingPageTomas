import React from 'react'
import './Projects.css'

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      year: '2022-2026',
      title: 'Effects of multiple stressors on marine ecosystems',
      agency: 'CONICET - Argentina',
      description: 'Investigating the cumulative impacts of climate change and fishing on high-latitude marine food webs.',
    },
    {
      id: 2,
      year: '2020-2024',
      title: 'Network analysis of Antarctic marine ecosystems',
      agency: 'PICT - ANPCyT',
      description: 'Using complex network theory to understand ecosystem resilience in the Southern Ocean.',
    },
    {
      id: 3,
      year: '2018-2022',
      title: 'Trophic dynamics in the Beagle Channel',
      agency: 'CADIC-CONICET',
      description: 'Studying food web structure and energy flow in sub-Antarctic coastal ecosystems.',
    },
  ]

  return (
    <section id="projects" className="projects section-padding section-white">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Projects</span>
          <h2>Current & Recent <span className="highlight">Projects</span></h2>
          <p>Research projects I'm currently leading or participating in</p>
        </div>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <span className="project-year">{project.year}</span>
              <h3>{project.title}</h3>
              <p className="project-agency">{project.agency}</p>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
