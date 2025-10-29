import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Project data - should match the data from Portfolio.jsx
  const projectsData = {
    1: {
      id: 1,
      title: "Microservices E-Commerce Platform",
      description: "Scalable e-commerce backend with Spring Boot microservices, PostgreSQL, and Redis caching",
      fullDescription: "A comprehensive e-commerce platform built with microservices architecture. The system includes separate services for user management, product catalog, order processing, and payment handling. Implemented API gateway for routing and load balancing, with Redis for session management and caching to ensure high performance.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
      ],
      tech: ["Spring Boot", "Java", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
      features: [
        "Microservices architecture with service discovery",
        "RESTful API design with comprehensive documentation",
        "PostgreSQL database with optimized indexing",
        "Redis caching for improved performance",
        "JWT-based authentication and authorization",
        "Docker containerization and Kubernetes orchestration",
        "CI/CD pipeline with automated testing",
        "Scalable to handle thousands of concurrent users"
      ],
      github: "#",
      live: "#",
      role: "Backend Lead Developer",
      duration: "6 months",
    },
    2: {
      id: 2,
      title: "REST API Gateway Service",
      description: "High-performance API gateway with rate limiting, authentication, and request routing",
      fullDescription: "An advanced API gateway service designed to handle high-traffic enterprise applications. Features include intelligent request routing, rate limiting per client, JWT authentication, request/response transformation, and comprehensive logging. Built with Node.js for superior performance and scalability.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&sat=-100",
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop"
      ],
      tech: ["Node.js", "TypeScript", "MongoDB", "JWT", "Express", "Redis"],
      features: [
        "Intelligent request routing and load balancing",
        "Rate limiting with Redis-based storage",
        "JWT authentication and token validation",
        "Request/response transformation middleware",
        "Comprehensive logging and monitoring",
        "API versioning support",
        "Circuit breaker pattern implementation",
        "WebSocket support for real-time communication"
      ],
      github: "#",
      live: "#",
      role: "Full-Stack Developer",
      duration: "4 months",
    },
    3: {
      id: 3,
      title: "Real-Time Analytics Dashboard",
      description: "Full-stack analytics platform with Django backend and React frontend for data visualization",
      fullDescription: "A powerful analytics dashboard providing real-time insights into business metrics. The Django backend processes and aggregates data from multiple sources, while the React frontend presents interactive visualizations. Features WebSocket integration for live updates and comprehensive filtering capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&hue=180"
      ],
      tech: ["Django", "Python", "React", "PostgreSQL", "WebSocket", "Chart.js", "Celery"],
      features: [
        "Real-time data updates via WebSocket",
        "Interactive charts and visualizations",
        "Custom dashboard builder interface",
        "Advanced filtering and aggregation",
        "Scheduled report generation with Celery",
        "Role-based access control",
        "Data export in multiple formats (CSV, PDF, Excel)",
        "Responsive design for mobile and desktop"
      ],
      github: "#",
      live: "#",
      role: "Full-Stack Developer",
      duration: "5 months",
    },
    4: {
      id: 4,
      title: "Task Management System",
      description: "Enterprise task management API with role-based access control and notification system",
      fullDescription: "An enterprise-grade task management system designed for team collaboration. Built with Spring Boot, it features hierarchical task organization, real-time notifications, file attachments, and comprehensive audit logging. The system supports multiple teams and projects with granular permission controls.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop"
      ],
      tech: ["Spring Boot", "MySQL", "React", "Docker", "WebSocket", "JWT"],
      features: [
        "Hierarchical task and subtask management",
        "Role-based access control (RBAC)",
        "Real-time notifications and updates",
        "File attachment support with cloud storage",
        "Task templates and recurring tasks",
        "Team collaboration features",
        "Comprehensive audit logging",
        "Email notifications and reminders"
      ],
      github: "#",
      live: "#",
      role: "Backend Developer",
      duration: "4 months",
    },
    5: {
      id: 5,
      title: "Payment Processing Service",
      description: "Secure payment integration service with transaction logging and webhook management",
      fullDescription: "A robust payment processing service integrating multiple payment providers including Stripe and PayPal. Features secure transaction handling, webhook management for payment events, comprehensive transaction logging, and automated reconciliation. Built with security and compliance as top priorities.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=600&fit=crop"
      ],
      tech: ["Node.js", "PostgreSQL", "Stripe API", "Docker", "TypeScript", "Express"],
      features: [
        "Multiple payment provider integration",
        "PCI-DSS compliant implementation",
        "Webhook event handling and processing",
        "Transaction logging and reconciliation",
        "Refund and chargeback management",
        "Fraud detection integration",
        "Automated retry logic for failed payments",
        "Detailed transaction reporting"
      ],
      github: "#",
      live: "#",
      role: "Backend Developer",
      duration: "3 months",
    },
    6: {
      id: 6,
      title: "Inventory Management System",
      description: "Full-stack inventory tracking system with automated restocking alerts and reporting",
      fullDescription: "A comprehensive inventory management system for retail and warehouse operations. Features real-time inventory tracking, automated restock alerts, barcode scanning integration, and detailed reporting. The system helps businesses maintain optimal stock levels and reduce waste through predictive analytics.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
      ],
      tech: ["Django", "React", "PostgreSQL", "Celery", "Redis", "REST API"],
      features: [
        "Real-time inventory tracking",
        "Automated restock alerts and suggestions",
        "Barcode scanning integration",
        "Multi-location inventory management",
        "Stock movement history and audit trail",
        "Predictive analytics for demand forecasting",
        "Automated report generation",
        "Supplier management integration"
      ],
      github: "#",
      live: "#",
      role: "Full-Stack Developer",
      duration: "5 months",
    },
  };

  const project = projectsData[id];

  if (!project) {
    return (
      <div className="project-detail">
        <div className="project-detail__container container">
          <div className="project-detail__not-found">
            <h1>Project Not Found</h1>
            <button onClick={() => navigate('/')} className="button button--primary">
              Go Back Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="project-detail__container container">
        <button onClick={() => navigate('/')} className="project-detail__back-btn">
          <i className="uil uil-arrow-left"></i> Back to Portfolio
        </button>

        <div className="project-detail__header">
          <h1 className="project-detail__title">{project.title}</h1>
          <p className="project-detail__subtitle">{project.description}</p>

          <div className="project-detail__meta">
            <div className="meta__item">
              <i className="uil uil-user"></i>
              <span>{project.role}</span>
            </div>
            <div className="meta__item">
              <i className="uil uil-clock"></i>
              <span>{project.duration}</span>
            </div>
          </div>
        </div>

        <div className="project__images-grid">
          {project.images.map((image, index) => (
            <div key={index} className="project__image-item">
              <img
                src={image}
                alt={`${project.title} - Screenshot ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="project-detail__content">
          <section className="detail-section">
            <h2 className="section__title">Project Overview</h2>
            <p className="section__text">{project.fullDescription}</p>
          </section>

          <section className="detail-section">
            <h2 className="section__title">Technologies Used</h2>
            <div className="tech-stack">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-stack__item">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="detail-section">
            <h2 className="section__title">Key Features</h2>
            <ul className="features-list">
              {project.features.map((feature, index) => (
                <li key={index} className="features-list__item">
                  <i className="uil uil-check"></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="project-links">
            <a href={project.github} className="button button--primary" target="_blank" rel="noopener noreferrer">
              <i className="uil uil-github"></i> View on GitHub
            </a>
            <a href={project.live} className="button button--ghost" target="_blank" rel="noopener noreferrer">
              <i className="uil uil-external-link-alt"></i> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
