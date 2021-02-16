import React from "react";

import "./CardHeader";
import CardHeader from "./CardHeader";
import CardMileage from "./CardMileage";

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
      <CardMileage minMileage={minMileage} maxMileage={maxMileage} />
    </div>
  );
};

export default Card;
