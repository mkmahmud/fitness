import React from "react";
import PageHead from "../../../../components/Dashboard/Shared/Common/PageHead";
import Table from "../../../../components/Dashboard/Form/Table/Table";
import { setTrainerModal } from "../../../../redux/features/modals/modalSlie";
import { useDispatch } from "react-redux";
import { useGetTrainersForStudentQuery } from "../../../../redux/api/TrainersAndUsers/TrainersAndUsers";
import { getUserInfo } from "../../../../service/storeUserInfo";

const Trainer = () => {
  // dispatch
  const dispatch = useDispatch();

  // User Information
  const user = getUserInfo();

  // Get Trainer
  const { data: trainers, isLoading } = useGetTrainersForStudentQuery(user.id);

  const tableHead = [
    {
      index: 0,
      title: "Trainer Id",
      dataIndex: "trainer",
    },
    {
      index: 1,
      title: "Added Time",
      dataIndex: "addedTime",
    },
  ];

  const data = [
    {
      index: 0,
      name: "Trainer 1",
      key: "23rwe",
    },
  ];
  const updatedMealData =
    trainers &&
    trainers.map((item) => ({
      ...item, // Spread the existing item properties
      trainer: item.trainer,
      addedTime: item.createdAt,
      data: item,
      key: item._id,
    }));

  const handelView = async (data) => {
    return console.log(data);
  };

  return (
    <div>
      <PageHead title="My Current Trainres"></PageHead>
      <div className="my-4">
        <button
          onClick={() => {
            dispatch(setTrainerModal(true));
          }}
          className="flex items-center font-roboto text-white bg-main px-6  py-2 font-normal  text-xl"
        >
          Add New Trainer
        </button>
      </div>
      <div className="bg-white rounded-xl">
        {trainers && (
          <Table
            tableFor="CurrentTrainer"
            title="CurrentTrainer"
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

export default Trainer;
