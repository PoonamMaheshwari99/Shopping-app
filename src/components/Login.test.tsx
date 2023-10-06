import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import Login from "./Login";
import { Provider } from "react-redux";
import { store } from "../stores/store";
import { BrowserRouter } from "react-router-dom";

describe("Login Component", () => {
  test("renders Email and Password Label", async () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const emailLabel = getByText(/Email/i);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const passwordLabel = getByText(/Password/i);

    expect(emailLabel).toBeInTheDocument();

    expect(passwordLabel).toBeInTheDocument();
  });

  test("Login Button is defined", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );

    const buttonSignIn = screen.getByText("Login");
    expect(buttonSignIn).toBeDefined();
    userEvent.click(buttonSignIn);
    const loginPageText = screen.getByText(/Sign In/i);
    expect(loginPageText).toBeDefined();
  });
  test("should be able to type email input field", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.change(getByTestId("text-input-element"), {
      target: { value: "Muhammad@Lahin" },
    });
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect((getByTestId("text-input-element") as HTMLInputElement).value).toBe(
      "Muhammad@Lahin"
    );
  });

  test("should be able to type password input field", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.change(getByTestId("password-input-element"), {
      target: { value: "MuhammadLahin" },
    });
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(
      // eslint-disable-next-line testing-library/prefer-screen-queries
      (getByTestId("password-input-element") as HTMLInputElement).value
    ).toBe("MuhammadLahin");
  });
});
