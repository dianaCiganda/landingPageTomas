// components/layout/ProfileTemplate.jsx
import React, { useState } from "react";
import "./ProfileTemplate.css";
import Footer from "./Footer";

const ProfileTemplate = ({ children, title }) => {
  const [bannerError, setBannerError] = useState(false);
  const [profileError, setProfileError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  const email = "tomasimarina@gmail.com";

  const handleCopyEmail = () => {
    if (isCopying) return;
    
    setIsCopying(true);
    
    // Usar el método fallback directamente para evitar el permiso del portapapeles
    try {
      const textArea = document.createElement('textarea');
      textArea.value = email;
      // Hacer que el textarea sea invisible pero funcional
      textArea.style.position = 'fixed';
      textArea.style.top = '0';
      textArea.style.left = '0';
      textArea.style.width = '2em';
      textArea.style.height = '2em';
      textArea.style.padding = '0';
      textArea.style.border = 'none';
      textArea.style.outline = 'none';
      textArea.style.boxShadow = 'none';
      textArea.style.background = 'transparent';
      textArea.style.opacity = '0';
      textArea.style.pointerEvents = 'none';
      document.body.appendChild(textArea);
      textArea.select();
      textArea.setSelectionRange(0, 99999);
      const success = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      if (success) {
        setCopied(true);
        setIsCopying(false);
        setTimeout(() => setCopied(false), 3000);
      } else {
        // Si falla, mostrar el email para copia manual
        setIsCopying(false);
        // Crear un pequeño toast o notificación
        const emailDisplay = document.createElement('div');
        emailDisplay.style.cssText = `
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: #333;
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          font-family: sans-serif;
          font-size: 14px;
          z-index: 9999;
          text-align: center;
          max-width: 90%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        `;
        emailDisplay.textContent = `📧 ${email} (copia manualmente)`;
        document.body.appendChild(emailDisplay);
        setTimeout(() => {
          document.body.removeChild(emailDisplay);
        }, 3000);
      }
    } catch (err) {
      setIsCopying(false);
      // Mostrar el email en una notificación
      const emailDisplay = document.createElement('div');
      emailDisplay.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #333;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        font-family: sans-serif;
        font-size: 14px;
        z-index: 9999;
        text-align: center;
        max-width: 90%;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      `;
      emailDisplay.textContent = `📧 ${email} (copia manualmente)`;
      document.body.appendChild(emailDisplay);
      setTimeout(() => {
        document.body.removeChild(emailDisplay);
      }, 3000);
    }
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    
    // Intentar abrir mailto
    window.location.href = `mailto:${email}`;
    
    // Fallback: si después de 1.5 segundos no funcionó, copiar automáticamente
    setTimeout(() => {
      if (!document.hidden && !isCopying) {
        handleCopyEmail();
      }
    }, 1500);

    // Verificar también a los 2.5 segundos por si acaso
    setTimeout(() => {
      if (!document.hidden && !isCopying) {
        handleCopyEmail();
      }
    }, 2500);
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
              {title || "Tomás I. Marina"}
            </h1>

            <aside className="redes">
              <div className="profile-contact">
                {contactLinks.map((link) => {
                  if (link.isEmail) {
                    return (
                      <button
                        key="email"
                        onClick={handleEmailClick}
                        className={`contact-item ${link.className || ""} ${copied ? 'copied' : ''}`}
                        title={copied ? '¡Copiado!' : 'Abrir email'}
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
                      className={`contact-item ${link.className || ""}`}
                      title={link.label}
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