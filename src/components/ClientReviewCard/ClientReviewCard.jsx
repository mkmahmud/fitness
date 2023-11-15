import React from "react";

const ClientReviewCard = ({ feedback, name, title }) => {
  return (
    <div>
      <p className="text-base text-blackGray my-6">{feedback}</p>
      <div className="flex items-center text-popins">
        <h2 className="text-large font-bold">{name}</h2>
        <p className="px-4">{title}</p>
      </div>
    </div>
  );
};

export default ClientReviewCard;
