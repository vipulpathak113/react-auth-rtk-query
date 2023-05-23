import { createSlice } from "@reduxjs/toolkit";

interface authState {
  value: number;
}

const initialState: authState = {
  value: 0,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = authSlice.actions;

export default authSlice.reducer;
