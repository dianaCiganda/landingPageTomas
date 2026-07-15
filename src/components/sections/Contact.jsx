import React, { useState } from "react";
import "./Contact.css";
import Footer from "../layout/Footer";

const Contact = () => {
  const [bannerError, setBannerError] = useState(false);
  const [profileError, setProfileError] = useState(false);
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
      <div className="page-wrapper">

        <section id="home" className="banner">
          <div className="banner-contenedor">
            <div className="banner-background">
              {!bannerError ? (
                <img
                  src={`${import.meta.env.BASE_URL}assets/banner.jpeg`}
                  className="image-banner"
                  alt="Imagen de fondo"
                  onError={() => setBannerError(true)}
                />
              ) : (
                <div className="banner-bg-fallback">
                  <span>🌊</span>
                </div>
              )}
            </div>
          </div>
        </section>

        <div className="profile-content">
          <div className="profile-left">
            <div className="banner-de-perfil">
              {!profileError ? (
                <img
                  src={`${import.meta.env.BASE_URL}assets/perfil.jpeg`}
                  className="imagen-de-perfil"
                  alt="Imagen de perfil"
                  onError={() => setProfileError(true)}
                />
              ) : (
                <div className="banner-profile-placeholder">
                  <span>👤</span>
                </div>
              )}
            </div>

            <h1 className="titulo-profile">
              Tomás I. Marina
            </h1>
          </div>

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
                            <div key="email" className="contact-email-wrapper">
                              <button
                                onClick={handleCopyEmail}
                                onMouseDown={(e) => e.preventDefault()}
                                className={`social-contact-link ${link.className} ${copied ? 'copied' : ''}`}
                                title={copied ? '¡Copiado!' : 'Copiar email al portapapeles'}
                              >
                                <span className="social-contact-icon">
                                  <i className={`${link.type} ${link.icon}`}></i>
                                </span>
                                <span className="social-contact-label">
                                  {link.label}
                                </span>
                              </button>
                              {copied && (
                                <span className="copy-tooltip-contact">¡Email copiado!</span>
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

                  {/* Email visible con opción de copiar */}
                  <div className="email-display">
                    <span className="email-address">📧 tomasimarina@gmail.com</span>
                    <div className="email-btn-wrapper">
                      <button 
                        onClick={handleCopyEmail}
                        onMouseDown={(e) => e.preventDefault()}
                        className={`copy-email-btn ${copied ? 'copied' : ''}`}
                      >
                        {copied ? '✅ Copiado' : '📋 Copiar Email'}
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;