import React from "react";
import { Link } from "react-router-dom";
const WebDevelopment = () => {
  return (
    <div className="webdevelopment-page">
      <h1 className="webdevelopment-page__title">Web Development Services</h1>
      <p className="webdevelopment-page__intro">
        We offer a wide range of services for web development, including
        building and maintaining custom websites, web applications, and
        e-commerce platforms. We use the latest technologies and industry best
        practices to deliver high-quality, responsive, and user-friendly
        websites.
      </p>
      <div className="webdevelopment-page__services">
        <div className="webdevelopment-page__services-item">
          <h2 className="webdevelopment-page__services-item-title">
            Website Design and Development
          </h2>
          <p className="webdevelopment-page__services-item-desc">
            Our website design and development services include creating custom
            website designs tailored to your unique needs and goals. We use the
            latest web technologies and design trends to create visually
            appealing and user-friendly websites.
          </p>
        </div>
        <div className="webdevelopment-page__services-item">
          <h2 className="webdevelopment-page__services-item-title">
            Web Application Development
          </h2>
          <p className="webdevelopment-page__services-item-desc">
            Our web application development services include creating powerful
            and dynamic web applications. We use popular frameworks such as
            React and Node.js to build high-performance web applications that
            meet your specific needs.
          </p>
        </div>
        <div className="webdevelopment-page__services-item">
          <h2 className="webdevelopment-page__services-item-title">
            E-commerce Platform Development
          </h2>
          <p className="webdevelopment-page__services-item-desc">
            Our e-commerce platform development services include building custom
            e-commerce platforms to help you sell your products or services
            online. We use popular technologies such as MongoDB to build
            scalable and secure e-commerce solutions.
          </p>
        </div>
      </div>
      <p className="webdevelopment-page__cta">
        Thank you for considering our services. Please feel free to{" "}
        <Link to="/contact">contact us</Link> for more information or to request
        a quote.
      </p>
    </div>
  );
};

export default WebDevelopment;
