import React from "react";
import PageHead from "../../components/Dashboard/Shared/Common/PageHead";
import { getUserInfo } from "../../service/storeUserInfo";

const DashboardHomePage = () => {
  // User
  const user = getUserInfo();
  return (
    <div>
      <PageHead title={`Wellcome Back, ${user?.id} `}></PageHead>
    </div>
  );
};

export default DashboardHomePage;
