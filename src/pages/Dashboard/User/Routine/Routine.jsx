import React from "react";
import PageHead from "../../../../components/Dashboard/Shared/Common/PageHead";
import Table from "../../../../components/Dashboard/Form/Table/Table";
import { useDispatch } from "react-redux";
import { setRoutineModal } from "../../../../redux/features/modals/modalSlie";
import { getUserInfo } from "../../../../service/storeUserInfo";
import { useGetAllRoutinesForUserQuery } from "../../../../redux/api/routine/routineApi";

const Routine = () => {
  // redux Dispatch
  const dispatch = useDispatch();

  // User Info
  const user = getUserInfo();

  // Routine Data
  const {
    data: routineData,
    error,
    isLoading,
  } = useGetAllRoutinesForUserQuery(user.id);

  const tableHead = [
    {
      index: 0,
      title: "Name",
      dataIndex: "name",
    },
    {
      index: 1,
      title: "Duration",
      dataIndex: "duration",
    },
  ];

  const data =
    routineData &&
    routineData.map((item) => ({
      ...item,
      name: item.routineName,
      duration: item.duration,
      data: item,
      key: item._id,
    }));

  const handelView = (data) => {
    return dispatch(setRoutineModal(data));
  };

  return (
    <div>
      <PageHead title="Routine"></PageHead>
      <div className="bg-white rounded-xl">
        {data && (
          <Table
            tableFor="Routine"
            title="Routine"
            tableHead={tableHead}
            data={data}
            isview={true}
            isviewOption={handelView}
          ></Table>
        )}
      </div>
    </div>
  );
};

export default Routine;
