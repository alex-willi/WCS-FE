import React from "react";
import { Link } from "react-router-dom";
const WebDevelopment = () => {
  return (
    <div className="container webdevelopment-page">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="webdevelopment-page__title">
            Web Development Services
          </h1>
          <p className="webdevelopment-page__intro">
            We offer a wide range of services for web development, including
            building and maintaining custom websites, web applications, and
            e-commerce platforms. We use the latest technologies and industry
            best practices to deliver high-quality, responsive, and
            user-friendly websites.
          </p>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h2 className="webdevelopment-page__services-item-title text-center">
                Website Design and Development
              </h2>
              <p className="webdevelopment-page__services-item-desc text-center">
                Our website design and development services include creating
                custom website designs tailored to your unique needs and goals.
                We use the latest web technologies and design trends to create
                visually appealing and user-friendly websites.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h2 className="webdevelopment-page__services-item-title text-center">
                Web Application Development
              </h2>
              <p className="webdevelopment-page__services-item-desc text-center">
                Our web application development services include creating
                powerful and dynamic web applications. We use popular frameworks
                such as React and Node.js to build high-performance web
                applications that meet your specific needs.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h2 className="webdevelopment-page__services-item-title text-center">
                E-commerce Platform Development
              </h2>
              <p className="webdevelopment-page__services-item-desc text-center">
                Our e-commerce platform development services include building
                custom e-commerce platforms to help you sell your products or
                services online. We use popular technologies such as MongoDB to
                build scalable and secure e-commerce solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 text-center">
          <p className="webdevelopment-page__cta">
            Thank you for considering our services. Please feel free to{" "}
            <Link to="/contact">contact us</Link> for more information or to
            request a quote.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
