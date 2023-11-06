import React from "react";
import Button from "../Buttons/Button";

const PlanCard = ({ data }) => {
  return (
    <div className="border border-gray p-4 mx-auto py-6 my-4  lg:mx-4 min-w-[350px] max-w-[450px] flex flex-col justify-between">
      <div>
        <div className="flex justify-between">
          <div>
            <h2 className="text-extraLarge">{data?.planName}</h2>
            <span className="text-xl">
              $<span className="font-bold text-main">{data?.price}</span>/month
            </span>
          </div>
          <h2 className="text-center mt-10 font-bold text-main">
            Most Popular
          </h2>
        </div>
        <div className="my-6">
          <h2>Features:</h2>
          <ul>
            {data?.plans.map((plan) => (
              <li className="my-2" key={plan.index}>
                {" "}
                <i className="fa-solid fa-check mx-2 text-lightGreen"></i>{" "}
                <span>{plan.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto">
        <Button>
          <span>Add this plan</span>
        </Button>
      </div>
    </div>
  );
};

export default PlanCard;
