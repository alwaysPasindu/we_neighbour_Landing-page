import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Features from './sections/Features';
import Team from './sections/Team';
import Contact from './sections/Contact';
import Gallery from './sections/Gallery';
import AOS from 'aos';

import './styles/global.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import 'aos/dist/aos.css';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className={`app ${location.pathname === "/contact" ? "contact-page no-bootstrap" : ""}`}>
      <Header />
      <main>
        <Hero id="hero" />
        <About id="about" />
        <Features id="features" />
        <Gallery id="gallery" />
        <Team id="team" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
