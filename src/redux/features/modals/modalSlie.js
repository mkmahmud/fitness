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
  addAvailability: false,
  addTrainer: false,
  userDetails: {
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
    setuserDetailsModal: (state, action) => {
      state.userDetails.data.open = action.payload.isOpen;
      state.userDetails.data.data = action.payload.data;
    },
    setMealModal: (state, action) => {
      state.meal.data.open = action.payload.isOpen;
      state.meal.data.data = action.payload.data;
    },
    setAddMealModal: (state, action) => {
      state.addMealPlan = action.payload;
    },
    setAvailableModal: (state, action) => {
      state.addAvailability = action.payload;
    },
    setTrainerModal: (state, action) => {
      state.addTrainer = action.payload;
    },
  },
});

export const {
  setUserModal,
  setRoutineModal,
  setMealModal,
  setAddMealModal,
  setAvailableModal,
  setTrainerModal,
  setuserDetailsModal
} = modalSlice.actions;

export default modalSlice.reducer;
