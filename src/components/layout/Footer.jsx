import React, { useState, useRef, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
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