import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./src/Components/App.jsx";
import SelectSize from "./src/Components/Product_Overview/addToCartButtons/SelectSize.jsx";

describe("tests", function () {
  const user = userEvent.setup();

  it("SHOULD HAVE SELECT SIZE AS INNER TEXT", () => {
    render(<SelectSize />);
    expect(screen.getByTestId("selectSize")).toHaveTextContent("Select Size)");
  });
});
