import React, { useState } from "react";
import "./Contact.css";
import Footer from "../layout/Footer";
import ProfileTemplate from "../layout/ProfileTemplate";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "tomasimarina@gmail.com";

  const openMailto = () => {
    // Intentar abrir mailto
    window.location.href = `mailto:${email}`;
    setShowModal(false);
    
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
      setShowModal(false);
      setTimeout(() => setCopied(false), 3000);
    }).catch(() => {
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setShowModal(false);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    setShowModal(true);
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
                            className={`social-contact-link ${link.className} ${copied ? 'copied' : ''}`}
                            title={copied ? '¡Copiado!' : 'Abrir email'}
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

      <Footer />

      {/* Modal de opciones de email */}
      {showModal && (
        <div className="email-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="email-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
            <h3>📧 Enviar email a</h3>
            <p className="modal-email-display">{email}</p>
            
            <div className="modal-options">
              <button onClick={openMailto} className="modal-option-btn mailto">
                <i className="fas fa-envelope"></i>
                <span>App de correo</span>
                <small>Abrir en aplicación</small>
              </button>
              
              <button onClick={handleCopyEmail} className="modal-option-btn copy">
                <i className="fas fa-copy"></i>
                <span>Copiar email</span>
                <small>Al portapapeles</small>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;