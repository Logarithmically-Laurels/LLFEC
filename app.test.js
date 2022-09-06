import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./src/Components/App.jsx";
import SelectSize from "./src/Components/Product_Overview/addToCartButtons/SelectSize.jsx";

describe("tests", function () {
  const user = userEvent.setup();
  var currentSize = { size: "Select Size" };
  var currentStyle = {
    1281158: {
      quantity: 14,
      size: "7",
    },
    1281159: {
      quantity: 25,
      size: "7.5",
    },
    1281160: {
      quantity: 9,
      size: "8",
    },
    1281161: {
      quantity: 2,
      size: "8.5",
    },
    1281162: {
      quantity: 18,
      size: "9",
    },
    1281163: {
      quantity: 12,
      size: "9.5",
    },
    1281164: {
      quantity: 10,
      size: "10",
    },
    1281165: {
      quantity: 18,
      size: "10.5",
    },
    1281166: {
      quantity: 11,
      size: "11",
    },
    1281167: {
      quantity: 35,
      size: "11.5",
    },
    1281168: {
      quantity: 25,
      size: "12",
    },
  };

  it("SHOULD HAVE SELECT SIZE AS INNER TEXT", () => {
    render(
      <SelectSize currentSize={currentSize} currentStyle={currentStyle} />
    );
    expect(screen.getByTestId("selectSize")).toHaveTextContent("Select Size");
  });
});
