import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import CarsList from "./containers/CarsList";
import Sorter from "./components/Sorter";
import FilterInput from "./components/FilterInput";
import Button from "./components/Button";

import { updateFilters } from "./helpers/updateFilters";
import { handleHttpRequest } from "./helpers/handleHttpRequest";

import { carItem } from "./types";

import "./App.css";

const App: React.FC = () => {
  const [carsList, setCarsList] = useState<carItem[]>([]);
  const [sortingDirection, setSortingDirection] = useState("ascending");
  const [filters, setFilters] = useState<string[]>([]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [itemsPerPage] = useState<number>(12);
  const [pageCount, setpageCount] = useState<number>(0);

  useEffect(() => {
    handleHttpRequest(
      sortingDirection,
      activeFilters,
      setCarsList,
      setFilters,
      setpageCount,
      offset,
      itemsPerPage
    );
  }, [sortingDirection, offset]);

  const handleActiveFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    updateFilters(name, setActiveFilters, activeFilters);
  };

  const handleFormSubmission = (event: React.FormEvent) => {
    event.preventDefault();
    handleHttpRequest(
      sortingDirection,
      activeFilters,
      setCarsList,
      setFilters,
      setpageCount,
      offset,
      itemsPerPage
    );
    setOffset(0);
  };

  const handleNewPage = (event: any) => {
    const selectedPage = event.selected;
    setOffset(selectedPage + 1);
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
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={handleNewPage}
      />
    </div>
  );
};

export default App;
