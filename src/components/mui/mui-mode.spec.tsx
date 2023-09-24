import { render, screen } from "../../test-utils";
import { MuiMode } from "./mui-mode";

describe("<MuiMode />", () => {
  it("should render text correctly", () => {
    render(<MuiMode />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("light mode");
  });
});
