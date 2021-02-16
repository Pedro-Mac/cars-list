import React from "react";
import "./style.css";
interface cardMileageProps {
  minMileage: number;
  maxMileage: number;
}

const CardMileage: React.FC<cardMileageProps> = ({
  minMileage,
  maxMileage
}) => {
  return (
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
  );
};

export default CardMileage;
