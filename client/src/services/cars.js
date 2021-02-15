import axios from "axios";

export const getCarsList = body => {
  let filtersString = "";
  const activeFilters = body.filters.filter(item => item.isActive);
  for (const el of activeFilters) {
    filtersString += `&filter=${el.filter}`;
  }
  return axios
    .get(
      `http://localhost:3010/cars?direction=${body.sorting}${filtersString}`,
      body
    )
    .then(data => data);
};
