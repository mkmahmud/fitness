import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddMealModal, setUserModal } from "../../../redux/features/modals/modalSlie";
import Input from "../Form/Input/Input";
import { useForm } from "react-hook-form";
import Filed from "../Button/Filed";
import { getUserInfo } from "../../../service/storeUserInfo";

const AddMealPlan = () => {
  // Create User Account
  const addMealPlan = useSelector((state) => state.modal.addMealPlan);
  // Set Modal Status
  const dispatch = useDispatch();

  //   Handel Form Data
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      {addMealPlan && (
        <div className="absolute top-0 h-screen bg-[#00000030] w-full  inset-0 flex items-center justify-center ">
          <div className="bg-white w-[600px] p-6 rounded-xl ">
            <div className="flex justify-end">
              <button
                onClick={() => {
                  dispatch(setAddMealModal(false));
                }}
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div>
              <h1 className="text-center text-[25px] font-semibold">
                Add Meal Plan{" "}
              </h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 my-4">
                  <Input
                    hookForm={register("mealName")}
                    name="Meal Name"
                  ></Input> 
                </div>
                <div className="flex justify-center mt-8 w-full">
                  <Filed content="Add Meal" type={"submit"}></Filed>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddMealPlan;
