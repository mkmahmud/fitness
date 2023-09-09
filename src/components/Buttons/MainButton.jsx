import React from "react";
import { Link } from "react-router-dom";

const MainButton = ({ path, content }) => {
  return (
    <button
      className="px-10 py-4 bg-red text-white text-[18px] uppercase font-light"
      style={{ fontFamily: "'Teko', sans-serif" }}
    >
      <Link to={path}>{content}</Link>
    </button>
  );
};

export default MainButton;
