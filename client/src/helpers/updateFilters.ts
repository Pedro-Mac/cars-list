import React, { SetStateAction } from "react";

export const updateFilters = (
  inputName: string,
  setterFunction: React.Dispatch<SetStateAction<string[]>>,
  currentFilters: string[]
) => {
  if (!currentFilters.includes(inputName)) {
    setterFunction([...currentFilters, inputName]);
  } else {
    const updatedFilteres = currentFilters.filter(item => item !== inputName);
    setterFunction(updatedFilteres);
  }
};
