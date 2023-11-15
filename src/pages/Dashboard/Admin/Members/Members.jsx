import React, { useEffect, useState } from "react";
import Select from "../../../../components/Dashboard/Form/Select/Select";
import Table from "../../../../components/Dashboard/Form/Table/Table";
import {
  useGetAllusersQuery,
  useGetUserDetailsQuery,
} from "../../../../redux/api/user/userSlice";
import { setuserDetailsModal } from "../../../../redux/features/modals/modalSlie";
import { useDispatch } from "react-redux";
import Spinner from "../../../../components/Dashboard/Shared/Common/Spinner";

const Members = () => {
  // Dispatch
  const dispatch = useDispatch();

  //   Get All All Members
  const { data: users } = useGetAllusersQuery("user");

  const tableHead = [
    {
      index: 1,
      title: "ID",
      dataIndex: "id",
    },
    {
      index: 0,
      title: "Name",
      dataIndex: "name",
    },

    {
      index: 2,
      title: "Email",
      dataIndex: "email",
    },
  ];

  const data =
    users &&
    users?.user?.map((user) => ({
      ...user,
      id: user.id,
      name: user.fullName,
      email: user.email,
      data: user,
      key: user._id,
    }));

  const handelView = (data) => {
    return dispatch(setuserDetailsModal(data));
  };

  return (
    <div>
      <div className="flex justify-between my-6">
        <h1 className="font-semibold text-[30px]">Members</h1>
      </div>

      {/* Loader */}
      {!data && <Spinner />}

      {/* Content */}
      <div className="bg-white rounded-xl">
        {/*  Table */}
        {data && (
          <Table
            title="All Member"
            tableHead={tableHead}
            data={data}
            tableFor="members"
            isview={true}
            isviewOption={handelView} 
            perPage={10}
          ></Table>
        )}
      </div>
    </div>
  );
};

export default Members;
