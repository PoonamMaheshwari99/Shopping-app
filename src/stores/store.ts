import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../cartSlice";

import onloginReducer from "../onLoginSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,

    onlogin: onloginReducer,
  },
});
