import { createSlice } from "@reduxjs/toolkit";

const levelSlice = createSlice({
  name: "level",
  initialState: {
    level: 0,
  },
  reducers: {
    setLevel: (state, payload) => {
      state.level = payload;
    },
    clearLevel: (state) => {
      state.level = 0;
    },
  },
});

export const { setLevel, clearLevel } = levelSlice.actions;
export default levelSlice.reducer;
