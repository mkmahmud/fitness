import React from "react";
import PageHead from "../../../../components/Dashboard/Shared/Common/PageHead";
import Table from "../../../../components/Dashboard/Form/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { setMealModal } from "../../../../redux/features/modals/modalSlie";
import { useGetAllMealForUserQuery } from "../../../../redux/api/meal/mealApi";
import { getUserInfo } from "../../../../service/storeUserInfo";

const UserMeal = () => {
  // dispatch
  const dispatch = useDispatch();

  // User
  const user = getUserInfo();
  
  // Meal Data
  const {
    data: mealData,
    error,
    isLoading,
  } = useGetAllMealForUserQuery(user.id);

  const tableHead = [
    {
      index: 0,
      title: "Name",
      dataIndex: "mealTitle",
    },
    {
      index: 1,
      title: "Duration",
      dataIndex: "mealDuration",
    },
    {
      index: 2,
      title: "Start Date",
      dataIndex: "createdAt",
    },
  ];

  const updatedMealData =
    mealData &&
    mealData.map((item) => ({
      ...item, // Spread the existing item properties
      mealTitle: item.mealTitle,
      mealDuration: item.mealDuration,
      createdAt: item.createdAt,
      data: item,
      key: item._id,
    }));

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
