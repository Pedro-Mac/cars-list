import React from "react";
import { render } from "@testing-library/react";
import CardMileage from "../CardMileage";

interface cardMileageProps {
  minMileage: number;
  maxMileage: number;
}

test("renders card mileage", () => {
  render(<CardMileage minMileage={5} maxMileage={9} />);
});
