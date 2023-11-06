import { apiSlice } from "../baseApi";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    // Send Message From Client side
    sendMessage: build.mutation({
      query: (data) => ({
        url: "/contact/send-message",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      }),
      invalidatesTags: ["contact"],
    }),
    // Mark As Read
    markAsRead: build.mutation({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["contact"],
    }),
    // Get All messages
    getAllMessages: build.query({
      query: () => {
        return {
          url: `/contact`,
          method: "GET",
        };
      },
      providesTags: ["contact"],
    }),
  }),
});

export const {
  useSendMessageMutation,
  useGetAllMessagesQuery,
  useMarkAsReadMutation,
} = extendedApiSlice;
