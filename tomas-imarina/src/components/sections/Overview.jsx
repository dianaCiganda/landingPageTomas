import React from 'react'
import './Overview.css'

const Overview = () => {
  const overviewData = [
    {
      id: 1,
      icon: '🌊',
      title: 'Marine Ecology',
      description: 'Understanding species interactions and ecosystem dynamics in high-latitude environments.',
    },
    {
      id: 2,
      icon: '🕸️',
      title: 'Food Web Modeling',
      description: 'Quantifying energy flow and trophic interactions in marine communities.',
    },
    {
      id: 3,
      icon: '📊',
      title: 'Network Analysis',
      description: 'Applying graph theory and complex networks to ecological systems.',
    },
    {
      id: 4,
      icon: '🌍',
      title: 'Climate Change',
      description: 'Assessing the impact of global warming on marine biodiversity and ecosystem function.',
    },
    {
      id: 5,
      icon: '🐟',
      title: 'Fisheries Management',
      description: 'Using ecosystem-based approaches for sustainable fisheries management.',
    },
    {
      id: 6,
      icon: '🧬',
      title: 'Population Genetics',
      description: 'Studying genetic diversity and connectivity in marine populations.',
    },
  ]

  return (
    <section id="overview" className="overview section-padding section-light">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Overview</span>
          <h2>Research <span className="highlight">Areas</span></h2>
          <p>Key topics and approaches in my research</p>
        </div>
        <div className="overview-grid">
          {overviewData.map((item) => (
            <div key={item.id} className="overview-card">
              <span className="overview-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Overview
