import React from "react";
import PageHead from "../../../../components/Dashboard/Shared/Common/PageHead";
import Table from "../../../../components/Dashboard/Form/Table/Table";
import { setTrainerModal } from "../../../../redux/features/modals/modalSlie";
import { useDispatch } from "react-redux";

const Trainer = () => {
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
  ];

  const data = [
    {
      index: 0,
      name: "Trainer 1",
      key: "23rwe",
    },
  ];

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
        <Table
          tableFor="CurrentTrainer"
          title="CurrentTrainer"
          tableHead={tableHead}
          data={data}
          isview={true}
          isviewOption={handelView}
        ></Table>
      </div>
    </div>
  );
};

export default Trainer;
