import React, { useState, useEffect } from "react";
import "../../styles/layout/Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileNavActive ? "hidden" : "auto";
  }, [isMobileNavActive]);

  const toggleMobileNav = () => {
    setIsMobileNavActive((prev) => !prev);
  };

  const closeMobileNav = () => {
    setIsMobileNavActive(false);
  };

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <a href="#hero" className="logo d-flex align-items-center" onClick={closeMobileNav}>
          <img src="/assets/img/logo.jpeg" alt="We Neighbour Logo" />
          <span>We Neighbour</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className={`mobile-nav-toggle bi ${isMobileNavActive ? "bi-x" : "bi-list"}`}
          onClick={toggleMobileNav}
          aria-expanded={isMobileNavActive}
          aria-label="Toggle navigation"
        ></button>

        {/* Mobile Menu Overlay */}
        {isMobileNavActive && <div className="mobile-nav-overlay" onClick={closeMobileNav}></div>}

        {/* Navbar */}
        <nav className={`navbar ${isMobileNavActive ? "mobile-nav-active" : ""}`} role="navigation">
          <ul>
            {["Home", "About", "Features", "Team", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} onClick={closeMobileNav}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
