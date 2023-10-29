import { createSlice } from "@reduxjs/toolkit";
 
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null, // Initialize user to null
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; // Update the user state with the payload
    },
    clearUser: (state) => {
      state.user = null; // Clear the user state
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
