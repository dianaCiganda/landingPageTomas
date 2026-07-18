import React, { useState } from "react";
import "./Contact.css";
import Footer from "../layout/Footer";
import ProfileTemplate from "../layout/ProfileTemplate";

const Contact = () => {
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
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      })
      .catch(() => {
        // Fallback para navegadores que no soportan clipboard
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
          setTimeout(() => setCopied(false), 3000);
        } catch (err) {
          alert(`No se pudo copiar el email. Por favor, copia manualmente: ${email}`);
        }
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
                          title={copied ? '¡Copiado!' : 'Abrir email o copiar'}
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
  );
};

export default Contact;