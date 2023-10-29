import { configureStore } from "@reduxjs/toolkit";
import usemodalSlice from "./features/modals/modalSlie";
import { apiSlice } from "./api/baseApi";
import userSlice from "./features/user/userSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    modal: usemodalSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
