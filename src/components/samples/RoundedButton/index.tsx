import React from "react";

interface RoundedButtonProps {
  color: string;
  style?: React.CSSProperties;
  onClick: () => void;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
  color, style,
  onClick,
  children,
}) => (
  <button
    type="button"
    className="RoundedButton"
    style={{
      backgroundColor: color,
      ...style,
    }}
    onClick={() => onClick()}
  >
    {children}
  </button>
);

RoundedButton.defaultProps = {
  style: undefined,
};

export default RoundedButton;
