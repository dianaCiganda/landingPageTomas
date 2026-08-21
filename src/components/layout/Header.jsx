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

  // Efecto para manejar el scroll cuando se navega desde otras páginas
  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 300);
      
      navigate(location.pathname, { 
        replace: true,
        state: {} 
      });
    }
  }, [location, navigate]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Navegar a una sección del Home
  const goToHomeSection = (sectionId) => {
    closeMenu();

    if (location.pathname !== "/") {
      navigate("/", {
        state: { scrollTo: sectionId }
      });
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

    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    navigate(path);
    
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  // 🎯 Manejar click en Projects - VERSIÓN CORREGIDA
  const handleProjectsClick = () => {
    console.log("🎯 Click en Projects - Path actual:", location.pathname);
    closeMenu();

    // Caso 1: Estamos en el Home → buscar la sección
    if (location.pathname === "/") {
      console.log("🔍 Buscando sección #projects en Home");
      const element = document.getElementById("projects");
      
      if (element) {
        console.log("✅ Elemento #projects encontrado, scrolleando");
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        console.warn("⚠️ No se encontró #projects en el DOM");
        console.warn("💡 Asegúrate de tener <section id='projects'> en Home.jsx");
        // Fallback: navegar a la página de Projects
        navigate("/projects", { replace: true });
      }
      return;
    }

    // Caso 2: Ya estamos en la página de Projects → scroll al inicio
    if (location.pathname === "/projects") {
      console.log("📄 Ya en Projects, scroll al inicio");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    // Caso 3: Estamos en cualquier otra página → navegar a Projects
    console.log("🚀 Navegando a /projects desde:", location.pathname);
    navigate("/projects", { replace: true });
    
    setTimeout(() => {
      console.log("📜 Scroll al inicio después de navegar");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 150);
  };

  // Manejar click en Teaching - VERSIÓN CORREGIDA
  const handleTeachingClick = () => {
    console.log("🎯 Click en Teaching - Path actual:", location.pathname);
    closeMenu();

    // Caso 1: Estamos en el Home → buscar la sección
    if (location.pathname === "/") {
      console.log("🔍 Buscando sección #teaching en Home");
      const element = document.getElementById("teaching");
      
      if (element) {
        console.log("✅ Elemento #teaching encontrado, scrolleando");
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        console.warn("⚠️ No se encontró #teaching en el DOM");
        console.warn("💡 Asegúrate de tener <section id='teaching'> en Home.jsx");
        navigate("/teaching", { replace: true });
      }
      return;
    }

    // Caso 2: Ya estamos en Teaching → scroll al inicio
    if (location.pathname === "/teaching") {
      console.log("📄 Ya en Teaching, scroll al inicio");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    // Caso 3: Otra página → navegar a Teaching
    console.log("🚀 Navegando a /teaching desde:", location.pathname);
    navigate("/teaching", { replace: true });
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 150);
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
              onClick={handleProjectsClick}
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
            <button
              onClick={() => goToPage("/supervision")}
              className={isActive("/supervision") ? "active" : ""}
            >
              Supervision
            </button>
          </li>

          <li>
            <button
              onClick={handleTeachingClick}
              className={isActive("/teaching") ? "active" : ""}
            >
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