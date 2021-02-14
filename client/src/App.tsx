import React, { useEffect, useState } from "react";

import CarsList from "./containers/CarsList";

import { getCarsList } from "./services/cars";

import "./App.css";

interface carItem {
  _id: string;
  BRAND: string;
  MODEL: string;
  DEALER: string;
  MIN_MILEAGE: number;
  MAX_MILEAGE: number;
}

const App: React.FC = () => {
  const [carsList, setCarsList] = useState<carItem[]>([]);

  useEffect(() => {
    getCarsList.then(response => {
      const { orderedList } = response.data;
      setCarsList(orderedList);
    });
  });

  return (
    <div className="App">
      <CarsList carsList={carsList} />
    </div>
  );
};

export default App;
