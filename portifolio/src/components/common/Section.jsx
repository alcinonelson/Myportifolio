import React from "react";
import "./Section.css";

/**
 * Reusable Section wrapper component
 * Provides consistent section structure with title and subtitle
 *
 * @component
 * @example
 * <Section id="about" title="About Me" subtitle="Get to know me">
 *   <p>Section content here</p>
 * </Section>
 */
const Section = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        {(title || subtitle) && (
          <div className="section__header">
            {title && <h2 className="section__title">{title}</h2>}
            {subtitle && <p className="section__subtitle">{subtitle}</p>}
          </div>
        )}
        <div className="section__content">{children}</div>
      </div>
    </section>
  );
};

export default Section;
