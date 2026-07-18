// components/layout/ProfileTemplate.jsx
import React, { useState } from "react";
import "./ProfileTemplate.css";
import Footer from "./Footer";

const ProfileTemplate = ({ children, title }) => {
  const [bannerError, setBannerError] = useState(false);
  const [profileError, setProfileError] = useState(false);

  const contactLinks = [
    {
      icon: "fa-envelope",
      className: "email",
      type: "fas",
      label: "Email",
      isEmail: true,
      href: "mailto:tomasimarina@gmail.com", // ← Agregamos mailto
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

          <h1 className="titulo-profile">{title || "Tomás I. Marina"}</h1>

          <aside className="redes">
            <div className="profile-contact">
              {contactLinks.map((link) => {
                if (link.isEmail) {
                  return (
                    <a
                      key="email"
                      href={link.href} // ← mailto:tomasimarina@gmail.com
                      className={`contact-item`}
                      title="Enviar email"
                    >
                      <span className="contact-icon">
                        <i className={`${link.type} ${link.icon}`}></i>
                      </span>
                      <span className="contact-label">
                        {link.label}
                      </span>
                    </a>
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

        <div className="profile-right">
          {children}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ProfileTemplate;