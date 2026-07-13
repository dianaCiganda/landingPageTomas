import React from 'react'
import './Supervision.css'

const Supervision = () => {
  const supervisionData = [
    {
      id: 1,
      level: 'PhD',
      title: 'Climate change and marine food webs in Tierra del Fuego',
      description: 'Investigating the effects of warming on ecosystem structure and function.',
      status: 'In progress (2023-2027)',
    },
    {
      id: 2,
      level: 'MSc',
      title: 'Network analysis of benthic communities in the Beagle Channel',
      description: 'Applying network metrics to understand community assembly patterns.',
      status: 'In progress (2024-2026)',
    },
    {
      id: 3,
      level: 'PhD',
      title: 'Trophic ecology of top predators in the South Atlantic',
      description: 'Using stable isotopes and network analysis to study predator-prey relationships.',
      status: 'Completed (2023)',
    },
    {
      id: 4,
      level: 'MSc',
      title: 'Carbon flux in sub-Antarctic fjord ecosystems',
      description: 'Quantifying organic matter dynamics and carbon sequestration in coastal ecosystems.',
      status: 'Completed (2022)',
    },
  ]

  return (
    <section id="supervision" className="supervision section-padding section-white">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Supervision</span>
          <h2>Student <span className="highlight">Supervision</span></h2>
          <p>Current and completed student projects</p>
        </div>
        <div className="supervision-grid">
          {supervisionData.map((project) => (
            <div key={project.id} className="supervision-card">
              <span className="supervision-level">{project.level}</span>
              <h3>{project.title}</h3>
              <p className="supervision-desc">{project.description}</p>
              <p className="supervision-status">{project.status}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Supervision
