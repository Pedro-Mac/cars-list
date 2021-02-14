import axios from "axios";

export const getCarsList = body => {
  let filtersString = "";
  for (const el of body.filters) {
    filtersString += `&filter=${el}`;
  }
  return axios
    .get(
      `http://localhost:3010/cars?direction=${body.sorting}${filtersString}`,
      body
    )
    .then(data => data);
};
