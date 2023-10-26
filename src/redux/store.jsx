import { configureStore } from "@reduxjs/toolkit";
import usemodalSlice from "./features/modals/modalSlie";
import { apiSlice } from "./api/baseApi";

export default configureStore({
  reducer: {
    modal: usemodalSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
