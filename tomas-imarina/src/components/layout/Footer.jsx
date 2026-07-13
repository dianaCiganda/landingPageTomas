import React from 'react'

const Footer = () => {
  const socialLinks = [
    {
      icon: 'fa-envelope',
      label: 'tomasimarina@gmail.com',
      href: 'mailto:tomasimarina@gmail.com',
      className: 'email',
    },
    {
      icon: 'fa-x-twitter',
      label: '@tomimarina1',
      href: 'https://x.com/tomimarina1',
      className: 'x',
    },
    {
      icon: 'fa-instagram',
      label: '@tomasimarina86',
      href: 'https://www.instagram.com/tomasimarina86/',
      className: 'instagram',
    },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <p className="footer-name">Tomás Imarina</p>
            <p className="footer-role">Researcher · CADIC-CONICET</p>
            <p className="footer-location">Ushuaia, Tierra del Fuego · Argentina</p>
          </div>
          <div className="footer-social">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-link ${link.className}`}
                title={link.label}
              >
                <span className="social-icon">
                  <i className={`fab ${link.icon}`} />
                </span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Tomás Imarina · All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
