import React from "react";
import PageHead from "../../../../components/Dashboard/Shared/Common/PageHead";
import Table from "../../../../components/Dashboard/Form/Table/Table";
import { useDispatch } from "react-redux";
import { setMealModal } from "../../../../redux/features/modals/modalSlie";

const UserMeal = () => {
  // dispatch
  const dispatch = useDispatch();
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
    {
      index: 2,
      title: "Start Date",
      dataIndex: "startDate",
    },
  ];

  const data = [
    {
      name: "Meal 1",
      duration: "3m",
      startDate: "10/10/1010",
      key: "323dffwe4",
    },
    {
      name: "Meal 2",
      duration: "3m",
      startDate: "10/10/1010",
      key: "323dqfwe4",
    },
    {
      name: "Meal 3",
      duration: "3m",
      startDate: "10/10/1010",
      key: "323dwfwe4",
    },
  ];
  const handelView = (data) => {
    return dispatch(setMealModal(data));
  };

  return (
    <div>
      <PageHead title="Meal"></PageHead>
      <div className="bg-white rounded-xl">
        <Table
          tableFor="Routine"
          title="My Meals"
          tableHead={tableHead}
          data={data}
          isview={true}
          isviewOption={handelView}
        ></Table>
      </div>
    </div>
  );
};

export default UserMeal;
