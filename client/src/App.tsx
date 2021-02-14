import React, { useEffect, useState } from "react";

import CarsList from "./containers/CarsList";
import Sorter from "./components/Sorter";

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
  const [sortingDirection, setSortingDirection] = useState("ascending");
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    const body = { sorting: sortingDirection, filters };
    getCarsList(body).then(response => {
      const { orderedList } = response.data;
      setCarsList(orderedList);
    });
  }, [sortingDirection, filters]);

  return (
    <div className="App">
      <Sorter handleSorting={setSortingDirection} />
      <CarsList carsList={carsList} />
    </div>
  );
};

export default App;
