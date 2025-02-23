import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS
import '../styles/sections/Contact.css'; // Import the CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    message: '',
    type: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      message: 'Sending message...',
      type: 'loading'
    });

    try {
      // Use EmailJS to send the email
      const result = await emailjs.send(
        'service_77cmnu7', // Replace with your Service ID
        'template_24mblwy', // Replace with your Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'CFc5kic4mVgc9A8ty' // Replace with your Public Key
      );

      if (result.status === 200) {
        setStatus({
          message: 'Your message has been sent. Thank you!',
          type: 'success'
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({
        message: 'There was an error sending your message. Please try again.',
        type: 'error'
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Fill out the form below or reach out to us directly.</p>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <div className="status-message">
            {status.type === 'loading' && <div className="loading">Sending...</div>}
            {status.type === 'error' && <div className="error-message">{status.message}</div>}
            {status.type === 'success' && <div className="sent-message">{status.message}</div>}
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>

        {/* Contact Information Cards */}
        <div className="contact-info-container">
          <div className="contact-card">
            <h3>Address</h3>
            <p>123 Community Street</p>
            <p>New York, NY 10001</p>
          </div>

          <div className="contact-card">
            <h3>Call Us</h3>
            <p>+1 234 567 8900</p>
            <p>+1 234 567 8901</p>
          </div>

          <div className="contact-card">
            <h3>Email Us</h3>
            <p>info@weneighbour.com</p>
            <p>contact@weneighbour.com</p>
          </div>

          <div className="contact-card">
            <h3>Open Hours</h3>
            <p>Monday - Friday</p>
            <p>9:00AM - 5:00PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;