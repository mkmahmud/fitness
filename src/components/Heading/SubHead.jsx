import React from "react";

const SubHead = ({ color, title }) => {
  return (
    <p
      className={`text-${color} pl-10 uppercase text-orange text-[15px] font-bold`}
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      {title}
    </p>
  );
};

export default SubHead;
