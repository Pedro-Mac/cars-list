import React, { useEffect, useState } from "react";

import CarsList from "./containers/CarsList";
import Sorter from "./components/Sorter";
import FilterInput from "./components/FilterInput";
import Button from "./components/Button";

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
  }, [sortingDirection]);

  const handleActiveFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    if (!activeFilters.includes(name)) {
      setActiveFilters([...activeFilters, name]);
    } else {
      const updatedFilteres = activeFilters.filter(item => item !== name);
      setActiveFilters(updatedFilteres);
    }
  };

  const handleFormSubmission = (event: React.FormEvent) => {
    event.preventDefault();
    const body = { sorting: sortingDirection, filters: activeFilters };
    getCarsList(body).then(response => {
      const { orderedList, filters } = response.data;
      console.log(response.data);
      setCarsList(orderedList);
      setFilters(filters);
    });
  };

  return (
    <div className="App">
      <div className="header">
        <form onSubmit={handleFormSubmission} className="form--container">
          {filters.map(item => (
            <FilterInput
              filter={item}
              handleChange={handleActiveFilters}
              key={item}
            />
          ))}
          <Button text="Search" />
        </form>

        {carsList.length ? <Sorter handleSorting={setSortingDirection} /> : ""}
      </div>
      <CarsList carsList={carsList} />
    </div>
  );
};

export default App;
