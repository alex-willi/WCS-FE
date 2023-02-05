import "../styles/home.css";
import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="welcome-page">
      <h1 className="welcome-page__title">Welcome to Web Craft Studios</h1>
      <p className="welcome-page__intro">
        We offer a wide range of services for web development, advertisement,
        and graphic design.
      </p>
      <div className="welcome-page__services">
        <div className="welcome-page__services-item">
          <Link to="/webdevelopment" className="web-service-link">
            <h2>Web Development</h2>
            <p className="welcome-page__services-item-desc">
              Our web development services include building and maintaining
              custom websites, web applications, and e-commerce platforms. We
              use the latest technologies and industry best practices to deliver
              high-quality, responsive, and user-friendly websites.
            </p>
          </Link>
        </div>
        <div className="welcome-page__services-item">
          <Link to="/advertisement" className="advertisement-link">
            <h2 className="welcome-page__services-item-title">Advertisement</h2>
            <p className="welcome-page__services-item-desc">
              Our advertising services include creating and managing Google and
              Facebook ad campaigns, as well as developing and implementing
              social media marketing strategies. We help our clients reach their
              target audience and increase their online visibility.
            </p>
          </Link>
        </div>
        <div className="welcome-page__services-item">
          <Link to="/graphicdesign" className="graphicdesign-link">
            <h2 className="welcome-page__services-item-title">
              Graphic Design
            </h2>
            <p className="welcome-page__services-item-desc">
              Our graphic design services include creating logos, brochures,
              business cards, and other marketing materials. We work with our
              clients to understand their brand and create visually appealing
              designs that effectively communicate their message.
            </p>
          </Link>
        </div>
      </div>
      <p className="welcome-page__cta">
        Thank you for considering our services. Please feel free to contact us
        for more information or to request a quote.
      </p>
      <Link to="/contact">Contact Us</Link>
    </div>
  );
};

export default Home;
