import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom";

import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./stores/store";

describe("App Component", () => {
  test("full app rendering/navigating", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    const user = userEvent.setup();

    // verify page content for default route
    expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
  });

  test("landing on a bad page", () => {
    const badRoute = "/some/bad/route";

    // use <MemoryRouter> when you want to manually control the history
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[badRoute]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    // verify navigation to "no match" route
    expect(screen.getByText(/404 Error!/i)).toBeInTheDocument();
  });
});
