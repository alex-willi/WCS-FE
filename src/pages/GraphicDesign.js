import React from "react";
import { Link } from "react-router-dom";
const GraphicDesign = () => {
  return (
    <div className="container graphic-design-page">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="graphic-design-page__title">
            Graphic Design Services
          </h1>
          <p className="graphic-design-page__intro">
            At End-to-End Solutions, we offer a wide range of graphic design
            services to help our clients effectively communicate their message
            and stand out in their industry.
          </p>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h2 className="graphic-design-page__services-item-title text-center">
                Logo Design
              </h2>
              <p className="graphic-design-page__services-item-desc text-center">
                Our logo design services include creating unique and memorable
                logos that effectively represent your brand. We work closely
                with our clients to understand their vision and create a logo
                that accurately reflects their company's values and mission.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h2 className="graphic-design-page__services-item-title text-center">
                Brochure Design
              </h2>
              <p className="graphic-design-page__services-item-desc text-center">
                Our brochure design services include creating visually appealing
                brochures that effectively communicate your message. We work
                with our clients to understand their target audience and create
                a design that is both informative and engaging.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h2 className="graphic-design-page__services-item-title text-center">
                Business Card Design
              </h2>
              <p className="graphic-design-page__services-item-desc text-center">
                Our business card design services include creating professional
                and unique business cards that accurately reflect your brand. We
                work closely with our clients to create a design that stands out
                and effectively communicates your contact information.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 text-center">
        <p className="graphic-design-page__cta">
          Thank you for considering our services. Please feel free to{" "}
          <Link to="/contact">contact us</Link> for more information or to
          request a quote.
        </p>
      </div>
    </div>
  );
};

export default GraphicDesign;
