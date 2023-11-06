import React from "react";

const SectionHead = ({ color, title }) => {
  return (
    <h2
      className={`text-${color} text-[29px] sm:text-[44px] md:text-[50px] md:leading-none  font-bold   py-6  `}
      style={{ fontFamily: "'Teko', sans-serif" }}
    >
      {title}
    </h2>
  );
};

export default SectionHead;
