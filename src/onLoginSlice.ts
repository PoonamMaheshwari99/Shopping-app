import {  createSlice } from "@reduxjs/toolkit";

export const onLoginSlice = createSlice({
  name: "onlogin",
  initialState: {
    sendonlogin: false,
  },

  reducers: {
    statusonlogin: (state: { sendonlogin: boolean }) => {
      state.sendonlogin = true;
    },
    statusonlogout: (state) => {
      state.sendonlogin = false;
    },
  },
});

export const { statusonlogin, statusonlogout } = onLoginSlice.actions;

export const selectSendonlogin = (state: { onlogin: { sendonlogin: any } }) =>
  state.onlogin.sendonlogin;

export default onLoginSlice.reducer;
