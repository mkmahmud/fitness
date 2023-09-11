import React from "react";

const PageHeading = ({ content }) => {
  return (
    <div className="bg-black h-[260px] md:h-[350px] lg:h-[450px] flex items-center justify-center">
      <h2 className="text-[35px] text-white font-bold md:text-[50px]">
        {content}
      </h2>
    </div>
  );
};

export default PageHeading;
