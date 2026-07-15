import React, { useState } from 'react'
import './Footer.css'

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    if (e && e.currentTarget) {
      e.currentTarget.blur();
    }
    
    navigator.clipboard.writeText('tomasimarina@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }).catch(() => {
      const textArea = document.createElement('textarea');
      textArea.value = 'tomasimarina@gmail.com';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
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
                  <div key="email" className="social-link-wrapper">
                    <button
                      onClick={handleCopyEmail}
                      onMouseDown={(e) => e.preventDefault()}
                      className={`social-link ${link.className} ${copied ? 'copied' : ''}`}
                      aria-label={link.label}
                      title={copied ? '¡Copiado!' : 'Copiar email'}
                    >
                      <span className="social-icon">
                        <i className={`${link.type} ${link.icon}`}></i>
                      </span>
                    </button>
                    {copied && (
                      <span className="copy-tooltip">¡Email copiado!</span>
                    )}
                  </div>
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