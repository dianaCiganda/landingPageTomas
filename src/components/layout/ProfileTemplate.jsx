// components/layout/ProfileTemplate.jsx
import React, { useState, useRef, useEffect } from "react";
import "./ProfileTemplate.css";
import Footer from "./Footer";

const ProfileTemplate = ({ children, title }) => {
  const [bannerError, setBannerError] = useState(false);
  const [profileError, setProfileError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  const email = "tomasimarina@gmail.com";
  const mailtoTimerRef = useRef(null);
  const fallbackUsedRef = useRef(false);

  // Limpiar timer al desmontar
  useEffect(() => {
    return () => {
      if (mailtoTimerRef.current) {
        clearTimeout(mailtoTimerRef.current);
      }
    };
  }, []);

  const handleCopyEmail = () => {
    if (isCopying) return;
    
    setIsCopying(true);
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopied(true);
        setIsCopying(false);
        setTimeout(() => setCopied(false), 3000);
      })
      .catch(() => {
        try {
          const textArea = document.createElement('textarea');
          textArea.value = email;
          textArea.style.position = 'fixed';
          textArea.style.opacity = '0';
          textArea.style.left = '-9999px';
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          setCopied(true);
          setIsCopying(false);
          setTimeout(() => setCopied(false), 3000);
        } catch (err) {
          setIsCopying(false);
          alert(`No se pudo copiar el email. Por favor, copia manualmente: ${email}`);
        }
      });
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    
    // Resetear el flag de fallback
    fallbackUsedRef.current = false;
    
    // Intentar abrir mailto
    window.location.href = `mailto:${email}`;
    
    // Detectar si la página se oculta (la app de correo se abrió)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // La app de correo se abrió, no hacer nada
        fallbackUsedRef.current = true;
        if (mailtoTimerRef.current) {
          clearTimeout(mailtoTimerRef.current);
        }
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // También detectar blur de la ventana
    const handleBlur = () => {
      // La ventana perdió foco, probablemente se abrió la app
      fallbackUsedRef.current = true;
      if (mailtoTimerRef.current) {
        clearTimeout(mailtoTimerRef.current);
      }
      window.removeEventListener('blur', handleBlur);
    };
    
    window.addEventListener('blur', handleBlur);
    
    // Fallback: si después de 2 segundos no se detectó que la app se abrió
    mailtoTimerRef.current = setTimeout(() => {
      // Si la página sigue visible y no se usó el fallback
      if (!fallbackUsedRef.current && !document.hidden && !isCopying) {
        // mailto falló, copiar automáticamente
        handleCopyEmail();
      }
      // Limpiar eventos
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleBlur);
    }, 2000);
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