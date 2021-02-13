import React from "react";

import "./style.css";

interface cardProps {
  brand: string;
  model: string;
  dealer: string;
  maxMileage: number;
  minMileage: number;
}

const Card: React.FC<cardProps> = ({
  brand,
  model,
  dealer,
  maxMileage,
  minMileage
}) => {
  return (
    <div className="card--container">
      <div className="card--header-container">
        <h3 className="card--header-title">{brand}</h3>
        <p className="card--header-subtitle">{model}</p>
      </div>
      <p className="card--dealer">{dealer}</p>
      <div className="card--mileage-container">
        <p>Mileage</p>
        <div className="card--milage-group">
          <p className="card--milage-element">
            <span>Min:</span> {minMileage}
          </p>
          <p className="card--milage-element">
            <span>Max:</span> {maxMileage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
