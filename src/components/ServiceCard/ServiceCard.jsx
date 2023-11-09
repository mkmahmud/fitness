import { Link } from "react-router-dom";
import Icon from "../Buttons/Icon";

const ServiceCard = ({ icon, title, description, path, content, status }) => {
  return (
    <div className="bg-sky group text-center  my-10 p-10 mx-4 relative max-w-sm mx-auto ">
      <div
        className={` text-gray  group-hover:text-main my-4 ${
          status ? "text-orange" : ""
        }`}
      >
        <i
          className={`${icon} text-gray text-[40px]  group-hover:text-main my-4 ${
            status ? "text-orange" : ""
          } `}
        ></i>
        ;
      </div>
      <div className="my-6">
        <Link className="uppercase text-large font-semibold " to="/services">
          {title}
        </Link>
      </div>
      <p className="text-sm text-blackGray px-10 my-6">{description}</p>
      <div
        className={`absolute bg-main w-full left-0 bottom-0 py-2 group-hover:opacity-100 opacity-0 transition-opacity duration-300 ${
          status ? "opacity-100" : ""
        }`}
      >
        <Link to={path} className="text-white text-base font-normal">
          {content}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
