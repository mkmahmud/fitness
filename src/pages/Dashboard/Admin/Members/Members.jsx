import React from "react";
import Select from "../../../../components/Dashboard/Form/Select/Select";
import Table from "../../../../components/Dashboard/Form/Table/Table";

const Members = () => {
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
    {
      index: 3,
      title: "Membership",
      dataIndex: "membership",
    },
  ];

  const data = [
    {
      name: "Mahmudul Hasan",
      age: 20,
      joinedDate: "10/10/1010",
      membership: true,
      key: "323dafwe4",
    },
    {
      name: "Admin Hosen",
      age: 10,
      joinedDate: "10/10/1010",
      membership: false,
      key: "323dafwd3",
    },
  ];

  return (
    <div>
      <div className="flex justify-between my-6">
        <h1 className="font-semibold text-[30px]">Members</h1>
      </div>
      {/* Content */}
      <div className="bg-white rounded-xl">
        {/*  Table */}

        <Table
          title="All Member"
          tableHead={tableHead}
          data={data}
          tableFor="members"
          isview={true}
          isedit={true}
          isdelete={true}
        ></Table>
      </div>
    </div>
  );
};

export default Members;
