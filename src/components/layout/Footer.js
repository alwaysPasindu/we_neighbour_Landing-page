import React from 'react';
import '../../styles/layout/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Top Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="logo">We Neighbour</a>
            <p>Connecting neighbors, strengthening communities.</p>
            
            {/* Social Links */}
            <div className="social-links">
              <a href="https://twitter.com/weneighbour" className="twitter"><i className="bi bi-twitter"></i></a>
              <a href="https://www.facebook.com/p/We-Neighbour-61568788907715/" className="facebook"><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/we_neighbour/profilecard/?igsh=MXFuM2k1MmtpbGh4ZA%3D%3D" className="instagram"><i className="bi bi-instagram"></i></a>
              <a href="https://www.linkedin.com/company/we-neighbour/" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-links">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <p><i className="bi bi-geo-alt"></i> 123 Community Street, San Francisco, CA</p>
            <p><i className="bi bi-telephone"></i> +1 234 567 8900</p>
            <p><i className="bi bi-envelope"></i> hello@weneighbour.com</p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <p>&copy;2025 <strong>We Neighbour</strong>. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
