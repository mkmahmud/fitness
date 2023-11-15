import { apiSlice } from "../baseApi";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    // Create Memberships Plan
    createUserMembership: build.mutation({
      query: (data) => ({
        url: `/user-membership`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      }),
      invalidatesTags: ["userMembership"],
    }),
    // Get Membership Details
    getMembershipDetails: build.query({
      query: (id) => {
        return {
          url: `/user-membership/${id}`,
          method: "GET",
        };
      },
      providesTags: ["userMembership"],
    }),
  }),
});

export const { useCreateUserMembershipMutation, useGetMembershipDetailsQuery } =
  extendedApiSlice;
