import React from "react";
import "./Button.css";

/**
 * Reusable Button component with multiple variants
 *
 * @component
 * @example
 * <Button variant="primary" size="lg" href="#portfolio">View My Work</Button>
 *
 * @param {string} [variant='primary'] - Button style variant: 'primary', 'secondary', 'outline'
 * @param {string} [size='md'] - Button size: 'sm', 'md', 'lg'
 * @param {string} [type='button'] - HTML button type
 * @param {string} [href] - Link URL (renders as <a> tag if provided)
 * @param {React.ReactNode} children - Button content
 * @param {Function} [onClick] - Click handler
 * @param {string} [className] - Additional CSS classes
 * @param {boolean} [disabled] - Button disabled state
 */
const Button = ({
  variant = "primary",
  size = "md",
  type = "button",
  href,
  children,
  onClick,
  className = "",
  disabled = false,
  ...props
}) => {
  const buttonClass = `button button--${variant} button--${size} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={buttonClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
