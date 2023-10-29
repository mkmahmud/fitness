import React from "react";
import PageHead from "../../../../components/Dashboard/Shared/Common/PageHead";
import Table from "../../../../components/Dashboard/Form/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { setMealModal } from "../../../../redux/features/modals/modalSlie";
import { useGetAllMealForUserQuery } from "../../../../redux/api/meal/mealApi";

const UserMeal = () => {
  // dispatch
  const dispatch = useDispatch();

  // User
  const user = useSelector((state) => state.user.user);

  // Meal Data
  const {
    data: mealData,
    error,
    isLoading,
  } = useGetAllMealForUserQuery(user?._id);

  const tableHead = [
    {
      index: 0,
      title: "Name",
      dataIndex: "mealName",
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

  const updatedMealData =
    mealData &&
    mealData.map((item) => ({
      ...item, // Spread the existing item properties
      name: "Meal 1",
      duration: "3m",
      startDate: "10/10/1010",
      data: item,
      key:  item._id,
    }));

  console.log(updatedMealData);

  // Now updatedMealData contains the updated meal data with the additional object

  const handelView = (data) => { 
    return dispatch(setMealModal(data));
  };

  return (
    <div>
      <PageHead title="Meal"></PageHead>
      <div className="bg-white rounded-xl">
        {updatedMealData && (
          <Table
            tableFor="Routine"
            title="My Meals"
            tableHead={tableHead}
            data={updatedMealData}
            isview={true}
            isviewOption={handelView}
          ></Table>
        )}
      </div>
    </div>
  );
};

export default UserMeal;
