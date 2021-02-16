import React from "react";
import { render } from "@testing-library/react";
import Button from "../Button";

test("renders button", () => {
  render(<Button text="button text" />);
});
