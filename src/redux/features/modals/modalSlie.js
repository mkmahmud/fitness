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
  addMealPlan: false,
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
    setAddMealModal: (state, action) => {
      state.addMealPlan = action.payload;
    },
  },
});

export const { setUserModal, setRoutineModal, setMealModal, setAddMealModal } =
  modalSlice.actions;

export default modalSlice.reducer;
