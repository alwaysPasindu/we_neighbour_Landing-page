import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sections/Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 hero-text" data-aos="fade-up">
            <h1>Strengthen your neighborhood connections with We Neighbour!</h1>
            <p>
              Join your local community, stay connected with neighbors, and make your neighborhood a better place to live.
            </p>
            <div className="hero-cta">
              <a href="#" className="btn-get-started">
                <i className="bi bi-google-play"></i> Google Play
              </a>
              <a href="#" className="btn-learn-more">
                <i className="bi bi-apple"></i> App Store
              </a>
            </div>
          </div>
          
          {/* Hero Images Section */}
          <div className="col-lg-6 hero-images" data-aos="fade-up" data-aos-delay="200">
            <div className="mockup main">

            
              <img src="/assets/img/1.png" alt="We Neighbour App Main" className="app-screenshot main" />
            </div>
            <div className="mockup secondary">

              <img src="/assets/img/2.png" alt="We Neighbour App Features" className="app-screenshot secondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
