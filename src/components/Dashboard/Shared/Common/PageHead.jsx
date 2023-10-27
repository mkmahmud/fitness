import React from "react";

const PageHead = ({ title }) => {
  return (
    <div className="flex justify-between my-6">
      <h1 className="font-semibold text-[30px]">{title}</h1>
    </div>
  );
};

export default PageHead;
