import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./counter";

describe("<Counter />", () => {
  it("should render correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButton).toBeInTheDocument();
  });

  it("should start a count with '0'(zero)", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  it("should increment a count to '1' after clicking the increment button", async () => {
    userEvent.setup();

    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await userEvent.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  it("should renders a count of 2 after clicking in the increment button twice", async () => {
    userEvent.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await userEvent.dblClick(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });
});
