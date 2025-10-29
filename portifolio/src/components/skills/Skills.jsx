import React from "react";
import Section from "../common/Section";
import "./Skills.css";

const Skills = () => {
  const skillsData = [
    {
      category: "Backend Development",
      icon: "uil-server",
      skills: [
        { name: "Java", level: "Advanced" },
        { name: "Spring Boot", level: "Advanced" },
        { name: "Python", level: "Advanced" },
        { name: "Django", level: "Advanced" },
        { name: "Node.js", level: "Advanced" },
        { name: "REST API", level: "Advanced" },
        { name: "GraphQL", level: "Intermediate" },
        { name: "Microservices", level: "Advanced" },
      ],
    },
    {
      category: "Frontend Development",
      icon: "uil-react",
      skills: [
        { name: "TypeScript", level: "Advanced" },
        { name: "React", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "HTML5", level: "Advanced" },
        { name: "CSS3", level: "Advanced" },
        { name: "Responsive Design", level: "Advanced" },
      ],
    },
    {
      category: "Databases",
      icon: "uil-database",
      skills: [
        { name: "PostgreSQL", level: "Advanced" },
        { name: "MySQL", level: "Advanced" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "Redis", level: "Intermediate" },
      ],
    },
    {
      category: "Tools & DevOps",
      icon: "uil-wrench",
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Docker", level: "Intermediate" },
        { name: "IntelliJ IDEA", level: "Advanced" },
        { name: "VS Code", level: "Advanced" },
        { name: "Postman", level: "Advanced" },
        { name: "Maven", level: "Advanced" },
        { name: "Gradle", level: "Intermediate" },
        { name: "Jenkins", level: "Intermediate" },
        { name: "Linux", level: "Intermediate" },
      ],
    },
  ];

  return (
    <Section id="skills" title="Skills" subtitle="Full-stack engineer with backend expertise">
      <div className="skills__content grid">
        {skillsData.map((skillGroup) => (
          <div key={skillGroup.category} className="skills__group">
            <div className="skills__group-header">
              <div className="skills__icon-wrapper">
                <i className={`uil ${skillGroup.icon} skills__group-icon`}></i>
              </div>
              <h3 className="skills__group-title">{skillGroup.category}</h3>
            </div>
            <div className="skills__list">
              {skillGroup.skills.map((skill) => (
                <div key={skill.name} className="skill__item">
                  <span className="skill__name">{skill.name}</span>
                  <span className={`skill__level skill__level--${skill.level.toLowerCase()}`}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
