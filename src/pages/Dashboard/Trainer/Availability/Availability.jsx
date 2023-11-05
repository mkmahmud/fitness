import React from "react";
import PageHead from "../../../../components/Dashboard/Shared/Common/PageHead";
import Table from "../../../../components/Dashboard/Form/Table/Table";
import { getUserInfo } from "../../../../service/storeUserInfo";
import {
  useDeleteAvailabilityMutation,
  useGetAllAvailableTimeQuery,
} from "../../../../redux/api/avilable/availableApi";
import { setAvailableModal } from "../../../../redux/features/modals/modalSlie";
import { useDispatch } from "react-redux";

const Availability = () => {
  // Set Modal Status
  const dispatch = useDispatch();

  // User
  const user = getUserInfo();

  // get Availability
  const { data: availability } = useGetAllAvailableTimeQuery(user.id);

  // Delete Availability
  const [deleteAvailability, { isLoading, isError }] =
    useDeleteAvailabilityMutation();

  const tableHead = [
    {
      index: 0,
      title: "Day",
      dataIndex: "day",
    },
    {
      index: 1,
      title: "Time",
      dataIndex: "time",
    },
  ];

  const data =
    availability &&
    availability.map((item) => ({
      ...item,
      day: item.day,
      time: item.time,
      data: item,
      key: item._id,
    }));

  const handelEdit = (data) => {
    return console.log(data);
  };
  // Handel Delete Functions
  const handelDelete = async (data) => {
    try {
      const id = data._id;
      const response = await deleteAvailability(id);
      console.log(response);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <PageHead title="Availability"></PageHead>
      <div className="my-4">
        <button
          onClick={() => {
            dispatch(setAvailableModal(true));
          }}
          className="flex items-center font-roboto text-white bg-main px-6  py-2 font-normal  text-xl"
        >
          Add Availability
        </button>
      </div>
      <div className="bg-white rounded-xl">
        {data && (
          <Table
            tableFor="availability"
            title="My Availability"
            tableHead={tableHead}
            data={data}
            isedit={true}
            isEditOption={handelEdit}
            perPage={7}
            isdelete={true}
            isDeleteOption={handelDelete}
          ></Table>
        )}
      </div>
    </div>
  );
};

export default Availability;
