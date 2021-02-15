import React from "react";
import "./style.css";
interface filterInputProps {
  filter: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterInput: React.FC<filterInputProps> = ({ filter, handleChange }) => {
  return (
    <div className="filter--item-container">
      <label htmlFor={filter}>{filter}</label>
      <input
        type="checkbox"
        id={filter}
        name={filter}
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default FilterInput;
