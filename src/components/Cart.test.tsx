import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";

import { store } from "../stores/store";
import Cart from "./Cart";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
const stores = mockStore({});

test("Delete  Button is defined", async () => {
  render(
    <Provider store={store}>
      <Cart />
    </Provider>
  );

  // eslint-disable-next-line testing-library/await-async-query
  const buttonDelete = screen.findByTestId("Delete-btn");
  expect(buttonDelete).toBeDefined();
});
test("Add  Button is defined", async () => {
  render(
    <Provider store={store}>
      <Cart />
    </Provider>
  );

  // eslint-disable-next-line testing-library/await-async-query
  const buttonAdd = screen.findByTestId("Add-btn");
  expect(buttonAdd).toBeDefined();
});
test("Remove  Button is defined", async () => {
  render(
    <Provider store={store}>
      <Cart />
    </Provider>
  );

  // eslint-disable-next-line testing-library/await-async-query
  const buttonRemove = screen.findByTestId("Remove-btn");
  expect(buttonRemove).toBeDefined();
});

test("Renders Cart Items", async () => {
  render(
    <Provider store={store}>
      <Cart />
    </Provider>
  );
  const CartItems = await screen.findAllByRole("generic");
  expect(CartItems).not.toHaveLength(0);
});
