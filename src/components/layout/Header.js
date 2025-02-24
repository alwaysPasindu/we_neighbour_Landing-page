import React, { useState, useEffect } from "react";
import "../../styles/layout/Header.css";  

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Handle header scroll state
      setIsScrolled(window.scrollY > 50);
      
      // Handle active section tracking
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "home";

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Handle body scroll lock for mobile menu
    if (isMobileNavActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileNavActive]);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsMobileNavActive(false);
    setActiveLink(id);

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { id: "hero", label: "Home", icon: "🏠" },
    { id: "about", label: "About", icon: "ℹ️" },
    { id: "features", label: "Features", icon: "⭐" },
    { id: "team", label: "Team", icon: "👥" },
    { id: "contact", label: "Contact", icon: "📧" },
  ];

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="header-container">
        <a href="#home" className="logo" onClick={(e) => handleLinkClick(e, "home")}>
          <img src="/assets/img/No BG.png" alt="Logo" className="logo-img" />
          <span className="logo-text">WE NEIGHBOUR</span>
        </a>

        <button
          className={`mobile-nav-toggle ${isMobileNavActive ? "active" : ""}`}
          onClick={() => setIsMobileNavActive(!isMobileNavActive)}
          aria-expanded={isMobileNavActive}
          aria-label="Toggle navigation"
        >
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </button>

        <div className={`nav-wrapper ${isMobileNavActive ? "active" : ""}`}>
          <div 
            className="nav-backdrop" 
            onClick={() => setIsMobileNavActive(false)}
          />
          <nav className="navbar">
            <ul className="nav-list">
              {navLinks.map(({ id, label, icon }) => (
                <li key={id} className="nav-item">
                  <a
                    href={`#${id}`}
                    className={`nav-link ${activeLink === id ? "active" : ""}`}
                    onClick={(e) => handleLinkClick(e, id)}
                  >
                    <span className="nav-icon">{icon}</span>
                    <span className="nav-label">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;