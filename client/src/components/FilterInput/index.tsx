import React from "react";
import "./style.css";
interface filterInputProps {
  filter: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  activeFilters: string[];
}

const FilterInput: React.FC<filterInputProps> = ({
  filter,
  handleChange,
  activeFilters
}) => {
  const isActive = activeFilters.includes(filter);
  return (
    <div className="filter--item-container">
      <label
        className={`filter--label ${isActive && "is-active"}`}
        htmlFor={filter}
      >
        {filter}
      </label>
      <input
        type="checkbox"
        id={filter}
        name={filter}
        value={filter}
        onChange={handleChange}
        className="filter--input"
      />
    </div>
  );
};

export default FilterInput;
