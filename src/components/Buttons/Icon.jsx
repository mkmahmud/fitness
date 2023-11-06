import React from "react";

const Icon = ({ IconName, color, size }) => {
  return <i className={`${IconName} text-${color} text-${size} `}></i>;
};

export default Icon;
