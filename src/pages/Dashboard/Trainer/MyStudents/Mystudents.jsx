import React from "react";
import PageHead from "../../../../components/Dashboard/Shared/Common/PageHead";
import Table from "../../../../components/Dashboard/Form/Table/Table";
import { getUserInfo } from "../../../../service/storeUserInfo";
import { useGetAllStudentsForTrainerQuery } from "../../../../redux/api/TrainersAndUsers/TrainersAndUsers";

const Mystudents = () => {
  // User
  const user = getUserInfo();

  // get All Students
  const { data: students } = useGetAllStudentsForTrainerQuery(user.id);
 
  const tableHead = [
    {
      index: 1,
      title: "Student ID",
      dataIndex: "id",
    },
  ];

  const data =
    students &&
    students.map((student) => ({
      ...student,
      id: student.student,
      data: student,
      key: student._id,
    }));

  return (
    <div>
      <PageHead title="Students"></PageHead>
      <div className="bg-white rounded-xl">
        {data && (
          <Table
            tableFor="MyStudents"
            title="My Students"
            tableHead={tableHead}
            data={data}
            isedit={true}

          ></Table>
        )}
      </div>
    </div>
  );
};

export default Mystudents;
