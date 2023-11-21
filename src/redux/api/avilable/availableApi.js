import { apiSlice } from "../baseApi";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllAvailableTime: build.query({
      query: (id) => {
        return {
          url: `/available-time/${id}`,
          method: "GET",
        };
      },
      providesTags: ["availabilities"],
    }),
    addAvailability: build.mutation({
      query: (data) => ({
        url: "/available-time",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      }),
      invalidatesTags: ["availabilities"],
    }),
    deleteAvailability: build.mutation({
      query: (id) => ({
        url: `/available-time/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["availabilities"],
    }),
  }),
});

export const {
  useGetAllAvailableTimeQuery,
  useAddAvailabilityMutation,
  useDeleteAvailabilityMutation,
} = extendedApiSlice;
