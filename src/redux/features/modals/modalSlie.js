// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false,
  routine: {
    data: {
      open: false,
      data: {},
    },
  },
  meal: {
    data: {
      open: false,
      data: {},
    },
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setUserModal: (state, action) => {
      state.user = action.payload;
    },
    setRoutineModal: (state, action) => {
      state.routine.data.open = action.payload.isOpen;
      state.routine.data.data = action.payload.data;
    },
    setMealModal: (state, action) => {
      state.meal.data.open = action.payload.isOpen;
      state.meal.data.data = action.payload.data;
    },
  },
});

export const { setUserModal, setRoutineModal, setMealModal } = modalSlice.actions;

export default modalSlice.reducer;
