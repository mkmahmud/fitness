import React from "react";
import PageHead from "../../../../components/Dashboard/Shared/Common/PageHead";
import Table from "../../../../components/Dashboard/Form/Table/Table";

const Mystudents = () => {
  const tableHead = [
    {
      index: 0,
      title: "Name",
      dataIndex: "name",
    },
    {
      index: 1,
      title: "Student ID",
      dataIndex: "id",
    },
    {
      index: 2,
      title: "Time",
      dataIndex: "time",
    },
  ];

  const data = [
    {
      name: "Student 1",
      id: "M-0001",
      time: "11AM",
      key: "323dffwe4",
    },
    {
      name: "Student 2",
      id: "M-0001",
      time: "11AM",
      key: "323dffwe9",
    },
  ];
 
  return (
    <div>
      <PageHead title="Students"></PageHead>
      <div className="bg-white rounded-xl">
        <Table
          tableFor="MyStudents"
          title="My Students"
          tableHead={tableHead}
          data={data} 
        ></Table>
      </div>
    </div>
  );
};

export default Mystudents;
