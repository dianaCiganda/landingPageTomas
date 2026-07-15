import React from 'react'
import './Footer.css'

const Footer = () => {
  const socialLinks = [
    {
      icon: "fa-envelope",
      href: "mailto:tomasimarina@gmail.com?subject=Contacto%20desde%20tu%20sitio&body=Hola%20Tomás,",
      className: "email",
      type: "fas",
      label: "Email",
    },
    {
      icon: 'fa-x-twitter',
      href: 'https://x.com/tomimarina1',
      className: 'x',
      type: 'fab',
      label: "X",
    },
    {
      icon: 'fa-instagram',
      href: 'https://www.instagram.com/tomasimarina86/',
      className: 'instagram',
      type: 'fab',
      label: "Instagram",
    },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <p className="footer-name">Tomás I. Marina</p>
            <p className="footer-role">Researcher · CADIC-CONICET</p>
            <p className="footer-location">Ushuaia, Tierra del Fuego · Argentina</p>
          </div>
          <div className="footer-social">
            {socialLinks.map((link) => {
              const isMailto = link.href.startsWith('mailto:');
              const isExternal = link.href.startsWith('http://') || link.href.startsWith('https://');
              
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={isMailto ? '_self' : '_blank'}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className={`social-link ${link.className}`}
                  aria-label={link.label || link.className}
                >
                  <span className="social-icon">
                    <i className={`${link.type} ${link.icon}`}></i>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Tomás I. Marina · All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer