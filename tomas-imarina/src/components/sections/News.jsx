import React from 'react'
import './News.css'

const News = () => {
  const newsData = [
    {
      id: 1,
      date: '2026-06-15',
      title: 'New paper published in Marine Ecology Progress Series',
      description: 'Our latest research on network-based approaches for marine ecosystem monitoring is now available online.',
      link: '#',
    },
    {
      id: 2,
      date: '2026-05-20',
      title: 'Presenting at the International Marine Science Conference',
      description: 'I will be presenting our work on climate change impacts in the Southern Ocean.',
      link: '#',
    },
    {
      id: 3,
      date: '2026-04-10',
      title: 'New project funded by CONICET',
      description: 'Excited to announce a new 4-year project on multiple stressors in marine ecosystems.',
      link: '#',
    },
    {
      id: 4,
      date: '2026-03-01',
      title: 'Visiting researcher at University of Tasmania',
      description: 'Collaborating on network analysis methods for marine ecosystems.',
      link: '#',
    },
  ]

  return (
    <section id="news" className="news section-padding section-light">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">News</span>
          <h2>News & <span className="highlight">Activities</span></h2>
          <p>Recent news and upcoming activities</p>
        </div>
        <div className="news-grid">
          {newsData.map((item) => (
            <div key={item.id} className="news-card">
              <span className="news-date">{item.date}</span>
              <h3>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
