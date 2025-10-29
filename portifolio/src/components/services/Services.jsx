import React from "react";
import Section from "../common/Section";
import "./Services.css";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Backend Development",
      description:
        "Design and develop robust, scalable server-side applications using Java, Spring Boot, Python, Django, and Node.js with microservices architecture.",
      icon: "uil-server-network",
    },
    {
      id: 2,
      title: "API Design & Development",
      description:
        "Create RESTful and GraphQL APIs with comprehensive documentation, security best practices, and optimal performance.",
      icon: "uil-channel",
    },
    {
      id: 3,
      title: "Database Architecture",
      description:
        "Design and optimize database schemas, implement efficient queries, and ensure data integrity using PostgreSQL, MySQL, and NoSQL solutions.",
      icon: "uil-database",
    },
    {
      id: 4,
      title: "Full-Stack Applications",
      description:
        "Build end-to-end software solutions integrating React frontends with powerful backend systems for complete business applications.",
      icon: "uil-layers",
    },
    {
      id: 5,
      title: "System Architecture",
      description:
        "Design scalable, maintainable system architectures with containerization (Docker), cloud deployment, and DevOps best practices.",
      icon: "uil-sitemap",
    },
    {
      id: 6,
      title: "Technical Consulting",
      description:
        "Provide expert guidance on technology stack selection, system design, code reviews, and performance optimization for your software projects.",
      icon: "uil-lightbulb-alt",
    },
  ];

  return (
    <Section id="services" title="Services" subtitle="Software development and engineering solutions">
      <div className="services__content grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service__card">
            <div className="service__icon-wrapper">
              <i className={`uil ${service.icon} service__icon`}></i>
            </div>
            <h3 className="service__title">{service.title}</h3>
            <p className="service__description">{service.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
