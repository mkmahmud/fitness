import { apiSlice } from "../baseApi";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    loggedInUser: build.mutation({
      query: (loginData) => ({
        url: "/auth/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: loginData,
      }),
      invalidatesTags: ["user"],
    }),
    createUser: build.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        data: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useLoggedInUserMutation, useCreateUserMutation } =
  extendedApiSlice;
