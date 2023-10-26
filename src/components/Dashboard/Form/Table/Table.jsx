import React from "react";
import profileImage from "../../../../assets/dashboard/profile.webp";

const Table = () => {
  return (
    <table className="w-full   text-left mt-6">
      <thead className="border-b border-gray text-gray ">
        <tr>
          <th className="py-2 px-4">Name</th>
          <th className="py-2 px-4">Age</th>
          <th className="py-2 px-4">Joined Date</th>
          <th className="py-2 px-4">Membership</th>
          <th className="py-2 px-4">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4 flex items-center space-x-2">
            <img
              src={profileImage}
              className="h-[30px] w-[30px] rounded"
              alt=""
            />
            <div>
              <h2>Admin Hasn</h2>
            </div>
          </td>
          <td className="py-2 px-4">12</td>
          <td className="py-2 px-4">10/10/2023</td>
          <td className="py-2 px-4 ">
            {" "}
            <div className="bg-lightGreen px-2 rounded-full w-[100px] mx-auto text-center">
              {/* <i class="fa-solid fa-chart-line"></i> */}
              <span>Active</span>
            </div>{" "}
          </td>
          <td className="py-2 px-4 flex   items-center">
            <button className="bg-lightGreen  text-black h-[30px] w-[30px] px-2 rounded  mx-auto text-center">
              E
            </button>
            <button className="bg-lightGreen  text-black h-[30px] w-[30px] px-2 rounded  mx-auto text-center">
              V
            </button>
            <button className="bg-red  text-white h-[30px] w-[30px] px-2 rounded  mx-auto text-center">
              D
            </button>
          </td>
        </tr>
        <tr>
          <td className="py-2 px-4 flex items-center space-x-2">
            <img
              src={profileImage}
              className="h-[30px] w-[30px] rounded"
              alt=""
            />
            <div>
              <h2>Admin Hasn</h2>
            </div>
          </td>
          <td className="py-2 px-4">12</td>
          <td className="py-2 px-4">10/10/2023</td>
          <td className="py-2 px-4 ">
            {" "}
            <div className="bg-lightGreen px-2 rounded-full w-[100px] mx-auto text-center">
              {/* <i class="fa-solid fa-chart-line"></i> */}
              <span>Active</span>
            </div>{" "}
          </td>
          <td className="py-2 px-4 flex   items-center">
            <button className="bg-lightGreen  text-black h-[30px] w-[30px] px-2 rounded  mx-auto text-center">
              E
            </button>
            <button className="bg-lightGreen  text-black h-[30px] w-[30px] px-2 rounded  mx-auto text-center">
              V
            </button>
            <button className="bg-red  text-white h-[30px] w-[30px] px-2 rounded  mx-auto text-center">
              D
            </button>
          </td>
        </tr>
        <tr>
          <td className="py-2 px-4 flex items-center space-x-2">
            <img
              src={profileImage}
              className="h-[30px] w-[30px] rounded"
              alt=""
            />
            <div>
              <h2>Admin Hasn</h2>
            </div>
          </td>
          <td className="py-2 px-4">12</td>
          <td className="py-2 px-4">10/10/2023</td>
          <td className="py-2 px-4 ">
            {" "}
            <div className="bg-lightGreen px-2 rounded-full w-[100px] mx-auto text-center">
              {/* <i class="fa-solid fa-chart-line"></i> */}
              <span>Active</span>
            </div>{" "}
          </td>
          <td className="py-2 px-4 flex   items-center">
            <button className="bg-lightGreen  text-black h-[30px] w-[30px] px-2 rounded  mx-auto text-center">
              E
            </button>
            <button className="bg-lightGreen  text-black h-[30px] w-[30px] px-2 rounded  mx-auto text-center">
              V
            </button>
            <button className="bg-red  text-white h-[30px] w-[30px] px-2 rounded  mx-auto text-center">
              D
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
