import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authSlice = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/register",
        method: "POST",
        body: userData,
      }),
      // Handle the success case
      onSuccess: (response, { dispatch }) => {
        console.log("User created successfully:", response);
      },
      // Handle the error case
      onError: (error, { dispatch }) => {
        console.error("Error creating user:", error);
      },
    }),
    loginUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/login",
        method: "POST",
        body: userData,
      }),
      // Handle the success case
      onSuccess: (response, { dispatch }) => {
        console.log("User logged In successfully:", response);
      },
      // Handle the error case
      onError: (error, { dispatch }) => {
        console.error("Error Logged In user:", error);
      },
    }),
  }),
});

export const { useCreateUserMutation, useLoginUserMutation } = authSlice;
