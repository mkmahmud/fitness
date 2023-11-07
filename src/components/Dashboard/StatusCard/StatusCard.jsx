import React from "react";

const StatusCard = () => {
  return (
    <div className="max-w-[300px] bg-white  p-4 rounded-xl mx-auto my-2">
      <div className="flex items-center justify-between py-4 ">
        <div className="border border-gray p-2 h-[40px] w-[40px] rounded-xl">
          <i className="fa-solid fa-user-plus text-[20px] text-red"></i>
        </div>
        <h2 className="px-2 font-bold text-[20px]">New Clients</h2>
      </div>
      <h1 className="font-bold text-[30px]">2,345</h1>
      <div className="flex items-center text-[14px] py-2">
        <div className="bg-lightGreen px-2 rounded-full">
          <i className="fa-solid fa-chart-line"></i> <span>10%</span>
        </div>
        <p className="px-2">since: 10-12-1012</p>
      </div>
    </div>
  );
};

export default StatusCard;
