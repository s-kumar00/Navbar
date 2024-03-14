import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
    },
    signOut: (state) => {
      state.currentUser = null;
    },
  },
});

export const {signInSuccess, signInFailure, signOut } = userSlice.actions;

export default userSlice.reducer;
