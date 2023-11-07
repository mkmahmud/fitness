import React from "react";
import { useDispatch } from "react-redux";
import {
  useGetAllMessagesQuery,
  useMarkAsReadMutation,
} from "../../../../redux/api/Contact/ContactApi";
import Table from "../../../../components/Dashboard/Form/Table/Table";
import Spinner from "../../../../components/Dashboard/Shared/Common/Spinner";

const NewMessages = () => {
  // Dispatch
  const dispatch = useDispatch();

  //   Get All All Messages
  const { data: messages } = useGetAllMessagesQuery();

  //   Handel Mark As Read
  const [markAsRead] = useMarkAsReadMutation();

  const tableHead = [
    {
      index: 0,
      title: " ",
      dataIndex: "isRead",
    },
    {
      index: 1,
      title: "Name",
      dataIndex: "name",
    },

    {
      index: 2,
      title: "Email",
      dataIndex: "email",
    },
    {
      index: 3,
      title: "Message",
      dataIndex: "message",
    },
    {
      index: 4,
      title: "Time",
      dataIndex: "time",
    },
  ];

  const data =
    messages &&
    messages.map((message) => ({
      ...message,
      message: message.message,
      name: message.name,
      email: message.email,
      time: message.createdAt,
      isRead: message.isRead ? (
        ""
      ) : (
        <p className="h-[15px] w-[15px] bg-main rounded-full"></p>
      ),
      data: message,
      key: message._id,
    }));

  data && data.sort((a, b) => new Date(b.time) - new Date(a.time));

  const handelView = async (data) => {
    return await markAsRead(data?.data?._id);
  };

  return (
    <div>
      <div className="flex justify-between my-6">
        <h1 className="font-semibold text-[30px]">Messages</h1>
      </div>

      {/* Loader */}
      {!data && <Spinner />}

      <div className="bg-white rounded-xl">
        {/*  Table */}
        {data && (
          <Table
            title="All Member"
            tableHead={tableHead}
            data={data}
            tableFor="members"
            isview={true}
            isviewOption={handelView}
            perPage={10}
          ></Table>
        )}
      </div>
    </div>
  );
};

export default NewMessages;
