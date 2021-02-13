import React from "react";

import "./CardHeader";
import CardHeader from "./CardHeader";

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
      <CardHeader brand={brand} model={model} />
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
