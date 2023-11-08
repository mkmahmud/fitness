import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddMealModal,
  setUserModal,
} from "../../../redux/features/modals/modalSlie";
import Input from "../Form/Input/Input";
import { useFieldArray, useForm } from "react-hook-form";
import Filed from "../Button/Filed";
import { getUserInfo } from "../../../service/storeUserInfo";
import { useGetAllStudentsForTrainerQuery } from "../../../redux/api/TrainersAndUsers/TrainersAndUsers";
import { useCreateMealMutation } from "../../../redux/api/meal/mealApi";

const AddMealPlan = () => {
  // Create User Account
  const addMealPlan = useSelector((state) => state.modal.addMealPlan);
  // Set Modal Status
  const dispatch = useDispatch();

  // User
  const user = getUserInfo();

  // get My All Students
  const { data: students } = useGetAllStudentsForTrainerQuery(user.id);

  // Create Meal
  const [createMeal] = useCreateMealMutation();

  //   Handel Form Data
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // Add useFieldArray for managing dynamic arrays
  const { fields, append, remove } = useFieldArray({
    control,
    name: "mealData",
  });

  // meal
  const {
    fields: mealTitle,
    append: mealTitleAppend,
    remove: mealTitleRemove,
  } = useFieldArray({
    control,
    name: "meals",
  });

  const onSubmit = async (data) => {
    data.meladded = user.id;
    delete data.meals;
    const res = await createMeal(data);
    console.log(res);
    reset();
  };

  return (
    <div>
      {addMealPlan && (
        <div className="absolute top-0 h-screen bg-[#00000030] w-full  inset-0 flex items-center justify-end ">
          <div className="bg-white h-screen p-6   w-full md:w-[80%] overflow-scroll  ">
            <div className="flex justify-end">
              <button
                onClick={() => {
                  dispatch(setAddMealModal(false));
                }}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div>
              <h1 className="text-center text-[25px] font-semibold">
                Add Meal Plan
              </h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="my-2 px-2">
                  <p className="py-2">My Students:</p>
                  <select
                    className="bg-whiteGray outline-none border border-gray px-4 py-2 w-full text-[16px]   "
                    name=""
                    id=""
                    {...register("mealFor")}
                  >
                    {students &&
                      students.map((student, i) => (
                        <option key={i} value={student.id}>
                          {student.student}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 my-4">
                  <Input
                    hookForm={register("mealTitle")}
                    name="Meal Title"
                  ></Input>

                  <Input
                    hookForm={register("mealDuration")}
                    name="Duration"
                  ></Input>
                </div>
                {/* mealData */}
                <div className="grid grid-cols-1 md:grid-cols-2 my-4">
                  {fields.map((field, index) => (
                    <div key={index} className=" border border-gray">
                      <div className="grid grid-cols-1 md:grid-cols-2 my-4">
                        <Input
                          hookForm={register(`mealData.${index}.mealName`)}
                          name="Meal Name"
                        ></Input>
                        <Input
                          hookForm={register(`mealData.${index}.time`)}
                          name="Meal Time"
                        ></Input>
                      </div>
                      {mealTitle.map((field, mealIndex) => (
                        <input
                          key={index}
                          type="text"
                          className="bg-whiteGray m-2 text-[16px] outline-none py-1 px-2"
                          placeholder="meal "
                          {...register(
                            `mealData[${index}].meals[${mealIndex}].title`
                          )}
                        />
                      ))}
                      <button
                        type="button"
                        onClick={() => mealTitleAppend({ title: "" })}
                        className="bg-main p-2 w-10 h-10 text-white"
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => append({ mealName: "", time: "" })}
                  className="bg-main p-2 w-10 h-10 text-white"
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
                <Input hookForm={register(`note`)} name="Note"></Input>
                {/*  */}
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
