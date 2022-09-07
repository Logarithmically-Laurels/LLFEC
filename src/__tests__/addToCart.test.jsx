import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/react/dont-cleanup-after-each";
import userEvent from "@testing-library/user-event";
import {
  render,
  screen,
  waitFor,
  afterEach,
  cleanup,
} from "@testing-library/react";
import App from "../Components/App.jsx";
import SelectSize from "../Components/Product_Overview/addToCartButtons/SelectSize.jsx";
import AddToCart from "../Components/Product_Overview/AddToCart.jsx";
const data = require("../Components/Product_Overview/dummydata.js").data;

describe("ADD TO CART SECTION", function () {
  const user = userEvent.setup();

  it("SHOULD HAVE SELECT SIZE AS INNER TEXT", () => {
    render(<AddToCart currentStyle={data.results[0]} />);
    expect(screen.getByTestId("selectSize")).toHaveTextContent("Select Size");
    expect(screen.getByTestId("selectQuantity")).toHaveTextContent("-");
  });
});
