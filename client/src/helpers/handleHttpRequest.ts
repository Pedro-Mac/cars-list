import React, { SetStateAction } from "react";
import { getCarsList } from "../services/cars";
import { carItem } from "../types";

export const handleHttpRequest = (
  sortingDirection: string,
  activeFilters: string[],
  setCarsList: React.Dispatch<SetStateAction<carItem[]>>,
  setFilters: React.Dispatch<SetStateAction<string[]>>,
  setPageCount: React.Dispatch<SetStateAction<number>>,
  offset: number,
  perPage: number
) => {
  const body = { sorting: sortingDirection, filters: activeFilters };
  getCarsList(body).then(response => {
    const { orderedList, filters } = response.data;
    const actualOffset = offset * 12;

    const slicedData = orderedList.slice(actualOffset, actualOffset + perPage);

    const pageCount = Math.floor(orderedList.length / perPage);
    setCarsList(slicedData);
    setPageCount(pageCount);
    setFilters(filters);
  });
};
