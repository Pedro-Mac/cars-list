import React from "react";

import Card from "../../components/Card";

import "./styles.css";

import { carItem, carsListProps } from "./types";

const CarsList: React.FC<carsListProps> = ({ carsList }) => {
  return (
    <article>
      {carsList.map((item: carItem, index) => {
        const { BRAND, DEALER, MODEL, MAX_MILEAGE, MIN_MILEAGE } = item;
        return (
          <Card
            brand={BRAND}
            dealer={DEALER}
            model={MODEL}
            maxMileage={MAX_MILEAGE}
            minMileage={MIN_MILEAGE}
            key={index}
          />
        );
      })}
    </article>
  );
};

export default CarsList;
