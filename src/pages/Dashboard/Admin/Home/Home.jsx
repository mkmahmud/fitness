import React from "react";
import { getUserInfo } from "../../../../service/storeUserInfo";
import StatusCard from "../../../../components/Dashboard/StatusCard/StatusCard";

const AdminHome = () => {
  // Get user information
  const user = getUserInfo();

  return (
    <div>
      <div className="my-4  ">
        <h1 className="text-[30px] font-bold">Wellcome, {user?.email}</h1>
      </div>
      <div className="md:flex justify-between items-center">
        <StatusCard />
        <StatusCard />
        <StatusCard />
        <StatusCard />
      </div>
    </div>
  );
};

export default AdminHome;
