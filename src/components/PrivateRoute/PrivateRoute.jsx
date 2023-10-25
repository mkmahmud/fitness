import React, { useEffect } from "react";
import { isLoggedUser } from "../../service/storeUserInfo";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const loggedUser = isLoggedUser();

  useEffect(() => {
    if (!loggedUser) {
      // Redirect to the login page if the user is not authenticated
      navigate("/login");
      return null; // Return null to prevent rendering children
    }
  }, [loggedUser]);

  return children;
};

export default PrivateRoute;
