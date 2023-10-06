import { render, screen } from "@testing-library/react";
import Profile from "./Profile";

describe("Profile Component", () => {
  test("should check the profile card title", () => {
    render(<Profile />);
    expect(screen.getByText(/User Info/)).toBeInTheDocument();
  });

  test("should check the person icon", () => {
    render(<Profile />);
    expect(screen.getByTestId("person-icon")).toBeInTheDocument();
  });

  test("should check the name is displayed", () => {
    render(<Profile />);
    expect(screen.getByTestId("name")).toBeInTheDocument();
  });

  test("should check the age is displayed", () => {
    render(<Profile />);
    expect(screen.getByTestId("age")).toBeInTheDocument();
  });

  test("should check the mobile is displayed", () => {
    render(<Profile />);
    expect(screen.getByTestId("mobile")).toBeInTheDocument();
  });
});
