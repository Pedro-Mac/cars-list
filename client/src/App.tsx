import { link } from "fs";
import React, { useEffect, useState } from "react";

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
      <ul>
        {carsList?.map((item: carItem) => (
          <li>{item.BRAND}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
