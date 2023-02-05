import React from "react";

const Advertisement = () => {
  return (
    <div className="advertisement-page">
      <h1 className="advertisement-page__title">Advertisement Services</h1>
      <p className="advertisement-page__intro">
        At End-to-End Solutions, we offer a wide range of advertising services
        to help our clients reach their target audience and increase their
        online visibility.
      </p>
      <div className="advertisement-page__services">
        <div className="advertisement-page__services-item">
          <h2 className="advertisement-page__services-item-title">
            Google and Facebook Ad Campaigns
          </h2>
          <p className="advertisement-page__services-item-desc">
            Our ad campaign services include creating and managing effective
            Google and Facebook ad campaigns. We work closely with our clients
            to understand their target audience and create ads that effectively
            reach and convert them.
          </p>
        </div>
        <div className="advertisement-page__services-item">
          <h2 className="advertisement-page__services-item-title">
            Social Media Marketing
          </h2>
          <p className="advertisement-page__services-item-desc">
            Our social media marketing services include developing and
            implementing effective social media marketing strategies. We help
            our clients increase their online presence and engagement with their
            target audience.
          </p>
        </div>
      </div>
      <p className="advertisement-page__cta">
        Thank you for considering our services. Please feel free to{" "}
        <a className="advertisement-page__cta-link" href="#">
          contact us
        </a>{" "}
        for more information or to request a quote.
      </p>
    </div>
  );
};

export default Advertisement;
