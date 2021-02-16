import React, { useEffect, useState } from "react";

import CarsList from "./containers/CarsList";
import Sorter from "./components/Sorter";
import FilterInput from "./components/FilterInput";
import Button from "./components/Button";

import { getCarsList } from "./services/cars";

import { updateFilters } from "./helpers/updateFilters";

import { carItem } from "./types";

import "./App.css";

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

    updateFilters(name, setActiveFilters, activeFilters);
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
      {carsList.length > 0 && (
        <div className="header">
          <form className="form--container" onSubmit={handleFormSubmission}>
            {filters.map(item => (
              <FilterInput
                filter={item}
                handleChange={handleActiveFilters}
                activeFilters={activeFilters}
                key={item}
              />
            ))}
            <Button text="Search" className="button--search" />
          </form>

          <Sorter
            handleSorting={setSortingDirection}
            direction={sortingDirection}
          />
        </div>
      )}
      <CarsList carsList={carsList} />
    </div>
  );
};

export default App;
