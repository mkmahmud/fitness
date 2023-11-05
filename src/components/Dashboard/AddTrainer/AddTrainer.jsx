import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTrainerModal } from "../../../redux/features/modals/modalSlie";
import { useForm } from "react-hook-form";
import Filed from "../Button/Filed";
import { getUserInfo } from "../../../service/storeUserInfo";
import { useAddAvailabilityMutation } from "../../../redux/api/avilable/availableApi";
import { useGetAllusersQuery } from "../../../redux/api/user/userSlice";
import { useAddTrainerFromStudentMutation } from "../../../redux/api/TrainersAndUsers/TrainersAndUsers";

const AddTrainer = () => {
  // Get Create Availability modal Status
  const isCreateAddTrainer = useSelector((state) => state.modal.addTrainer);

  // Set Modal Status
  const dispatch = useDispatch();

  // user info
  const user = getUserInfo();
  // create Add Trainer
  const [addTrainerFromStudent, { isLoading, isError }] =
    useAddTrainerFromStudentMutation();

  //   Get All Trainers
  const { data: trainers } = useGetAllusersQuery("trainer");
  //   Handel Form Data
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      data.student = user.id;
      const response = await addTrainerFromStudent({ ...data }).unwrap();
      reset();
      if (response) {
        dispatch(setTrainerModal(false));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {isCreateAddTrainer && (
        <div className="absolute top-0 h-screen bg-[#00000030] w-full  inset-0 flex items-center justify-center ">
          <div className="bg-white w-[600px] p-6 rounded-xl ">
            <div className="flex justify-end">
              <button
                onClick={() => {
                  dispatch(setTrainerModal(false));
                }}
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div>
              <h1 className="text-center text-[25px] font-semibold">
                Add Trainer{" "}
              </h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 my-4">
                  <div className="my-2 px-2">
                    <p className="py-2">Trainers:</p>
                    <select
                      className="bg-whiteGray outline-none border border-gray px-4 py-2 w-full text-[16px]   "
                      name=""
                      id=""
                      {...register("trainer")}
                    >
                      {trainers?.user &&
                        trainers?.user.map((trainter, i) => (
                          <option key={i} value={trainter.id}>
                            {trainter.fullName}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="flex justify-center mt-8 w-full">
                  <Filed content="Add Trainer" type={"submit"}></Filed>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTrainer;
