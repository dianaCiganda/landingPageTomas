import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const goToSection = (sectionId) => {
    closeMenu();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const goToContact = () => {
    closeMenu();
    navigate("/contact");
  };

  const isCVPage = location.pathname === "/cv";
  const isContactPage = location.pathname === "/contact";
  const isHomePage = location.pathname === "/";

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="nav container">
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <button
              onClick={() => goToSection("home")}
              className={isHomePage ? "active" : ""}
            >
              About
            </button>
          </li>
          <li>
            <button onClick={() => goToSection("projects")}>Projects</button>
          </li>
          <li>
            <button onClick={() => goToSection("publications")}>Publications</button>
          </li>
          <li>
            <button onClick={() => goToSection("supervision")}>Supervision</button>
          </li>
          <li>
            <button onClick={() => goToSection("teaching")}>Teaching</button>
          </li>
          <li>
            <button onClick={() => goToSection("news")}>News</button>
          </li>
          <li>
            <Link to="/cv" onClick={closeMenu} className={isCVPage ? "active" : ""}>
              CV
            </Link>
          </li>
          <li>
            <button onClick={goToContact} className={isContactPage ? "active" : ""}>
              Contact
            </button>
          </li>
        </ul>

        <button
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menú"
        >
          <i className="fas fa-bars"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;