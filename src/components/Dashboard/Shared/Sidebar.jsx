import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebar }) => {
  return (
    <div
      className={`bg-white border-r border-gray min-w-[300px] py-4 px-4 ${
        sidebar ? "block" : "hidden"
      } z-1 md:block absolute md:static`}
    >
      <p className="text-blackGray ">Basic Information</p>
      <ul>
        <li className="hover:bg-gray px-4 hover:rounded-r-full hover:border-red hover:border-l-4 my-4 py-2">
          <Link className="flex items-center text-blackGray">
            <i class="fa-solid fa-house h-[20px] w-[20px]"></i>{" "}
            <span className="text-[16px]  mx-2">Home</span>
          </Link>
        </li> 
        <li className="hover:bg-gray px-4 hover:rounded-r-full hover:border-red hover:border-l-4 my-4 py-2">
          <Link className="flex items-center text-blackGray">
            <i class="fa-solid fa-scale-unbalanced h-[20px] w-[20px]"></i>
            <span className="text-[16px]  mx-2">My Meal</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
