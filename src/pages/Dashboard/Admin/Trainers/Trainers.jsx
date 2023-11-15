import React from "react";
import Select from "../../../../components/Dashboard/Form/Select/Select";
import Table from "../../../../components/Dashboard/Form/Table/Table";
import { useGetAllusersQuery } from "../../../../redux/api/user/userSlice";
import { useDispatch } from "react-redux";
import { setuserDetailsModal } from "../../../../redux/features/modals/modalSlie";
import Spinner from "../../../../components/Dashboard/Shared/Common/Spinner";

const Trainers = () => {
  // dispatch
  const dispatch = useDispatch();

  //   Get All All Members
  const { data: users } = useGetAllusersQuery("trainer");

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
        <h1 className="font-semibold text-[30px]">Trainers</h1>
      </div>

      {/* Loader */}
      {!data && <Spinner />}

      {/* Content */}
      <div className="bg-white rounded-xl">
        {data && (
          <Table
            title="All Trainers"
            tableHead={tableHead}
            data={data}
            tableFor="trainers"
            isview={true}
            isviewOption={handelView} 
          ></Table>
        )}
      </div>
    </div>
  );
};

export default Trainers;
