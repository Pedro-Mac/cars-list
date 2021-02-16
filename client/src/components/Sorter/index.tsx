import React from "react";

import SorterItem from "./SorterItem";

import "./style.css";
interface sorterProps {
  handleSorting: (direction: string) => void;
  direction: string;
}

const Sorter: React.FC<sorterProps> = ({ handleSorting, direction }) => {
  return (
    <div className="sorter--container">
      <SorterItem
        direction={direction}
        handleSorting={handleSorting}
        comparer="ascending"
      />
      <SorterItem
        direction={direction}
        handleSorting={handleSorting}
        comparer="descending"
      />
    </div>
  );
};

export default Sorter;
