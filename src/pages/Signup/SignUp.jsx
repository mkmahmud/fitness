import React, { useEffect, useState } from "react";
import sideImage from "../../assets/gallery/blog1.png";
import { set, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserMutation } from "../../redux/api/auth/authApi";
import Button from "../../components/Buttons/Button";
import toast from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();

  const [createUser, { isLoading, isError }] = useCreateUserMutation();

  // React hook from
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await createUser(data).unwrap();
      if (response) {
        console.log("User Created Successfully");
        toast.success("Sign Up succeeded");

        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const inputDesign =
    "w-full h-[60px] py-[10px] px-[25px] text-blue font-medium border-b-2 border-whiteGray text-[16px] outline-none my-4 bg-sky";

  return (
    <div
      className=" bg-fixed bg-cover bg-center pt-40 pb-6 md:pb-40 xl:h-screen md:flex items-center justify-center"
      style={{ backgroundImage: `url(${sideImage})` }}
    >
      <div className="bg-[#00000090] min-w-[400px] max-w-[500px] py-10 w-[90%] sm:w-[60%]  lg:w-[40%] mx-auto">
        <div className="px-5 text-center ">
          <div className="flex items-center justify-center">
            <div className="h-[2px] w-[100px] bg-main"></div>
            <p className=" pl-10 uppercase text-main text-xl">Sign Up</p>
          </div>

          <h2
            className="text-white text-extraLarge  font-bold uppercase py-6 text-center"
            style={{ fontFamily: "'Teko', sans-serif" }}
          >
            Wellcome to Fitness one
          </h2>
        </div>
        <form className="mx-4" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Enter your Full Name"
            className={inputDesign}
            name=""
            id="Name"
            {...register("fullName", { required: true })}
          />
          <input
            type="email"
            placeholder="Enter your Email"
            className={inputDesign}
            name=""
            id="email"
            {...register("email", { required: true })}
          />

          <input
            type="password"
            placeholder="Enter your Password"
            className={inputDesign}
            name=""
            id="password"
            {...register("password", { required: true })}
          />
          <div className="flex">
            <div
              className=" my-10 mx-auto  font-popins"
              style={{ fontFamily: "'Teko', sans-serif" }}
            >
              <Button>Sign Up</Button>
            </div>
          </div>
        </form>
        <div className="border-t-2 border-whiteGray mx-auto my-4 w-2/3">
          <p className="text-center text-white text-[20px] py-4">
            Already have an account{" "}
            <Link className="text-main underline" to="/login">
              Log In here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
