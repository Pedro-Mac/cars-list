import React from "react";
import "./style.css";
interface buttonProps {
  text: string;
  className?: string;
  handleClick?: () => void;
}

const Button: React.FC<buttonProps> = ({
  text,
  handleClick,
  className = ""
}) => {
  return (
    <button onClick={handleClick} className={className || ""}>
      {text}
    </button>
  );
};

export default Button;
