import React from "react";
import { useNavigate } from "react-router-dom";
import Section from "../common/Section";
import { useTranslation } from "../../hooks/useTranslation";
import "./Portfolio.css";

const Portfolio = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const projectsData = [
    {
      id: 1,
      title: "Microservices E-Commerce Platform",
      description: "Scalable e-commerce backend with Spring Boot microservices, PostgreSQL, and Redis caching",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
      ],
      tech: ["Spring Boot", "Java", "PostgreSQL", "Redis", "Docker"],
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "REST API Gateway Service",
      description: "High-performance API gateway with rate limiting, authentication, and request routing",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&sat=-100",
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop"
      ],
      tech: ["Node.js", "TypeScript", "MongoDB", "JWT"],
      github: "#",
      live: "#",
    },
    {
      id: 3,
      title: "Real-Time Analytics Dashboard",
      description: "Full-stack analytics platform with Django backend and React frontend for data visualization",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&hue=180"
      ],
      tech: ["Django", "Python", "React", "PostgreSQL", "WebSocket"],
      github: "#",
      live: "#",
    },
    {
      id: 4,
      title: "Task Management System",
      description: "Enterprise task management API with role-based access control and notification system",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop"
      ],
      tech: ["Spring Boot", "MySQL", "React", "Docker"],
      github: "#",
      live: "#",
    },
    {
      id: 5,
      title: "Payment Processing Service",
      description: "Secure payment integration service with transaction logging and webhook management",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=600&fit=crop"
      ],
      tech: ["Node.js", "PostgreSQL", "Stripe API", "Docker"],
      github: "#",
      live: "#",
    },
    {
      id: 6,
      title: "Inventory Management System",
      description: "Full-stack inventory tracking system with automated restocking alerts and reporting",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
      ],
      tech: ["Django", "React", "PostgreSQL", "Celery"],
      github: "#",
      live: "#",
    },
  ];

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <Section id="portfolio" title={t('portfolio.title')} subtitle="Recent software projects and applications">
      <div className="portfolio__content grid">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="portfolio__card"
            onClick={() => handleProjectClick(project.id)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleProjectClick(project.id)}
          >
            <div className="portfolio__card-image">
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="portfolio__card-overlay">
                <i className="uil uil-eye portfolio__view-icon"></i>
                <span className="portfolio__view-text">View Details</span>
              </div>
            </div>

            <div className="portfolio__card-content">
              <h3 className="portfolio__card-title">{project.title}</h3>
              <p className="portfolio__card-description">{project.description}</p>

              <div className="portfolio__card-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="portfolio__tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
