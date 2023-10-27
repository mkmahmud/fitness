import React from "react";
import Select from "../../../../components/Dashboard/Form/Select/Select";
import Table from "../../../../components/Dashboard/Form/Table/Table";

const Trainers = () => {
  const tableHead = [
    {
      index: 0,
      title: "Name",
      dataIndex: "name",
    },
    {
      index: 1,
      title: "Age",
      dataIndex: "age",
    },
    {
      index: 2,
      title: "Joined Date",
      dataIndex: "joinedDate",
    },
  ];

  const data = [
    {
      name: "Trainer Hasan",
      age: 20,
      joinedDate: "10/10/1010",
      key: "323dafwe4",
    },
    {
      name: "Trainer ",
      age: 10,
      joinedDate: "10/10/1010",
      key: "323dafwd3",
    },
    {
      name: "Trainer ",
      age: 10,
      joinedDate: "10/10/1010",
      key: "323dafwd3",
    },
    {
      name: "Trainer ",
      age: 10,
      joinedDate: "10/10/1010",
      key: "323dafwd3",
    },
  ];

  return (
    <div>
      <div className="flex justify-between my-6">
        <h1 className="font-semibold text-[30px]">Trainers</h1>
      </div>
      {/* Content */}
      <div className="bg-white rounded-xl">
        <Table
          title="All Trainers"
          tableHead={tableHead}
          data={data}
          tableFor="trainers"
          isview={true}
          isedit={true}
          isdelete={true}
        ></Table>
      </div>
    </div>
  );
};

export default Trainers;
