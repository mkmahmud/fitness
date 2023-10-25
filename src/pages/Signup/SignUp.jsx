import React, { useEffect, useState } from "react";
import sideImage from "../../assets/gallery/blog1.png";
import { set, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserMutation } from "../../redux/api/auth/authApi";
 
const SignUp = () => {
  const navigate = useNavigate();

  const [createUser, { isLoading, isError }] = useCreateUserMutation();

  // React hook from
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await createUser(data).unwrap();
      if (response?.data) {
        console.log("User Created Successfully");
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
      <div className="bg-[#00000085] py-10 w-[90%] sm:w-[60%]  lg:w-[40%] mx-auto">
        <div className="px-5 text-center ">
          <div className="flex items-center justify-center">
            <div className="h-[1px] w-[100px] bg-orange"></div>
            <p className=" pl-10 uppercase text-orange text-[20px]">Sign Up</p>
          </div>

          <h2
            className="text-white text-[29px]  font-bold uppercase py-6 text-center"
            style={{ fontFamily: "'Teko', sans-serif" }}
          >
            Wellcome to Fitness one
          </h2>
        </div>
        <form className="mx-4" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Enter your Email"
            className={inputDesign}
            name=""
            id=""
            {...register("email", { required: true })}
          />
          <input
            type="text"
            placeholder="Enter your Full Name"
            className={inputDesign}
            name=""
            id=""
            {...register("fullName", { required: true })}
          />
          <input
            type="password"
            placeholder="Enter your Password"
            className={inputDesign}
            name=""
            id=""
            {...register("password", { required: true })}
          />
          <div className="flex">
            <button
              className="px-10 py-4 my-10 mx-auto bg-red text-white text-[26px] uppercase font-light"
              style={{ fontFamily: "'Teko', sans-serif" }}
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="border-t-2 border-whiteGray mx-auto my-4 w-2/3">
          <p className="text-center text-white text-[20px] py-4">
            Already have an account{" "}
            <Link className="text-orange" to="/login">
              Log In here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
