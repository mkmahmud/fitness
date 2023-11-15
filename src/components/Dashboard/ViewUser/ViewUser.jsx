import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setRoutineModal,
  setuserDetailsModal,
} from "../../../redux/features/modals/modalSlie";
import PageHead from "../Shared/Common/PageHead";
import profile from "../../../assets/dashboard/profile.webp";
import Input from "../Form/Input/Input";
import Filed from "../Button/Filed";
import { useForm } from "react-hook-form";
import DisabledFiled from "../Form/Input/DisabledFiled";
import { useGetUserDetailsQuery } from "../../../redux/api/user/userSlice";
import { useGetMembershipDetailsQuery } from "../../../redux/api/userMembership/userMembership";

const ViewUser = () => {
  // Get User details
  const data = useSelector((state) => state.modal.userDetails);
  const { fullName, id, email, role } = data?.data?.data;

  // Full User Details
  const { data: userDetails } = useGetUserDetailsQuery(id);

  // Get Membership Details
  const { data: membershipStatus } = useGetMembershipDetailsQuery(id);

  // Set Modal Status
  const dispatch = useDispatch();

  //   Handel Form Data
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div>
      {data?.data?.open && (
        <div className="absolute top-0 h-screen bg-[#00000030] w-full  inset-0 flex items-center justify-end ">
          <div className="bg-white h-screen p-6   w-full md:w-[80%]">
            <div className="flex justify-between">
              <PageHead title="Details"></PageHead>

              <button
                onClick={() => {
                  dispatch(setuserDetailsModal({ isOpen: false, data: {} }));
                }}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="my-4">
              <div className="md:flex border-gray border-t ">
                <div className="w-full md:w-3/12 py-6">
                  <img
                    src={
                      userDetails?.user?.profilePhoto
                        ? userDetails?.user?.profilePhoto
                        : profile
                    }
                    className="h-[200px] w-[200px] block mx-auto"
                    alt="Profile"
                  />
                  <div className="text-center my-4">
                    <h1 className="text-extraLarge text-semibold">
                      {fullName}
                    </h1>
                    <h4 className="text-xl">Id: {id}</h4>
                    <h4 className="text-lg text-main">{email}</h4>

                    <div className="my-6">
                      <Filed type="button" content="Actions"></Filed>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-9/12  border-gray border-l  py-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 py-4 px-4">
                    {role === "trainer" && (
                      <>
                        <div className="p-2">
                          <h2 className="text-xl  font-semibold">
                            Total Students
                          </h2>
                          <h1 className="text-xl font-bold">23</h1>
                        </div>
                        <div className="p-2">
                          <h2 className="text-xl  font-semibold">Total Paid</h2>
                          <h1 className="text-xl font-bold">$ 100.00</h1>
                        </div>
                      </>
                    )}
                    {role === "user" && (
                      <div className="p-2">
                        <h2 className="text-xl  font-semibold">
                          Recived Ammount
                        </h2>
                        <h1 className="text-xl font-bold">$ 600.00</h1>
                      </div>
                    )}
                    <div className="p-2">
                      <h2 className="text-xl  font-semibold">Total Days</h2>
                      <h1 className="text-xl font-bold">986</h1>
                    </div>
                  </div>

                  {userDetails?.user && (
                    <div className="grid grid-cols-1 md:grid-cols-2 border-gray border-t px-4">
                      <DisabledFiled
                        data={fullName}
                        name="Full Name"
                      ></DisabledFiled>
                      <DisabledFiled data={id} name="ID"></DisabledFiled>
                      <DisabledFiled data={email} name="Email"></DisabledFiled>

                      {role === "user" && membershipStatus?.status ? (
                        <DisabledFiled
                          data={
                            membershipStatus?.status ? "Active" : "InActive"
                          }
                          name="Membership"
                          bg={membershipStatus?.status ? "lightGreen" : "main"}
                          color="black"
                        ></DisabledFiled>
                      ) : (
                        ""
                      )}

                      <DisabledFiled
                        data={
                          userDetails?.user?.phoneNumber &&
                          userDetails?.user?.phoneNumber
                        }
                        name="Phone Number"
                      ></DisabledFiled>
                      <DisabledFiled
                        data={userDetails?.user?.gender}
                        name="Gender"
                      ></DisabledFiled>
                      <DisabledFiled
                        data={userDetails?.user?.dateOfBirth}
                        name="Date of Birth"
                      ></DisabledFiled>
                      <DisabledFiled data={role} name="Role"></DisabledFiled>
                      <DisabledFiled
                        data={userDetails?.user?.presentAddress}
                        name="Present Address"
                      ></DisabledFiled>
                      <DisabledFiled
                        data={userDetails?.user?.parmanentAddress}
                        name="Parmanent Address"
                      ></DisabledFiled>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewUser;
