import React from "react";
import "../styles/sections/Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="animated-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text" data-aos="fade-up">
            <h1 className="hero-title">
              Strengthen your neighborhood connections with We Neighbour!
            </h1>
            <p className="hero-description">
              Join your local community, stay connected with neighbors, and make
              your neighborhood a better place to live.
            </p>
            <div className="hero-cta">
              <a href="#" className="cta-button cta-primary">
                <i className="bi bi-google-play"></i>
                <span>
                  {/* <small>Get it on</small> */}
                  Google Play
                </span>
              </a>
              <a href="https://play.google.com/store/apps/details?id=we.neighbour.sdgp.com&pli=1" className="cta-button cta-secondary">
                <i className="bi bi-apple"></i>
                <span>
                  {/* <small>Download on</small> */}
                  App Store
                </span>
              </a>
            </div>
          </div>

          <div className="hero-images" data-aos="fade-up" data-aos-delay="200">
            <div className="mockup-container">
              <div className="mockup primary">
                <img
                  src="/assets/img/1.png"
                  alt="We Neighbour App Main Screen"
                  className="app-screenshot"
                  loading="lazy"
                />
                <div className="mockup-shadow"></div>
              </div>
              <div className="mockup secondary">
                <img
                  src="/assets/img/2.png"
                  alt="We Neighbour App Features"
                  className="app-screenshot"
                  loading="lazy"
                />
                <div className="mockup-shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
