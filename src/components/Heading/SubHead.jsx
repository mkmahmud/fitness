import React from "react";

const SubHead = ({ color, title }) => {
  return (
    <p className={`text-${color} pl-4   text-sm font-poppins font-semibold`}>
      {title}
    </p>
  );
};

export default SubHead;
 