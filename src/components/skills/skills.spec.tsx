import { render, screen, logRoles } from "@testing-library/react";
import { Skills } from "./skills";

describe("<Skills />", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  it("should renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  it("should renders a list of skills", () => {
    render(<Skills skills={skills} />);

    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });

  it("should renders login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  it("should not renders Start Learning button", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  it("should eventually displayed Start Learning button", async () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container);
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      {
        timeout: 2000,
      }
    );
    logRoles(view.container);
    expect(startLearningButton).toBeInTheDocument();
  });
});
