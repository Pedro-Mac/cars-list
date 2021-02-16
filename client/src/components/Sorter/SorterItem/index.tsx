import React from "react";

interface sorterItemProps {
  direction: string;
  comparer: string;
  handleSorting: (direction: string) => void;
}

const SorterItem: React.FC<sorterItemProps> = ({
  direction,
  handleSorting,
  comparer
}) => {
  return (
    <div
      className={`sorter--handler-container ${direction === comparer &&
        "sorting--selected"}`}
      onClick={() => handleSorting(comparer)}
    >
      <p className="soter--handler">A - Z</p>
    </div>
  );
};

export default SorterItem;
