import { createSlice } from "@reduxjs/toolkit";
const cart: any[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart,

    quantity: 0,
  },

  reducers: {
    AddCart: (state, action) => {
      const find = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      state.cart[find].rating.count -= 1;
      console.log(state.cart[find].rating.count);
      state.cart[find].quantity += 1;
      const clone = Object.assign({}, state.cart[find]);
      delete clone.quantity;
      console.log(clone);

      fetch(`http://localhost:3000/products/${clone.id}`, {
        method: "PUT",
        headers: {
          Accept: "applocation/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clone),
      }).then((result) => {
        result.json().then((response) => {
          console.warn(response);
        });
      });
    },
    RemoveCart: (state, action) => {
      const find = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cart[find].quantity > 1) {
        state.cart[find].quantity -= 1;

        state.cart[find].rating.count += 1;
        const clone = Object.assign({}, state.cart[find]);
        delete clone.quantity;
        console.log(clone);
        console.log(clone.rating.count);

        fetch(`http://localhost:3000/products/${clone.id}`, {
          method: "PUT",
          headers: {
            Accept: "applocation/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(clone),
        }).then((result) => {
          result.json().then((response) => {
            console.warn(response);
          });
        });
      } else {
        state.cart[find].rating.count += 1;
        const clone = Object.assign({}, state.cart[find]);
        delete clone.quantity;
        console.log(clone);
        console.log(clone.rating.count);

        fetch(`http://localhost:3000/products/${clone.id}`, {
          method: "PUT",
          headers: {
            Accept: "applocation/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(clone),
        }).then((result) => {
          result.json().then((response) => {
            console.warn(response);
          });
        });

        state.cart.splice(find, 1);
      }
    },

    DeleteCart: (state, action) => {
      const find = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      const count = state.cart[find].quantity;
      state.cart[find].rating.count += count;
      const clone = Object.assign({}, state.cart[find]);
      delete clone.quantity;
      console.log(clone);

      console.log(clone.rating.count);

      fetch(`http://localhost:3000/products/${clone.id}`, {
        method: "PUT",
        headers: {
          Accept: "applocation/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clone),
      }).then((result) => {
        result.json().then((response) => {
          console.warn(response);
        });
      });

      state.cart.splice(find, 1);
    },

    AddCartByQuantity: (state, action) => {
      const find = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find >= 0) {
        state.cart[find].quantity += action.payload.quantity;
      } else {
        const temp = { ...action.payload };

        state.cart.push(temp);
      }
    },
  },
});

export const { AddCart, RemoveCart, DeleteCart, AddCartByQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
