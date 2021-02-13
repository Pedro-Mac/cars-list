import React from "react";
import "./style.css";

interface cardHeaderProps {
  brand: string;
  model: string;
}

const CardHeader: React.FC<cardHeaderProps> = ({ brand, model }) => {
  return (
    <div className="card--header-container">
      <h3 className="card--header-title">{brand}</h3>
      <p className="card--header-subtitle">{model}</p>
    </div>
  );
};

export default CardHeader;
