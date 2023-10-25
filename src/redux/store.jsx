import { configureStore } from "@reduxjs/toolkit";
 import userReducer from "./features/user/userSlice";
import { apiSlice } from "./api/baseApi";

export default configureStore({
  reducer: {
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
