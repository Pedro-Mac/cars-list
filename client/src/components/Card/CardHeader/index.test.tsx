import React from "react";
import { render } from "@testing-library/react";
import CardHeader from "../CardHeader";

test("renders card header", () => {
  render(<CardHeader brand="jon" model="doe" />);
});
