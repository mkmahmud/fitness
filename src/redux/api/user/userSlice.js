import { apiSlice } from "../baseApi";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    currentUser: build.query({
      query: (id) => {
        return {
          url: `/user/profile/?id=${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useCurrentUserQuery } = extendedApiSlice;
