import { render, screen } from "@testing-library/react";
import NoMatch from "./NoMatch";

describe("NoMatch Component", () => {
  test("should check the NoMatch component data", () => {
    render(<NoMatch />);
    expect(screen.getByText(/404 Error!/i)).toBeInTheDocument();
  });
});
