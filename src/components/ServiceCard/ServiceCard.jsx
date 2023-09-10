import React from "react";
import { FaDumbbell, FaHeartbeat, FaICursor } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ icon, title, description, path, content }) => {
  return (
    <div className="group text-center bg-white my-10 p-10 mx-4 relative max-w-sm mx-auto ">
      <div>
        <FaDumbbell className="mx-auto text-[50px] text-gray  group-hover:text-orange my-4" />
      </div>
      <div className="my-6">
        <Link className="uppercase text-[24px]" to="/">
          {title}
        </Link>
      </div>
      <p className="text-[14px] text-gray px-10 my-6">{description}</p>
      <div className="absolute bg-red w-full left-0 bottom-0 pt-4 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
        <Link to={path} className="text-white text-[16px]">
          {content}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
