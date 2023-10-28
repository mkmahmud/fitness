import React from "react";
import { getUserInfo } from "../../../../service/storeUserInfo";
import StatusCard from "../../../../components/Dashboard/StatusCard/StatusCard";
import Profile from "../../../../components/Dashboard/Shared/Common/Profile";

const AdminHome = () => {
  // Get user information
  const user = getUserInfo();

  return (
    <div>
      <Profile></Profile>

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
