import { apiSlice } from "../baseApi";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllMembershipPlan: build.query({
      query: () => {
        return {
          url: `/membership`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllMembershipPlanQuery } = extendedApiSlice;
