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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
    closeMenu(); // Cerrar el menú primero

    // Si ya estamos en la página, solo hacer scroll al inicio
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    // Navegar a la página
    navigate(path);
    
    // Forzar scroll al inicio después de la navegación
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  // Manejar click en Projects - comportamiento especial
  const handleProjectsClick = () => {
    closeMenu(); // Cerrar el menú primero
    
    // Si estamos en home, ir a la sección projects
    if (location.pathname === "/") {
      const element = document.getElementById("projects");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      return;
    }
    
    // Si estamos en projects, hacer scroll al inicio
    if (location.pathname === "/projects") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }
    
    // Si estamos en otra página, navegar a projects
    navigate("/projects");
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
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
           <button
              onClick={() => goToPage("/projects")}
              className={isActive("/projects") ? "active" : ""}
            >
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