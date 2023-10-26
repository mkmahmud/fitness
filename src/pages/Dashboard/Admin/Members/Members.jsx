import React from "react";
import Select from "../../../../components/Dashboard/Form/Select/Select";
import Table from "../../../../components/Dashboard/Form/Table/Table";

const Members = () => {
  return (
    <div>
      <div className="flex justify-between my-6">
        <h1 className="font-semibold text-[30px]">Members</h1>
      </div>
      {/* Content */}
      <div className="bg-white rounded-xl">
        {/*  Table */}
        <div className="  rounded-xl px-4 flex justify-between items-center py-6 bg-white">
          <div>
            <h1 className="text-[20px] font-semibold">All Members</h1>
          </div>
          <div>
            <Select></Select>
            <Select></Select>
            <Select></Select>
          </div>
        </div>
        <div>
          <Table></Table>
        </div>
        <div className="flex justify-between items-center px-4 py-6">
          <p className="text-gray">1-8 of 24</p>
          <div>
            <button className="px-4">1</button>
            <button className="px-4 text-red">2</button>
            <button className="px-4">3</button>
            <button className="px-4"> {`>`} </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Members;
