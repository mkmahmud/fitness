import { apiSlice } from "../baseApi";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllMealForUser: build.query({
      query: (id) => {
        return {
          url: `/meal/?id=${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllMealForUserQuery } = extendedApiSlice;
