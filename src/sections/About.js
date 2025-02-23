import React from 'react';
import '../styles/sections/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title">
              <h3>About Us</h3>
              <h2>Building Stronger Communities, One Connection at a Time</h2>
              <p>
                We Neighbour connects residents, making communication and collaboration effortless.
                Our platform fosters a sense of belonging, ensuring safer and more engaged communities.
                Join us in building stronger neighborhood bonds!
              </p>
              <a href="#" className="btn-read-more">Read More →</a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="info-box">
                  <i className="bi bi-buildings"></i>
                  <h3>Who We Are</h3>
                  <p>We Neighbour is a community-driven platform designed to connect neighbors, enhance communication, and build stronger, safer communities.</p>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="info-box">
                  <i className="bi bi-bullseye"></i>
                  <h3>Our Mission</h3>
                  <p>Empowering communities with seamless communication, real-time updates, and interactive features that bring neighbors closer.</p>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="info-box">
                  <i className="bi bi-eye"></i>
                  <h3>Our Vision</h3>
                  <p>To create a world where every neighborhood is connected, supportive, and engaged, fostering a true sense of belonging.</p>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div className="info-box">
                  <i className="bi bi-star"></i>
                  <h3>Why Choose Us?</h3>
                  <p>We offer a secure, user-friendly platform that makes neighborhood connections effortless, ensuring better collaboration and support for everyone.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
