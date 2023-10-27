import React from "react";
import PageHead from "../../../../components/Dashboard/Shared/Common/PageHead";
import Table from "../../../../components/Dashboard/Form/Table/Table";
import { useDispatch } from "react-redux";
import { setRoutineModal } from "../../../../redux/features/modals/modalSlie";

const Routine = () => {
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
      name: "Routine 1",
      duration: "2m",
      startDate: "10/10/1010",
      key: "323dafwe4",
    },
  ];
  const handelView = (data) => {
    return dispatch(setRoutineModal(data));
  };

  return (
    <div>
      <PageHead title="Routine"></PageHead>
      <div className="bg-white rounded-xl">
        <Table
          tableFor="Routine"
          title="Routine"
          tableHead={tableHead}
          data={data}
          isview={true}
          isviewOption={handelView}
        ></Table>
      </div>
    </div>
  );
};

export default Routine;
