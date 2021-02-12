import React, { useEffect } from "react";

import "./App.css";

import { getCarsList } from "./services/cars";

function App() {
  useEffect(() => {
    getCarsList.then((data) => console.log(data.data));
  });
  return <div className="App"></div>;
}

export default App;
