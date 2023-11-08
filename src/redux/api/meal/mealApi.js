import { apiSlice } from "../baseApi";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    // Get All Meals for
    getAllMealForUser: build.query({
      query: (id) => {
        return {
          url: `/meal/${id}`,
          method: "GET",
        };
      },
      providesTags: ["meal"],
    }),
    // Create Meal
    createMeal: build.mutation({
      query: (data) => ({
        url: `/meal`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      }),
      invalidatesTags: ["meal"],
    }),
  }),
});

export const { useGetAllMealForUserQuery, useCreateMealMutation } =
  extendedApiSlice;
