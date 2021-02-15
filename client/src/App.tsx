import React, { useEffect, useState, useMemo } from "react";

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

interface filterItem {
  filter: string;
  isActive: boolean;
}

const App: React.FC = () => {
  const [carsList, setCarsList] = useState<carItem[]>([]);
  const [sortingDirection, setSortingDirection] = useState("ascending");
  const [filters, setFilters] = useState<filterItem[]>([]);

  useEffect(() => {
    const body = { sorting: sortingDirection, filters };
    getCarsList(body).then(response => {
      const { orderedList, filters } = response.data;

      setCarsList(orderedList);
      setFilters(filters);
    });
  }, [sortingDirection]);

  return (
    <div className="App">
      <form>
        <input type="checkbox" />
      </form>
      {filters.map(item => (
        <p>{item.filter}</p>
      ))}
      {carsList.length ? <Sorter handleSorting={setSortingDirection} /> : ""}
      <CarsList carsList={carsList} />
    </div>
  );
};

export default App;
