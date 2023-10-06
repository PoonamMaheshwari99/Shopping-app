import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../stores/store";
import Header from "./Header";

describe("Header Component", () => {
  test("should check logout button", async () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    // eslint-disable-next-line testing-library/await-async-query
    const logoutBtn = screen.findByTestId("logout");
    expect(logoutBtn).toBeDefined();
  });

  test("should check the header component title", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(screen.getByText(/SHOPPIFY/)).toBeInTheDocument();
  });

  test("should check the cart icon", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });
});
