import React, { useState } from "react";
import "./Contact.css";
import Footer from "../layout/Footer";

const Contact = () => {
  const [bannerError, setBannerError] = useState(false);
  const [profileError, setProfileError] = useState(false);

  const socialLinks = [
    {
      icon: "fa-envelope",
      href: "mailto:tomasimarina@gmail.com?subject=Contacto%20desde%20tu%20sitio&body=Hola%20Tomás,",
      className: "email",
      type: "fas",
      label: "Email",
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

        {/* BANNER */}
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

        {/* CONTENIDO PRINCIPAL */}
        <div className="profile-content">

          {/* COLUMNA IZQUIERDA */}
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

          {/* COLUMNA DERECHA */}
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

                  {/* REDES SOCIALES */}
                  <div className="contact-social-wrapper">

                    <div className="contact-social">

                      {socialLinks.map((link) => {
                        const isMailto = link.href.startsWith('mailto:');
                        const isExternal = link.href.startsWith('http://') || link.href.startsWith('https://');
                        
                        return (
                          <a
                            key={link.href}
                            href={link.href}
                            target={isMailto ? '_self' : '_blank'}
                            rel={isExternal ? 'noopener noreferrer' : undefined}
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

        </div>

      </div>

      <Footer />

    </>
  );
};

export default Contact;