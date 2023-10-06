import { render, screen } from "@testing-library/react";

import Dashboard from "./Dashboard";

describe("Dashboard Component", () => {
  test("should check the dashboard component data", () => {
    render(<Dashboard />);
    expect(
      screen.getByText(/"Hi Poonam, Welcome to SHOPPIFY !"/)
    ).toBeInTheDocument();
  });
});
