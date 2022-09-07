import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./src/Components/App.jsx";

xdescribe("JB First Jest Test", function () {
  const user = userEvent.setup();

  it(`should render next image`, () => {
    render(<App />);
    const qtyButton = screen.getByRole("button", { name: "qty" });
    // expect(screen.getByTestId("quantity").toHaveTextContent("1"));
  });
});
