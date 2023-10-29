import React, { useEffect } from "react";
import PageHead from "../../components/Dashboard/Shared/Common/PageHead";
import { getUserInfo, isLoggedUser } from "../../service/storeUserInfo";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const DashboardHomePage = () => {
  // User
  const user = getUserInfo();

  // navigate
  const navigation = useNavigate();

  // Get is logged in
  const logged = isLoggedUser();  

  useEffect(() => {
    if (logged) {
      navigation(`/dashboard/${user.role}`);
    }
  }, [logged]);

  return (
    <div>
      <PageHead title={`Wellcome Back, ${user?.id} `}></PageHead>
    </div>
  );
};

export default DashboardHomePage;
