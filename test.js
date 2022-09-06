import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./src/Components/App.jsx";

describe("tests", function () {
  const user = userEvent.setup();

  it("should increase helpfulness", () => {
    render(<App />);
    expect(screen.getByTestId("temp")).toHaveTextContent("Helpful? Yes(0)");
    return user.click(screen.getByTestId("temp")).then(() => {
      expect(screen.getByTestId("temp")).toHaveTextContent("Helpful? Yes(1)");
    });
  });
});
