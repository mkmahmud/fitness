import { apiSlice } from "../baseApi";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    // Current logged user
    currentUser: build.query({
      query: (id) => {
        return {
          url: `/user/profile/?id=${id}`,
          method: "GET",
        };
      },
      providesTags:['userDetails']
    }),
    // Get All Users
    getAllusers: build.query({
      query: (role) => {
        return {
          url: `/user/users/${role}`,
          method: "GET",
        };
      },
      providesTags:['userDetails']
    }),
    // Get user Details
    getUserDetails: build.query({
      query: (id) => {
        return {
          url: `/user/user-details/${id}`,
          method: "GET",
        };
      },
      providesTags:['userDetails']
    }),
    // Update user Details
    udpadeUserDetails: build.mutation({
      query: ({ id, data }) => ({
        url: `/user/user-details/${id}`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        data: data, 
      }),
      invalidatesTags: ["userDetails"],
    }),
    //  Update Password
    updatePassword: build.mutation({
      query: ({ id, data }) => ({
        url: `/user/change-password/${id}`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      }),
      invalidatesTags: ["userDetails"],
    }),
  }),
});

export const {
  useCurrentUserQuery,
  useGetAllusersQuery,
  useUdpadeUserDetailsMutation,
  useGetUserDetailsQuery,
  useUpdatePasswordMutation,
} = extendedApiSlice;
