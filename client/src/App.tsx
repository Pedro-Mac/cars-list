import React, { useEffect, useState } from "react";

import CarsList from "./containers/CarsList";
import Sorter from "./components/Sorter";
import FilterInput from "./components/FilterInput";

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
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  useEffect(() => {
    const body = { sorting: sortingDirection, filters: activeFilters };
    getCarsList(body).then(response => {
      const { orderedList, filters } = response.data;

      setCarsList(orderedList);
      setFilters(filters);
    });
  }, [sortingDirection, activeFilters]);

  const handleActiveFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    if (!activeFilters.includes(name)) {
      setActiveFilters([...activeFilters, name]);
    } else {
      const updatedFilteres = activeFilters.filter(item => item !== name);
      setActiveFilters(updatedFilteres);
    }
  };

  return (
    <div className="App">
      {carsList.length ? (
        <div className="header">
          <form className="form--container">
            {filters.map(item => (
              <FilterInput
                filter={item}
                handleChange={handleActiveFilters}
                activeFilters={activeFilters}
                key={item}
              />
            ))}
          </form>

          <Sorter
            handleSorting={setSortingDirection}
            direction={sortingDirection}
          />
        </div>
      ) : (
        ""
      )}
      <CarsList carsList={carsList} />
    </div>
  );
};

export default App;
