import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { getUserInfo, logOut } from "../../../service/storeUserInfo";
import logo from "../../../assets/logo/logo.png";
import {
  useCurrentUserQuery,
  useGetUserDetailsQuery,
} from "../../../redux/api/user/userSlice";
const Topbar = ({ sidebar, setSidebar }) => {
  // Handel Profile Button
  const [profile, setProfile] = useState(false);

  // Get User Information
  const user = getUserInfo();

  // User information
  const { data, error, isLoading } = useCurrentUserQuery(user?.id);

  // User Details Information
  const { data: userDetails } = useGetUserDetailsQuery(user?.id);

  // Navigation
  const navigation = useNavigate();
  return (
    <div className="flex justify-between bg-white items-center px-4 py-2 border-b border-gray fixed w-full h-[60px]">
      <div className="flex items-center">
        <h2 className="text-[30px] font-semibold">
          {/* <Link to='/'><span className="text-red">FITNESS</span>ONE</Link> */}
          <Link to="/">
            <img src={logo} alt="Fitness one Logo" />
          </Link>
        </h2>
        <button
          className="mx-4 md:hidden"
          onClick={() => {
            setSidebar(!sidebar);
          }}
        >
          <i className="fa-solid fa-bars text-red text-[25px]"></i>
        </button>
      </div>
      <div className="flex space-x-4 items-center ">
        <button className="border border-gray p-2 h-[40px] w-[40px]  ">
          <i className="fa-solid fa-bell text-[20px] text-gray"></i>
        </button>
        <img
          onClick={() => {
            setProfile(!profile);
          }}
          src={
            userDetails?.user?.profilePhoto
              ? userDetails?.user?.profilePhoto
              : logo
          }
          className="h-[40px] w-[40px] cursor-pointer border border-gray p-1"
          alt="Profile"
        />
        {profile && (
          <div className="absolute  top-16 bg-white border border-gray  right-4   py-2">
            <ul>
              <li className="px-6 py-6 text-center  border-b border-gray flex items-center">
                {" "}
                <img
                  src={
                    userDetails?.user?.profilePhoto
                      ? userDetails?.user?.profilePhoto
                      : logo
                  }
                  alt="Profile Image"
                  className="h-[40px] w-[40px] mx-4"
                />
                <span>{user?.id}</span>
              </li>
              <li
                className="px-6 py-2  border-b border-gray"
                onClick={() => {
                  setProfile(false);
                }}
              >
                <Link to="/dashboard/settings/change-password">
                  <i className="px-2 fa-solid fa-user-pen"></i>{" "}
                  <span>Change Password</span>
                </Link>
              </li>
              <li
                className="px-6 py-2 cursor-pointer  "
                onClick={() => {
                  logOut();
                  navigation("/login");
                }}
              >
                <p>
                  <i className="px-2 fa-solid fa-right-from-bracket "></i>{" "}
                  <span>Sign Out</span>
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
