import React from "react";

import mapModifiers from "utils/functions";

interface ButtonProps {
  name?: string;
  type?: "button" | "submit",
  theme?: "primary" | "secondary" | "gradient" | "text";
  transform?: "uppercase" | "capitalize" | "lowercase";
  disabled?: boolean;
  handleClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  name,
  type,
  disabled,
  theme,
  transform,
  children,
  handleClick,
}) => (
  <button
    type={type}
    className={mapModifiers(
      "a-button",
      theme,
      transform,
    )}
    name={name}
    disabled={disabled}
    onClick={handleClick}
  >
    {children}
  </button>
);

Button.defaultProps = {
  type: "button",
  theme: "primary",
  transform: "uppercase",
};

export default Button;
