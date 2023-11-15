import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserModal } from "../../../redux/features/modals/modalSlie";
import Input from "../Form/Input/Input";
import { useForm } from "react-hook-form";
import Filed from "../Button/Filed";
import { getUserInfo } from "../../../service/storeUserInfo";
import { useCreateUserMutation } from "../../../redux/api/auth/authApi";
import toast from "react-hot-toast";

const AddUser = () => {
  // Create User Account
  const isUserCreate = useSelector((state) => state.modal.user);
  // Set Modal Status
  const dispatch = useDispatch();

  // Create user Account
  const [createUser, { isLoading, isError }] = useCreateUserMutation();

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
      const response = await createUser(data);
      if (response) {
        toast.success("User Added Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   Get User Info
  const loggedUser = getUserInfo();

  //   Set Roles
  let roles;
  if (loggedUser.role === "admin") {
    roles = ["user", "trainer"];
  } else if (loggedUser.role === "super_admin") {
    roles = ["admin", "user", "super_admin", "trainer"];
  }

  return (
    <div>
      {isUserCreate && (
        <div className="absolute top-0 h-screen bg-[#00000030] w-full  inset-0 flex items-center justify-center ">
          <div className="bg-white w-[600px] p-6 rounded-xl ">
            <div className="flex justify-end">
              <button
                onClick={() => {
                  dispatch(setUserModal(false));
                }}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div>
              <h1 className="text-center text-[25px] font-semibold">
                Add User{" "}
              </h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 my-4">
                  <Input
                    hookForm={register("fullName")}
                    name="First Name"
                  ></Input>
                  <Input hookForm={register("email")} name="Email"></Input>
                  <Input
                    hookForm={register("password")}
                    name="Password"
                  ></Input>
                  <div className="my-2 px-2">
                    <p className="py-2">Role:</p>
                    <select
                      className="bg-whiteGray outline-none border border-gray px-4 py-2 w-full text-[16px]     "
                      name=""
                      id=""
                      {...register("role")}
                    >
                      {roles.map((role, i) => (
                        <option key={i} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex justify-center mt-8 w-full">
                  <Filed content="Add User" type={"submit"}></Filed>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddUser;
