import React, { useState, useEffect } from "react";

import { getCarsList } from "../../services/cars";

import Card from "../../components/Card";

import "./styles.css";

interface carItem {
  _id: string;
  BRAND: string;
  MODEL: string;
  DEALER: string;
  MIN_MILEAGE: number;
  MAX_MILEAGE: number;
}

const CarsList: React.FC = () => {
  const [carsList, setCarsList] = useState<carItem[]>();

  useEffect(() => {
    getCarsList.then(response => {
      const { orderedList } = response.data;
      setCarsList(orderedList);
    });
  });
  return (
    <article>
      {carsList?.map((item: carItem) => {
        const { BRAND, DEALER, MODEL, MAX_MILEAGE, MIN_MILEAGE } = item;
        return (
          <Card
            brand={BRAND}
            dealer={DEALER}
            model={MODEL}
            maxMileage={MAX_MILEAGE}
            minMileage={MIN_MILEAGE}
          />
        );
      })}
    </article>
  );
};

export default CarsList;
