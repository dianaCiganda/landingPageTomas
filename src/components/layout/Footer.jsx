import React, { useState } from 'react'
import './Footer.css'

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = 'tomasimarina@gmail.com';

  const handleEmailClick = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${email}`;
    
    // Crear un enlace invisible y hacer clic
    const link = document.createElement('a');
    link.href = mailtoLink;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Fallback: si no funciona, copiar al portapapeles
    setTimeout(() => {
      if (!document.hidden) {
        navigator.clipboard.writeText(email).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 3000);
        }).catch(() => {
          const textArea = document.createElement('textarea');
          textArea.value = email;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          setCopied(true);
          setTimeout(() => setCopied(false), 3000);
        });
      }
    }, 1500);
  };

  const socialLinks = [
    {
      icon: "fa-envelope",
      className: "email",
      type: "fas",
      label: "Email",
      isEmail: true,
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
              if (link.isEmail) {
                return (
                  <button
                    key="email"
                    onClick={handleEmailClick}
                    className={`social-link ${link.className} ${copied ? 'copied' : ''}`}
                    aria-label={link.label}
                    title={copied ? '¡Copiado!' : 'Abrir correo o copiar'}
                  >
                    <span className="social-icon">
                      <i className={`${link.type} ${link.icon}`}></i>
                    </span>
                    {copied && <span className="copied-tooltip">¡Copiado!</span>}
                  </button>
                );
              }
              
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
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