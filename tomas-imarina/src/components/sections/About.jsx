import React from 'react'
import './About.css'
import fotoPerfil  from "../../assets/perfil.jpeg"
const About = () => {
  const contactLinks = [
    {
      icon: 'fa-envelope',
      label: 'tomasimarina@gmail.com',
      href: 'mailto:tomasimarina@gmail.com',
    },
    {
      icon: 'fa-graduation-cap',
      label: 'Google Académico',
      href: 'https://scholar.google.com/citations?user=w5BCHNcAAAAJ&hl=en',
    },
    {
      icon: 'fa-researchgate',
      label: 'ResearchGate',
      href: 'https://www.researchgate.net/profile/Tomas-Marina',
    },
    {
      icon: 'fa-orcid',
      label: 'ORCID',
      href: 'https://orcid.org/0000-0002-9203-7411',
    },
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-profile">
            <img
              src={fotoPerfil}
              alt="Tomás Imarina"
              className="profile-image"
              loading="lazy"
            />
            <div className="profile-contact">
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact-item"
                >
                  <span className="contact-icon">
                    <i className={`fas ${link.icon}`} />
                  </span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="about-text">
            <span className="section-tag">About Me</span>
            <p className="about-intro">
              I am a full-time researcher at <strong>CADIC-CONICET</strong> in Ushuaia, Argentina.
              With an M.Sc. in Biological Oceanography (CINVESTAV-IPN, Mexico) and a Ph.D. in Science
              (UNGS, Argentina), my research focuses on <strong>modeling species interactions</strong>
              in high-latitude marine ecosystems, using a network perspective.
            </p>
            <p>
              I have published over <strong>20 peer-reviewed articles</strong> and I am currently
              (2022-2026) leading a project on the effects of multiple stressors on marine ecosystems.
              I also teach a postgraduate course on <strong>food web modeling</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
