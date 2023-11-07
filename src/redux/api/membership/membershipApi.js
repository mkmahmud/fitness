import { apiSlice } from "../baseApi";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    // Get All Plans
    getAllMembershipPlan: build.query({
      query: () => {
        return {
          url: `/membership`,
          method: "GET",
        };
      },
      providesTags: ["membership"],
    }),
    // Create Memberships Plan
    createMembership: build.mutation({
      query: (data) => ({
        url: `/membership`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      }),
      invalidatesTags: ["membership"],
    }),
    // Update Plan Details
    updatePlan: build.mutation({
      query: ({ id, data }) => ({
        url: `/membership/${id}`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      }),
      invalidatesTags: ["membership"],
    }),
    // Delete Plan
    deletePlan: build.mutation({
      query: (id) => ({
        url: `/membership/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["membership"],
    }),
  }),
});

export const {
  useGetAllMembershipPlanQuery,
  useCreateMembershipMutation,
  useUpdatePlanMutation,
  useDeletePlanMutation,
} = extendedApiSlice;
