import { render, screen } from "@testing-library/react";
import { MuiMode } from "./mui-mode";
import { AppProvider } from "../provider/app-provider";

describe("<MuiMode />", () => {
  it("should render text correctly", () => {
    render(<MuiMode />, {
      wrapper: AppProvider,
    });
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("light mode");
  });
});
