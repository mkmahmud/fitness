import { apiSlice } from "../baseApi";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    addTrainerFromStudent: build.mutation({
      query: (data) => ({
        url: "/addmitted-student",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      }),
    }),
    getAllStudentsForTrainer: build.query({
      query: (id) => {
        return {
          url: `/addmitted-student/all-students/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useAddTrainerFromStudentMutation,
  useGetAllStudentsForTrainerQuery,
} = extendedApiSlice;
