import React from 'react'
import './Contact.css'

const Contact = () => {
  const contactInfo = [
    {
      icon: 'fa-envelope',
      label: 'Email',
      value: 'tomasimarina@gmail.com',
      href: 'mailto:tomasimarina@gmail.com',
    },
    {
      icon: 'fa-graduation-cap',
      label: 'Google Scholar',
      value: 'Google Académico',
      href: 'https://scholar.google.com/citations?user=w5BCHNcAAAAJ&hl=en',
    },
    {
      icon: 'fa-researchgate',
      label: 'ResearchGate',
      value: 'ResearchGate',
      href: 'https://www.researchgate.net/profile/Tomas-Marina',
    },
    {
      icon: 'fa-orcid',
      label: 'ORCID',
      value: 'ORCID',
      href: 'https://orcid.org/0000-0002-9203-7411',
    },
    {
      icon: 'fa-x-twitter',
      label: 'X (Twitter)',
      value: '@tomimarina1',
      href: 'https://x.com/tomimarina1',
    },
    {
      icon: 'fa-instagram',
      label: 'Instagram',
      value: '@tomasimarina86',
      href: 'https://www.instagram.com/tomasimarina86/',
    },
  ]

  return (
    <section id="contact" className="contact section-padding section-white">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Contact</span>
          <h2>Get in <span className="highlight">Touch</span></h2>
          <p>Connect with me through any of the following platforms</p>
        </div>

        <div className="contact-grid">
          {contactInfo.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="contact-card"
            >
              <span className="contact-icon">
                <i className={`fas ${item.icon}`}></i>
              </span>
              <div className="contact-info">
                <span className="contact-label">{item.label}</span>
                <span className="contact-value">{item.value}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
