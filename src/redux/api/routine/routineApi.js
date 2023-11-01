import { apiSlice } from "../baseApi";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllRoutinesForUser: build.query({
      query: (id) => {
        return {
          url: `/routine/member/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllRoutinesForUserQuery } = extendedApiSlice;
