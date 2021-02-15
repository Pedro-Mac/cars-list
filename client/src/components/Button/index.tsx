import React from "react";
import "./style.css";
interface buttonProps {
  text: string;
}

const Button: React.FC<buttonProps> = ({ text }) => {
  return <button className="button--submit">{text}</button>;
};

export default Button;
