import React, { useState, useRef } from "react";
import "./Contact.css";
import Footer from "../layout/Footer";
import ProfileTemplate from "../layout/ProfileTemplate";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const longPressTimer = useRef(null);
  const email = 'tomasimarina@gmail.com';

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

  const handleEmailClick = (e) => {
    e.preventDefault();
    
    // En móviles, abrir mailto directamente
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      // Usar window.location para abrir mailto
      window.location.href = `mailto:${email}`;
      
      // Si después de 1 segundo sigue visible, copiar como fallback
      setTimeout(() => {
        if (!document.hidden) {
          handleCopyEmail();
        }
      }, 1000);
    } else {
      // En desktop, copiar al portapapeles
      handleCopyEmail();
    }
  };

  // Manejar touch events para evitar el long press nativo
  const handleTouchStart = (e) => {
    // Prevenir el menú contextual de long press
    longPressTimer.current = setTimeout(() => {
      // Si mantiene presionado, copiar
      handleCopyEmail();
    }, 500);
  };

  const handleTouchEnd = () => {
    clearTimeout(longPressTimer.current);
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
    <>
      <ProfileTemplate title="Tomás I. Marina">
        <section className="contact">
          <div className="contact-container">
            <div className="contact-wrapper">
              <div className="contact-text">
                <span className="section-contact-tag">
                  Contact
                </span>

                <p className="contact-intro">
                  Always open to new perspectives and collaborative
                  opportunities. If you have questions about my work,
                  are interested in partnering on a research project,
                  or just want to connect, please feel free to reach out.
                  Pick your favorite way to get in touch.
                </p>

                <div className="contact-social-wrapper">
                  <div className="contact-social">
                    {socialLinks.map((link) => {
                      if (link.isEmail) {
                        return (
                          <button
                            key="email"
                            onClick={handleEmailClick}
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                            onTouchCancel={handleTouchEnd}
                            className={`social-contact-link ${link.className} ${copied ? 'copied' : ''}`}
                            title={copied ? '¡Copiado!' : 'Toca para abrir correo | Mantén para copiar'}
                          >
                            <span className="social-contact-icon">
                              <i className={`${link.type} ${link.icon}`}></i>
                            </span>
                            <span className="social-contact-label">
                              {copied ? '¡Copiado!' : link.label}
                            </span>
                          </button>
                        );
                      }
                      
                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`social-contact-link ${link.className}`}
                          title={link.label}
                        >
                          <span className="social-contact-icon">
                            <i className={`${link.type} ${link.icon}`}></i>
                          </span>
                          <span className="social-contact-label">
                            {link.label}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ProfileTemplate>
    </>
  );
};

export default Contact;