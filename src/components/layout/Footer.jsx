import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "tomasimarina@gmail.com";

  const handleEmailClick = (e) => {
    e.preventDefault();
    
    // Intentar abrir mailto
    window.location.href = `mailto:${email}`;
    
    // Fallback: si después de 1.5 segundos no funcionó, copiar automáticamente
    setTimeout(() => {
      if (!document.hidden) {
        handleCopyEmail();
      }
    }, 1500);
  };

  const handleCopyEmail = () => {
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
      icon: "fa-x-twitter",
      href: "https://x.com/tomimarina1",
      className: "x",
      type: "fab",
      label: "X",
    },
    {
      icon: "fa-instagram",
      href: "https://www.instagram.com/tomasimarina86/",
      className: "instagram",
      type: "fab",
      label: "Instagram",
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <p className="footer-name">Tomás I. Marina</p>
            <p className="footer-role">Researcher · CADIC-CONICET</p>
            <p className="footer-location">
              Ushuaia, Tierra del Fuego · Argentina
            </p>
          </div>

          <div className="footer-social">
            {socialLinks.map((link) => {
              if (link.isEmail) {
                return (
                  <button
                    key="email"
                    onClick={handleEmailClick}
                    className={`social-link ${link.className || ""} ${copied ? 'copied' : ''}`}
                    aria-label={link.label}
                    title={copied ? '¡Copiado!' : 'Abrir email'}
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
                  className={`social-link ${link.className || ""}`}
                  aria-label={link.label}
                  title={link.label}
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
  );
};

export default Footer;