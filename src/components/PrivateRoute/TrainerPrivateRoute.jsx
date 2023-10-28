import React, { useEffect, useState } from "react";
import { getUserInfo } from "../../service/storeUserInfo";
import { useNavigate } from "react-router-dom";

const TrainerPrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const userInfo = getUserInfo();
  useEffect(() => {
    if (userInfo.role !== "trainer") {
      navigate("/dashboard");
    }
    setLoading(false);
  }, [userInfo.role, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return children;
};

export default TrainerPrivateRoute;
