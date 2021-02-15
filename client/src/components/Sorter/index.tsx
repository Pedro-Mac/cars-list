import React from "react";
import "./style.css";
interface sorterProps {
  handleSorting: (direction: string) => void;
  direction: string;
}

const Sorter: React.FC<sorterProps> = ({ handleSorting, direction }) => {
  return (
    <div className="sorter--container">
      <div
        className={`sorter--handler-container ${direction === "ascending" &&
          "sorting--selected"}`}
        onClick={() => handleSorting("ascending")}
      >
        <p className="soter--handler">A - Z</p>
      </div>
      <div
        className={`sorter--handler-container ${direction === "descending" &&
          "sorting--selected"}`}
        onClick={() => handleSorting("descending")}
      >
        <p className="soter--handler">Z - A</p>
      </div>
    </div>
  );
};

export default Sorter;
