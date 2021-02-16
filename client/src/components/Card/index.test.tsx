import React from "react";
import { render } from "@testing-library/react";
import Card from "../Card";

test("renders card", () => {
  render(
    <Card
      brand="jon"
      model="doe"
      dealer="joe"
      maxMileage={1}
      minMileage={999}
    />
  );
});
