import React from "react";
import "./Contact.css";
import Footer from "../layout/Footer";
import ProfileTemplate from "../layout/ProfileTemplate";

const Contact = () => {
  const socialLinks = [
    {
      icon: "fa-envelope",
      href: "mailto:tomasimarina@gmail.com",
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
                    {socialLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target={link.href.startsWith('mailto:') ? undefined : "_blank"}
                        rel={link.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
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
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ProfileTemplate>
    </>
  );
};

export default Contact;