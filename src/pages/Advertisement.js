import React from "react";
import { Link } from "react-router-dom";
const Advertisement = () => {
  return (
    <div className="container advertisement-page">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="advertisement-page__title">Advertisement Services</h1>
          <p className="advertisement-page__intro">
            At End-to-End Solutions, we offer a wide range of advertising
            services to help our clients reach their target audience and
            increase their online visibility.
          </p>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h2 className="advertisement-page__services-item-title text-center">
                Google and Facebook Ad Campaigns
              </h2>
              <p className="advertisement-page__services-item-desc text-center">
                Our ad campaign services include creating and managing effective
                Google and Facebook ad campaigns. We work closely with our
                clients to understand their target audience and create ads that
                effectively reach and convert them.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h2 className="advertisement-page__services-item-title text-center">
                Social Media Marketing
              </h2>
              <p className="advertisement-page__services-item-desc text-center">
                Our social media marketing services include developing and
                implementing effective social media marketing strategies. We
                help our clients increase their online presence and engagement
                with their target audience.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h2 className="advertisement-page__services-item-title text-center">
                Content Marketing
              </h2>
              <p className="advertisement-page__services-item-desc text-center">
                Our content marketing services focus on creating and
                distributing valuable, relevant, and consistent content to
                attract and retain a clearly-defined target audience and
                ultimately drive profitable customer action.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 text-center">
        <p className="advertisement-page__cta">
          Thank you for considering our services. Please feel free to{" "}
          <Link to="/contact">contact us</Link> for more information or to
          request a quote.
        </p>
      </div>
    </div>
  );
};

export default Advertisement;
