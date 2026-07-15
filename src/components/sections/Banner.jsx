import React, { useState } from "react";
import "./Banner.css";

const Banner = () => {
  const [bannerError, setBannerError] = useState(false);
  const [profileError, setProfileError] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
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

  const contactLinks = [
    {
      icon: "fa-envelope",
      className: "email",
      type: "fas",
      label: "Email",
      isEmail: true,
    },
    {
      icon: "fa-graduation-cap",
      type: "fas",
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=w5BCHNcAAAAJ&hl=en",
    },
    {
      icon: "fa-researchgate",
      type: "fab",
      label: "ResearchGate",
      href: "https://www.researchgate.net/profile/Tomas-Marina",
    },
    {
      icon: "fa-orcid",
      type: "fab",
      label: "ORCID",
      href: "https://orcid.org/0000-0002-9203-7411",
    },
    {
      icon: "fa-linkedin-in",
      type: "fab",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tomas-ignacio-marina/",
    },
  ];

  return (
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

          <h1 className="titulo-profile">Tomás I. Marina</h1>

          <aside className="redes">
            <div className="profile-contact">
              {contactLinks.map((link) => {
                const isExternal = link.href && (link.href.startsWith('http://') || link.href.startsWith('https://'));
                
                if (link.isEmail) {
                  return (
                    <button
                      key="email"
                      onClick={handleCopyEmail}
                      className="contact-item"
                      title={copied ? '¡Copiado!' : 'Copiar email'}
                    >
                      <span className="contact-icon">
                        <i className={`${link.type} ${link.icon}`}></i>
                      </span>
                      <span className="contact-label">
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
                    className="contact-item"
                  >
                    <span className="contact-icon">
                      <i className={`${link.type} ${link.icon}`}></i>
                    </span>
                    <span className="contact-label">
                      {link.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </aside>
        </div>

        <section className="about">
          <div className="about-container">
            <div className="about-wrapper">
              <div className="about-text">
                <span className="section-tag">About Me</span>
                <p className="about-intro">
                  I am a full-time researcher at <strong>CADIC-CONICET</strong> in Ushuaia, Argentina. 
                  With an M.Sc. in Biological Oceanography (CINVESTAV-IPN, Mexico) and a Ph.D. in Science 
                  (UNGS, Argentina), my research focuses on <strong>modeling species interactions</strong> 
                  in high-latitude marine ecosystems using a network perspective.
                </p>
                <p>
                  I have published over <strong>20 peer-reviewed articles</strong> and I am currently 
                  (2022–2026) leading a project on the effects of multiple stressors on marine ecosystems. 
                  I also teach a postgraduate course on <strong>food web modeling</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;