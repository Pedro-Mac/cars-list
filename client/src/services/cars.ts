import axios from "axios";

export const getCarsList = axios
  .get("http://localhost:3010/cars")
  .then(data => data);
