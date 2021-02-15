import React from "react";
import "./style.css";
interface sorterProps {
  handleSorting: (direction: string) => void;
}

const Sorter: React.FC<sorterProps> = ({ handleSorting }) => {
  return (
    <div className="sorter--container">
      <div
        className="sorter--handler-container"
        onClick={() => handleSorting("ascending")}
      >
        <p className="soter--handler">A - Z</p>
      </div>
      <div
        className="sorter--handler-container"
        onClick={() => handleSorting("descending")}
      >
        <p className="soter--handler">Z - A</p>
      </div>
    </div>
  );
};

export default Sorter;
