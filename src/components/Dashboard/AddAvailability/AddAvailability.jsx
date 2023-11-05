import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAvailableModal } from "../../../redux/features/modals/modalSlie";
import Input from "../Form/Input/Input";
import { useForm } from "react-hook-form";
import Filed from "../Button/Filed";
import { getUserInfo } from "../../../service/storeUserInfo";
import { useAddAvailabilityMutation } from "../../../redux/api/avilable/availableApi";

const AddAvailability = () => {
  // Get Create Availability modal Status
  const isCreateAvailableTime = useSelector(
    (state) => state.modal.addAvailability
  );
  // Set Modal Status
  const dispatch = useDispatch();

  // user info
  const user = getUserInfo();
  // create availability
  const [addAvailability, { isLoading, isError }] =
    useAddAvailabilityMutation();

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
      data.trainerId = user.id;
      const response = await addAvailability({ ...data }).unwrap();
      // console.log(response);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const times = [
    "06:00 AM",
    "07:00 AM",
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 AM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
    "10:00 PM",
  ];

  return (
    <div>
      {isCreateAvailableTime && (
        <div className="absolute top-0 h-screen bg-[#00000030] w-full  inset-0 flex items-center justify-center ">
          <div className="bg-white w-[600px] p-6 rounded-xl ">
            <div className="flex justify-end">
              <button
                onClick={() => {
                  dispatch(setAvailableModal(false));
                }}
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div>
              <h1 className="text-center text-[25px] font-semibold">
                Add Availability{" "}
              </h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 my-4">
                  <div className="my-2 px-2">
                    <p className="py-2">Day:</p>
                    <select
                      className="bg-whiteGray outline-none border border-gray px-4 py-2 w-full text-[16px]   "
                      name=""
                      id=""
                      {...register("day")}
                    >
                      {days.map((day, i) => (
                        <option key={i} value={day}>
                          {day}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="my-2 px-2">
                    <p className="py-2">Time:</p>
                    <select
                      className="bg-whiteGray outline-none border border-gray px-4 py-2 w-full text-[16px]  "
                      name=""
                      id=""
                      multiple
                      {...register("time")}
                    >
                      {times.map((time, i) => (
                        <option key={i} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex justify-center mt-8 w-full">
                  <Filed content="Add Time" type={"submit"}></Filed>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddAvailability;
