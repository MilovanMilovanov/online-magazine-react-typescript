import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  // Arrange
  render(<App />);

  // Act
  const linkElement = screen.getByText(/learn react/i);

  // Arrange
  expect(linkElement).toBeInTheDocument();
});
