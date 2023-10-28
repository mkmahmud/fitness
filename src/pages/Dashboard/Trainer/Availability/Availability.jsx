import React from "react";
import PageHead from "../../../../components/Dashboard/Shared/Common/PageHead";
import Table from "../../../../components/Dashboard/Form/Table/Table";

const Availability = () => {
  const tableHead = [
    {
      index: 0,
      title: "Day",
      dataIndex: "day",
    },
    {
      index: 1,
      title: "Time",
      dataIndex: "time",
    },
  ];

  const data = [
    {
      day: "Sunday",
      time: "11AM-3PM",
      key: "323dffwe4",
    },
    {
      day: "Friday",
      time: "11AM-3PM",
      key: "323dffwe1",
    },
  ];

  const handelEdit = (data) => {
    return console.log(data);
  };

  return (
    <div>
      <PageHead title="Availability"></PageHead>
      <div className="bg-white rounded-xl">
        <Table
          tableFor="availability"
          title="My Availability"
          tableHead={tableHead}
          data={data}
          isedit={true}
          isEditOption={handelEdit}
        ></Table>
      </div>
    </div>
  );
};

export default Availability;
