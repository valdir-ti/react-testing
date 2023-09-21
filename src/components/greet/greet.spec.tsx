/*
 * Greet should render the text hello and if a name is passed into the component
 * it should render hello followed by the name
 */

import { screen, render } from "@testing-library/react";
import { Greet } from "./greet";

describe("<Greet />", () => {
  it("should render correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  it("should render with a name", () => {
    render(<Greet name="world" />);
    const textElement = screen.getByText(/hello world/i);
    expect(textElement).toBeInTheDocument();
  });
});
