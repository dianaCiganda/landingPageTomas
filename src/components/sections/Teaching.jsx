import React from 'react'
import './Teaching.css'

const Teaching = () => {
  const teachingData = [
    {
      id: 1,
      icon: '🎓',
      institution: 'Universidad de Buenos Aires',
      title: 'Advanced Food Web Modeling',
      description: 'Postgraduate course on quantitative approaches to understanding trophic interactions in marine ecosystems.',
      level: 'Postgraduate',
    },
    {
      id: 2,
      icon: '📚',
      institution: 'CADIC-CONICET',
      title: 'Network Analysis for Ecologists',
      description: 'Workshop on applying network theory to ecological research questions.',
      level: 'Workshop',
    },
    {
      id: 3,
      icon: '🔬',
      institution: 'Universidad Nacional de Tierra del Fuego',
      title: 'Marine Ecology and Conservation',
      description: 'Undergraduate course covering marine ecosystem structure, function, and conservation strategies.',
      level: 'Undergraduate',
    },
    {
      id: 4,
      icon: '🌐',
      institution: 'CINVESTAV-IPN, Mexico',
      title: 'Biological Oceanography',
      description: 'Graduate course on physical-biological interactions in marine systems.',
      level: 'Graduate',
    },
  ]

  return (
    <section id="teaching" className="teaching section-padding section-light">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Teaching</span>
          <h2>Courses & <span className="highlight">Workshops</span></h2>
          <p>Postgraduate courses and teaching activities</p>
        </div>
        <div className="teaching-grid">
          {teachingData.map((course) => (
            <div key={course.id} className="teaching-card">
              <span className="teaching-icon">{course.icon}</span>
              <h3>{course.institution}</h3>
              <p className="teaching-title">{course.title}</p>
              <p className="teaching-desc">{course.description}</p>
              <span className="teaching-level">{course.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Teaching
