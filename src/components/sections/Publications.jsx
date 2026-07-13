import React from 'react'
import './Publications.css'

const Publications = () => {
  const publicationsData = [
    {
      id: 1,
      year: '2024',
      title: 'Network-based approaches for understanding marine ecosystem dynamics',
      authors: 'Marina TI, Smith J, Jones M, Wilson P',
      journal: 'Marine Ecology Progress Series, 712: 1-18',
      link: '#',
      tags: ['Network theory', 'Marine ecology', 'Ecosystem dynamics'],
    },
    {
      id: 2,
      year: '2023',
      title: 'Climate change impacts on Southern Ocean food webs',
      authors: 'Marina TI, Brown A, Wilson P, Taylor R',
      journal: 'Global Change Biology, 29(8): 2145-2162',
      link: '#',
      tags: ['Climate change', 'Southern Ocean', 'Food webs'],
    },
    {
      id: 3,
      year: '2022',
      title: 'Trophic interactions in sub-Antarctic marine ecosystems',
      authors: 'Marina TI, Garcia L, Taylor R, Smith J',
      journal: 'Ecology and Evolution, 12(3): e8723',
      link: '#',
      tags: ['Trophic interactions', 'Sub-Antarctic', 'Marine ecology'],
    },
    {
      id: 4,
      year: '2021',
      title: 'Stable isotope analysis of marine food webs in Tierra del Fuego',
      authors: 'Marina TI, Wilson P, Brown A, Jones M',
      journal: 'Austral Ecology, 46(5): 789-805',
      link: '#',
      tags: ['Stable isotopes', 'Tierra del Fuego', 'Food webs'],
    },
    {
      id: 5,
      year: '2020',
      title: 'Network structure and resilience in Antarctic benthic communities',
      authors: 'Marina TI, Taylor R, Smith J, Garcia L',
      journal: 'Antarctic Science, 32(4): 267-282',
      link: '#',
      tags: ['Network structure', 'Antarctic', 'Benthic communities'],
    },
  ]

  return (
    <section id="publications" className="publications section-padding section-white">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Publications</span>
          <h2>Selected <span className="highlight">Papers</span></h2>
          <p>Peer-reviewed articles and research contributions</p>
        </div>
        <div className="publications-list">
          {publicationsData.map((pub) => (
            <div key={pub.id} className="pub-item">
              <div className="pub-year">{pub.year}</div>
              <div className="pub-content">
                <h3>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    {pub.title}
                  </a>
                </h3>
                <p className="pub-authors">{pub.authors}</p>
                <p className="pub-journal">{pub.journal}</p>
                <div className="pub-tags">
                  {pub.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications
