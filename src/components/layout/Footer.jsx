import React from "react";
import "./Footer.css";

const Footer = () => {
  const socialLinks = [
    {
      icon: "fa-envelope",
      className: "email",
      type: "fas",
      label: "Email",
      isEmail: true,
      href: "mailto:tomasimarina@gmail.com",
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
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.isEmail ? "_self" : "_blank"}
                rel={link.isEmail ? undefined : "noopener noreferrer"}
                className={`social-link ${link.className || ""}`}
                aria-label={link.label}
                title={link.label}
              >
                <span className="social-icon">
                  <i className={`${link.type} ${link.icon}`}></i>
                </span>
              </a>
            ))}
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