import React from "react";
import "./Illustration.css";

/**
 * Reusable Illustration component for displaying SVG images
 * Follows React best practices with accessibility and performance optimization
 *
 * @component
 * @param {Object} props
 * @param {string} props.src - URL of the image (required)
 * @param {string} props.alt - Alternative text for accessibility (required)
 * @param {string} [props.maxWidth="500px"] - Maximum width of the illustration
 * @param {string} [props.className=""] - Additional CSS classes
 * @param {boolean} [props.priority=false] - Load image eagerly (for above-fold images)
 *
 * @example
 * <Illustration
 *   src="https://example.com/image.svg"
 *   alt="Description for screen readers"
 *   maxWidth="500px"
 * />
 */
const Illustration = ({
  src,
  alt,
  maxWidth = "500px",
  className = "",
  priority = false
}) => {
  if (!src || !alt) {
    console.warn('Illustration component requires src and alt props');
    return null;
  }

  return (
    <div
      className={`illustration ${className}`}
      style={{ maxWidth }}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className="illustration__image"
      />
    </div>
  );
};

export default Illustration;
