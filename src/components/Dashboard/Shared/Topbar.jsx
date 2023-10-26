import { useState } from "react";
import profileImage from "../../../assets/dashboard/profile.png";
import { Link } from "react-router-dom";
const Topbar = ({ sidebar, setSidebar }) => {
  // Handel Profile Button
  const [profile, setProfile] = useState(false);

  return (
    <div className="flex justify-between bg-white items-center px-4 py-2 border-b border-gray fixed w-full h-[60px]">
      <div className="flex items-center">
        <h2 className="text-[30px] font-semibold">
          <span className="text-red">FITNESS</span>ONE
        </h2>
        <button
          className="mx-4 md:hidden"
          onClick={() => {
            setSidebar(!sidebar);
          }}
        >
          <i class="fa-solid fa-bars text-red text-[25px]"></i>
        </button>
      </div>
      <div className="flex space-x-4 items-center ">
        <button className="border border-gray p-2 h-[40px] w-[40px] rounded-lg">
          <i class="fa-solid fa-bell text-[20px]"></i>
        </button>
        <img
          onClick={() => {
            setProfile(!profile);
          }}
          src={profileImage}
          className="h-[40px] w-[40px] cursor-pointer"
          alt="Profile"
        />
        {profile && (
          <div className="absolute  top-16 bg-white border border-gray  right-4   py-2">
            <ul>
              <li className="px-6 py-2  border-b border-gray">
                <Link to="/signout">
                  {" "}
                  <i class="px-2 fa-solid fa-user-pen"></i>{" "}
                  <span>Change Password</span>
                </Link>
              </li>
              <li className="px-6 py-2  ">
                <Link to="/signout">
                  <i class="px-2 fa-solid fa-right-from-bracket "></i>{" "}
                  <span>Sign Out</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
