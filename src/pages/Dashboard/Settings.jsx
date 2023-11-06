import React, { useEffect, useState } from "react";
import PageHead from "../../components/Dashboard/Shared/Common/PageHead";
import Filed from "../../components/Dashboard/Button/Filed";
import Input from "../../components/Dashboard/Form/Input/Input";
import { useForm } from "react-hook-form";
import { getUserInfo } from "../../service/storeUserInfo";
import {
  useGetUserDetailsQuery,
  useUdpadeUserDetailsMutation,
  useUpdatePasswordMutation,
} from "../../redux/api/user/userSlice";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import profileImage from "../../assets/dashboard/profile.webp";

const Settings = () => {
  // Get User Information
  const user = getUserInfo();

  // User Details Information
  const { data: userDetails } = useGetUserDetailsQuery(user?.id);

  // Update user Account hook
  const [udpadeUserDetails, { isLoading, isError }] =
    useUdpadeUserDetailsMutation();

  // Chnage Password hook
  const [updatePassword] = useUpdatePasswordMutation();

  // Handel Tabs
  const [handelTabs, sethandelTabs] = useState("Personal");

  // Get history
  const { value } = useParams();

  useEffect(() => {
    if (value === "change-password") {
      sethandelTabs("Security");
    }
  }, [value]);

  //   Handel Form Data

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.profile[0]);
    try {
      const DetailsData = {};

      if (data.profile.length > 0) {
        // Upload Into Cloud
        const response = await fetch(
          `https://api.imgbb.com/1/upload?key=dfdc7a513f976b9fb49f8a4e150e190e`,
          {
            method: "POST",
            body: formData,
          }
        );
        if (response.ok) {
          const responseData = await response.json();
          const imageUrl = responseData.data.display_url;

          DetailsData.id = user.id;
          DetailsData.phoneNumber = data.phoneNumber;
          DetailsData.profilePhoto = imageUrl;
          DetailsData.gender = data.gender;
          DetailsData.dateOfBirth = data.dateOfBirth;
          DetailsData.presentAddress = data.presentAddress;
          DetailsData.parmanentAddress = data.parmanentAddress;

          const res = await udpadeUserDetails({
            id: user.id,
            data: DetailsData,
          });
          if (res) {
            toast.success("Profile Update succeeded");
            reset();
          }
        } else {
          // Handle errors when the response is not okay (e.g., status code 400)
          console.error("Error uploading image:", response.statusText);
        }
      } else {
        DetailsData.id = user.id;
        DetailsData.phoneNumber = data.phoneNumber;
        DetailsData.gender = data.gender;
        DetailsData.dateOfBirth = data.dateOfBirth;
        DetailsData.presentAddress = data.presentAddress;
        DetailsData.parmanentAddress = data.parmanentAddress;
        const res = await udpadeUserDetails({
          id: user.id,
          data: DetailsData,
        });
        if (res) {
          toast.success("Profile Update succeeded");
          reset();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Cnage Password

  const validatePasswords = (value) => {
    const newPassword = watch("newPassword"); // Get the value of "New Password" field
    return value === newPassword || "Passwords Doesn't matched";
  };

  const changePassword = async (data) => {
    const changedPassword = {
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
      confirmNewPassword: data.confirmNewPassword,
    };

    try {
      const res = await updatePassword({
        id: user.id,
        data: changedPassword,
      });
      if (res) {
        console.log("Password Changed Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <PageHead title="Settings"></PageHead>
      <ul className="flex  mb-6 border-b border-gray">
        <li
          className={`p-2 text-lg font-semibold ${
            handelTabs === "Personal" ? "border-b-2 border-main text-main" : ""
          } mx-2 cursor-pointer`}
          onClick={() => {
            sethandelTabs("Personal");
          }}
        >
          Personal
        </li>
        <li
          className={`p-2 text-lg font-semibold ${
            handelTabs === "Security" ? "border-b-2 border-main text-main" : ""
          } mx-2 cursor-pointer`}
          onClick={() => {
            sethandelTabs("Security");
          }}
        >
          Security
        </li>
      </ul>

      {handelTabs === "Personal" && (
        <div className="bg-white ">
          <div className="p-4">
            <div className="md:flex ">
              <div className="w-full md:w-3/12">
                <h2 className="font-semibold text-lg">Basic Information</h2>
                <p className="text-lg ">Personal Details</p>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full md:w-9/12"
              >
                {" "}
                <div className="my-2 px-2">
                  <p className="py-2">Profile Photo</p>
                  <div className="">
                    <img
                      src={
                        userDetails?.user?.profilePhoto
                          ? userDetails?.user?.profilePhoto
                          : profileImage
                      }
                      className="h-[100px] w-[100px]"
                      alt=""
                    />
                    <input
                      type="file"
                      className="bg-whiteGray outline-none border border-gray px-4 py-2 w-full text-[16px] "
                      name=""
                      id=""
                      {...register("profile")}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 my-4">
                  <Input
                    hookForm={register("phoneNumber")}
                    name="Phone Number"
                    defaultValue={
                      userDetails?.user?.phoneNumber
                        ? userDetails?.user?.phoneNumber
                        : ""
                    }
                  ></Input>
                  <div className="my-2 px-2">
                    <p className="py-2">Gender:</p>
                    <select
                      className="bg-whiteGray outline-none border border-gray px-4 py-2 w-full text-[16px]     "
                      name=""
                      id=""
                      {...register("gender")}
                      defaultValue={
                        userDetails?.user?.gender
                          ? userDetails?.user?.gender
                          : ""
                      }
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                  <div className="my-2 px-2">
                    <p className="py-2">Date Of Birth</p>
                    <input
                      type="date"
                      className="bg-whiteGray outline-none border border-gray px-4 py-2 w-full text-[16px] "
                      name=""
                      id=""
                      {...register("dateOfBirth")}
                      defaultValue={
                        userDetails?.user?.dateOfBirth
                          ? userDetails?.user?.dateOfBirth
                          : ""
                      }
                    />
                  </div>
                  <Input
                    hookForm={register("presentAddress")}
                    name="Present Address"
                    defaultValue={
                      userDetails?.user?.presentAddress
                        ? userDetails?.user?.presentAddress
                        : ""
                    }
                  ></Input>
                  <Input
                    hookForm={register("parmanentAddress")}
                    name="Parmanent Address"
                    defaultValue={
                      userDetails?.user?.parmanentAddress
                        ? userDetails?.user?.parmanentAddress
                        : ""
                    }
                  ></Input>
                </div>
                <div className="flex justify-end mt-8 w-full">
                  <Filed content="Save change" type={"submit"}></Filed>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {handelTabs === "Security" && (
        <div className="bg-white mt-10">
          <div className="p-4">
            <div className="md:flex ">
              <div className="w-full md:w-3/12">
                <h2 className="font-semibold text-lg">Security</h2>
                <p className="text-lg ">Update Password</p>
              </div>
              <form
                onSubmit={handleSubmit(changePassword)}
                className="w-full md:w-9/12"
              >
                {" "}
                <div className="grid grid-cols-1   my-4">
                  <Input
                    hookForm={register("currentPassword", {
                      required: "Current Password is required",
                    })}
                    name="Current Password"
                  ></Input>

                  <Input
                    hookForm={register("newPassword", {
                      required: "Password is required",
                    })}
                    name="New Password"
                  ></Input>
                  <Input
                    hookForm={register("confirmNewPassword", {
                      required: "Password confirmation is required",
                      validate: validatePasswords,
                    })}
                    name="Confirm New Password"
                  ></Input>
                </div>
                {errors.confirmNewPassword && (
                  <p className="text-red">
                    {errors.confirmNewPassword.message}{" "}
                  </p>
                )}
                <div className="flex justify-end mt-8 w-full">
                  <Filed content="Update Password" type={"submit"}></Filed>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
