export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-header">Welcome to Web Craft Studios</h1>
      <p className="about-description">
        We are a full-service creative agency offering web development,
        advertisement, and graphic design services. Our goal is to help our
        clients grow their online presence and reach their target audience
        through innovative and effective solutions.
      </p>
      <div className="services-container">
        <div className="web-development">
          <h2 className="service-header">Web Development</h2>
          <p className="service-description">
            Our web development services include the creation and maintenance of
            custom websites, web applications, and e-commerce platforms. We use
            the latest technologies and industry best practices to deliver
            high-quality, responsive, and user-friendly solutions.
          </p>
        </div>
        <div className="advertising">
          <h2 className="service-header">Advertisement</h2>
          <p className="service-description">
            Our advertising services include the creation and management of
            Google and Facebook ad campaigns, as well as the development and
            implementation of social media marketing strategies. We help our
            clients reach their target audience and increase their online
            visibility.
          </p>
        </div>
        <div className="graphic-design">
          <h2 className="service-header">Graphic Design</h2>
          <p className="service-description">
            Our graphic design services include creating logos, brochures,
            business cards, and other marketing materials. We work with our
            clients to understand their brand and create visually appealing
            designs that effectively communicate their message.
          </p>
        </div>
      </div>
      <p className="about-contact">
        Thank you for considering our services. Please feel free to contact us
        for more information or to request a quote.
      </p>
    </div>
  );
}
