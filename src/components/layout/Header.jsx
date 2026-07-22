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

  // Navegar a una sección del Home
  const goToHomeSection = (sectionId) => {
    closeMenu();

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const element = document.getElementById(sectionId);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 400);
    } else {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  // Navegar a otra página
  const goToPage = (path) => {
    closeMenu();

    if (location.pathname !== path) {
      navigate(path);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="nav container">
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <button
              onClick={() => goToHomeSection("home")}
              className={isActive("/") ? "active" : ""}
            >
              About
            </button>
          </li>

          <li>
            <button    onClick={() => goToPage("/projects")}
              className={isActive("/projects") ? "active" : ""}>
                Projects
            </button>
          </li>

          <li>
            <button
              onClick={() => goToPage("/publications")}
              className={isActive("/publications") ? "active" : ""}
            >
              Publications
            </button>
          </li>

          <li>
            <button onClick={() => goToHomeSection("supervision")}>
              Supervision
            </button>
          </li>

          <li>
            <button onClick={() => goToHomeSection("teaching")}>
              Teaching
            </button>
          </li>

          <li>
            <button onClick={() => goToHomeSection("news")}>
              News
            </button>
          </li>

          <li>
            <Link
              to="/cv"
              onClick={closeMenu}
              className={isActive("/cv") ? "active" : ""}
            >
              CV
            </Link>
          </li>

          <li>
            <button
              onClick={() => goToPage("/contact")}
              className={isActive("/contact") ? "active" : ""}
            >
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