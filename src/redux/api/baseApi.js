import { createApi } from "@reduxjs/toolkit/query/react";
import { getUrl } from "../../config/index";
import { axiosBaseQuery } from "../../helpers/axios";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: getUrl() }),
  endpoints: (builder) => ({}),
  tagTypes: ["user"],
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetPostsQuery } = apiSlice;
