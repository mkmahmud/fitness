import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center  py-10">
      <div className="w-20 h-20 border-t-4 border-r-4 border-b-4 border-l-4 border-r-main border-b-main  border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
