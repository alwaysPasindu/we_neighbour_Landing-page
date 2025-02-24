import React from 'react';
import '../styles/sections/Features.css';

const Features = () => {
  const features = [
    {
      title: "Resource Sharing Platform",
      description: "Foster a culture of sharing and collaboration within your apartment community! The Resource Sharing Platform allows residents to lend or borrow items such as tools, furniture, event supplies, and household necessities. Save costs, reduce waste, and build stronger relationships by making resources accessible to everyone.",
      image: "/assets/img/features/resource.avif"
    },
    {
      title: "Verified User Profiles & Community Access",
      description: "Security and authenticity matter. Residents can create verified profiles based on their roles (e.g., Resident, Manager), ensuring only approved users gain access. This feature helps maintain a trusted and exclusive community, protecting residents from unauthorized access while enabling seamless interaction.",
      image: "/assets/img/features/verified.webp"
    },
    {
      title: "Safety Alerts & Maintenance Requests",
      description: "Stay informed and take action when it matters most. With real-time push notifications, residents can report safety concerns such as fire hazards or suspicious activities. The maintenance request system allows users to submit issues and track their status online, ensuring transparency and efficient problem resolution by building management.",
      image: "/assets/img/features/safety.png"
    },
    {
      title: "Event Calendar & Amenities Reservation",
      description: "Plan, participate, and stay updated with ease! The centralized community calendar allows residents to schedule and receive reminders for upcoming events, social gatherings, and wellness programs. Additionally, an integrated booking system lets users reserve shared amenities such as gyms, meeting rooms, and lounges for a more organized community experience.",
      image: "/assets/img/features/amenities.png"
    },
    {
      title: "Visitor Management with QR Code Access",
      description: "Say goodbye to outdated visitor logs! Our QR code-based visitor management system ensures a secure and hassle-free guest entry process. Residents can pre-register guests, generate unique QR codes, and enable security personnel to verify access instantly—enhancing both safety and convenience.",
      image: "/assets/img/features/visitor.jpg"
    },
    {
      title: "Verified Services Directory",
      description: "Finding reliable service providers has never been easier! The Verified Services Directory offers a curated list of trusted professionals, including electricians, plumbers, and cleaning services. Residents can browse reviews, book services, and ensure that only approved vendors operate within their community.",
      image: "/assets/img/features/service.jpg"
    },
    {
      title: "Community Forum for Discussions & Engagement",
      description: "Enhance communication and interaction among neighbors with a dedicated community forum. Discuss important topics, share concerns, exchange ideas, and collaborate on community-driven initiatives. This structured alternative to informal chat groups fosters a more connected and engaged residential experience.",
      image: "/assets/img/features/forum.webp"
    },
    {
      title: "Community Notices & Real-Time Updates",
      description: "Never miss an important announcement again! The Community Notices feature keeps residents updated on maintenance schedules, policy changes, and community-wide projects. Push notifications ensure that urgent alerts, such as water outages or security updates, reach everyone instantly.",
      image: "/assets/img/features/notices.jpg"
    }
  ];

  return (
    <section id="features" className="features"> {/* Added id="features" here */}
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Simplify Your Neighborhood with We Neighbour</h2>
          <p>We Neighbour simplifies neighborhood management with easy communication, event coordination, and real-time updates—helping you focus on building stronger, engaged communities.</p>
        </div>

        <div className="features-list">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-item"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="feature-content">
                <div className={`feature-image ${index % 2 !== 0 ? 'order-right' : ''}`}>
                  <img src={feature.image} alt={feature.title} loading="lazy" />
                </div>
                <div className={`feature-text ${index % 2 !== 0 ? 'order-left' : ''}`}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;