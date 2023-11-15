import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import Filed from "../Button/Filed";
import {
  useDeletePlanMutation,
  useUpdatePlanMutation,
} from "../../../redux/api/membership/membershipApi";
import toast from "react-hot-toast";

const DashboardPlanCard = ({ data }) => {
  // get Id
  const [id, setId] = useState("");

  useEffect(() => {
    setId(data._id);
  }, [data]);

  // Handel Edit
  const [isEdit, setIsEdit] = useState(false);

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

  //   Update Plans
  const [updatePlan] = useUpdatePlanMutation();

  const onSubmit = async (formdata) => {
    try {
      console.log(formdata);
      console.log(id);
      const res = await updatePlan({ id: id, data: formdata });

      if (res) {
        console.log(res);
        toast.success("Plan updated Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   Handle deletion

  const [deletePlan] = useDeletePlanMutation();

  const handleDelete = async () => {
    // Display a confirmation dialog
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this plan?"
    );

    if (confirmDelete) {
      // User clicked OK in the confirmation dialog
      try {
        const res = await deletePlan(id);
        toast.success("Plan Deleted Successfully");
      } catch (error) {
        // Handle errors if necessary
        console.error("Error deleting plan:", error);
        toast.error("Error deleting plan");
      }
    } else {
      // User clicked Cancel in the confirmation dialog
      // You can add additional logic here if needed
      console.log("Deletion cancelled");
    }
  };

  return (
    <div className="border border-gray p-4 mx-auto py-6 my-4  lg:mx-4 min-w-[350px] max-w-[450px] flex flex-col justify-between">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="">
            <div>
              <div className="my-6 flex justify-between  items-center  ">
                <button
                  onClick={() => {
                    setIsEdit(!isEdit);
                  }}
                  className="bg-main px-6 py-2 text-white"
                  type="button"
                >
                  {isEdit ? (
                    <i className="fa-solid fa-x"></i>
                  ) : (
                    <i className="fa-solid fa-pen-to-square"></i>
                  )}
                </button>
                <button
                  className="bg-main px-6 py-2 text-white"
                  type="button"
                  onClick={handleDelete}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
                {isEdit && <Filed content="Update" type="submit"></Filed>}
              </div>
              <h2 className="text-extraLarge">
                {isEdit ? (
                  <input
                    type="text"
                    className="bg-whiteGray   px-4 py-2 text-[16px] outline-none w-full"
                    name=""
                    {...register("planName")}
                    id=""
                    defaultValue={data?.planName}
                  />
                ) : (
                  <span>{data?.planName}</span>
                )}
              </h2>

              <span className="text-xl">
                $
                <span className="font-bold text-main">
                  {" "}
                  {isEdit ? (
                    <input
                      type="text"
                      className="bg-whiteGray   px-4 py-2 text-[16px] outline-none w-full"
                      name=""
                      {...register("price")}
                      id=""
                      defaultValue={data?.price}
                    />
                  ) : (
                    <span>{data?.price}</span>
                  )}
                </span>
                /month
              </span>
            </div>
          </div>
          <div className="my-6">
            <h2>Features:</h2>
            <ul>
              {isEdit ? (
                <>
                  {data?.plans.map((plan, index) => (
                    <li className="my-2" key={index}>
                      <input
                        type="text"
                        className="bg-whiteGray   px-4 py-2 text-[16px] outline-none w-full"
                        name=""
                        id=""
                        {...register(`plans.${index}.title`)}
                        defaultValue={plan?.title}
                      />
                    </li>
                  ))}
                </>
              ) : (
                <>
                  {" "}
                  {data?.plans.map((plan, index) => (
                    <li className="my-2" key={index}>
                      {" "}
                      <i className="fa-solid fa-check mx-2 text-lightGreen"></i>{" "}
                      <span>{plan.title}</span>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DashboardPlanCard;
