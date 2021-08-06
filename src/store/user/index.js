import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, { payload }) => {
      state.user = { ...payload };
    },
  },
});

export const { createUser } = user.actions;

export default user.reducer;
