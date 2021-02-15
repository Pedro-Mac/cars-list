import React from "react";

import Card from "../../components/Card";

import "./styles.css";

import { carItem, carsListProps } from "./types";

const CarsList: React.FC<carsListProps> = ({ carsList }) => {
  return (
    <article>
      {carsList?.map((item: carItem) => {
        const { BRAND, DEALER, MODEL, MAX_MILEAGE, MIN_MILEAGE, _id } = item;
        return (
          <Card
            brand={BRAND}
            dealer={DEALER}
            model={MODEL}
            maxMileage={MAX_MILEAGE}
            minMileage={MIN_MILEAGE}
            key={_id}
          />
        );
      })}
    </article>
  );
};

export default CarsList;
