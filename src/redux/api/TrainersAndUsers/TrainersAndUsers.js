import { apiSlice } from "../baseApi";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    // Add Trainer From Student
    addTrainerFromStudent: build.mutation({
      query: (data) => ({
        url: "/addmitted-student",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      }),
      invalidatesTags: ["TrainerAndUser"],
    }),
    // Get All Students For Trainer
    getAllStudentsForTrainer: build.query({
      query: (id) => {
        return {
          url: `/addmitted-student/all-students/${id}`,
          method: "GET",
        };
      },
    }),
    // Get Trainers for Student
    getTrainersForStudent: build.query({
      query: (id) => {
        return {
          url: `/addmitted-student/get-my-trainer/${id}`,
          method: "GET",
        };
      },
      providesTags: ["TrainerAndUser"],
    }),
  }),
});

export const {
  useAddTrainerFromStudentMutation,
  useGetAllStudentsForTrainerQuery,
  useGetTrainersForStudentQuery,
} = extendedApiSlice;
