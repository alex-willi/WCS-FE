import "../styles/home.css";
import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="container h-100">
      <div className="row h-100 align-items-center">
        <div className="col-md-8 mx-auto text-center">
          <h1 className="welcome-page__title">Welcome to Web Craft Studios</h1>
          <p className="welcome-page__intro">
            We offer a wide range of services for web development,
            advertisement, and graphic design.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-8 mx-auto">
          <div className="card-deck">
            <div className="card mb-5">
              <Link to="/webdevelopment" className="web-service-link">
                <div className="card-body">
                  <h2 className="card-title">Web Development</h2>
                  <p className="card-text">
                    Our web development services include building and
                    maintaining custom websites, web applications, and
                    e-commerce platforms. We use the latest technologies and
                    industry best practices to deliver high-quality, responsive,
                    and user-friendly websites.
                  </p>
                </div>
              </Link>
            </div>
            <div className="card mb-5">
              <Link to="/advertisement" className="advertisement-link">
                <div className="card-body">
                  <h2 className="card-title">Advertisement</h2>
                  <p className="card-text">
                    Our advertising services include creating and managing
                    Google and Facebook ad campaigns, as well as developing and
                    implementing social media marketing strategies. We help our
                    clients reach their target audience and increase their
                    online visibility.
                  </p>
                </div>
              </Link>
            </div>
            <div className="card mb-5">
              <Link to="/graphicdesign" className="graphicdesign-link">
                <div className="card-body">
                  <h2 className="card-title">Graphic Design</h2>
                  <p className="card-text">
                    Our graphic design services include creating logos,
                    brochures, business cards, and other marketing materials. We
                    work with our clients to understand their brand and create
                    visually appealing designs that effectively communicate
                    their message.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row h-100 align-items-center">
        <div className="col-md-8 mx-auto text-center">
          <p className="welcome-page__cta">
            Thank you for considering our services. Please feel free to contact
            us for more information or to request a quote.
          </p>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
