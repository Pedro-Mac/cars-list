import React, { useEffect, useState } from "react";

import Card from "./components/Card";

import "./App.css";

import { getCarsList } from "./services/cars";

interface carItem {
  _id: string;
  BRAND: string;
  MODEL: string;
  DEALER: string;
  MIN_MILEAGE: number;
  MAX_MILEAGE: number;
}

const App: React.FC = () => {
  const [carsList, setCarsList] = useState<carItem[]>();
  useEffect(() => {
    getCarsList.then(response => {
      const { orderedList } = response.data;
      setCarsList(orderedList);
    });
  });
  return (
    <div className="App">
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
    </div>
  );
};

export default App;
