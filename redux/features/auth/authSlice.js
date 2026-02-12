import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    accountType: "customer",
    token: "",
  },
  reducers: {
    setAuthenticated: (state, { payload }) => {
      state.isAuthenticated = true;
      state.token = payload;
    },
    clearAuthenticated: (state, { payload }) => {
      state.isAuthenticated = false;
      state.token = "";
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { setAuthenticated, clearAuthenticated, setUser } =
  authSlice.actions;
export default authSlice.reducer;
