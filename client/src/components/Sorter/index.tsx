import React from "react";

interface sorterProps {
  handleSorting: (direction: string) => void;
}

const Sorter: React.FC<sorterProps> = ({ handleSorting }) => {
  return (
    <div>
      <p onClick={() => handleSorting("ascending")}>A - Z</p>
      <p onClick={() => handleSorting("descending")}>Z - A</p>
    </div>
  );
};

export default Sorter;
