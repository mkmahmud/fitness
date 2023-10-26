// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false, // Initialize user to null
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setUserModal: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUserModal } = modalSlice.actions;

export default modalSlice.reducer;
