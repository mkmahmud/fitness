import React, { useState } from "react";
import PageHead from "../../../../components/Dashboard/Shared/Common/PageHead";
import Filed from "../../../../components/Dashboard/Button/Filed";
import {
  useCreateMembershipMutation,
  useGetAllMembershipPlanQuery,
} from "../../../../redux/api/membership/membershipApi";
import DashboardPlanCard from "../../../../components/Dashboard/DashBoardPlanCard/DashBoardPlanCard";
import Spinner from "../../../../components/Dashboard/Shared/Common/Spinner";
import { useForm, useFieldArray } from "react-hook-form"; // Import useFieldArray
import Input from "../../../../components/Dashboard/Form/Input/Input";
import toast from "react-hot-toast";

const Plans = () => {
  // Handle Our Plans
  const { data, isLoading } = useGetAllMembershipPlanQuery();

  // Add New Plan to the database
  const [createMembership] = useCreateMembershipMutation();

  // Add New Plan
  const [addNewPlan, setAddNewPlan] = useState(false);

  // Handel Form Data
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm();

  // Add useFieldArray for managing dynamic arrays
  const { fields, append, remove } = useFieldArray({
    control,
    name: "plans",
  });

  const onSubmit = async (data) => {
    try {
      const res = await createMembership(data);

      if (res?.data) {
        toast.success("Plan Added Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <PageHead title="Plans"></PageHead>
      <div>
        <div
          onClick={() => {
            setAddNewPlan(!addNewPlan);
          }}
        >
          <Filed content="Add A New Plan" type="button"></Filed>
        </div>

        {/* Loader */}
        {!data && <Spinner />}
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {addNewPlan && (
            <div className="border border-gray p-4 mx-auto py-6 my-4  lg:mx-4 min-w-[350px] max-w-[450px] flex flex-col justify-between">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <div className="flex justify-between">
                    <div>
                      <Input
                        hookForm={register("planName")}
                        name="Plan Name"
                      ></Input>

                      <Input
                        hookForm={register("price")}
                        name="Plan Price"
                      ></Input>
                    </div>
                  </div>
                  <div className="my-6">
                    <h2>Features:</h2>
                    <ul>
                      {fields.map((field, index) => (
                        <li className="my-2" key={index}>
                          <input
                            key={field.id}
                            type="text"
                            placeholder="Add new feature"
                            className="bg-whiteGray px-4 py-2 text-[16px] outline-none w-full"
                            {...register(`plans.${index}.title`)}
                          />
                        </li>
                      ))}
                      <button
                        type="button"
                        onClick={() => append({ title: "" })}
                        className="bg-main p-2 w-10 h-10 text-white"
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Filed content="Add This Plan" type="submit"></Filed>
                </div>
              </form>
            </div>
          )}

          {data &&
            data.map((plan) => (
              <DashboardPlanCard key={plan._id} data={plan}></DashboardPlanCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
