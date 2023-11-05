import React from "react";

const DisabledFiled = ({ data, name, bg , color}) => {
  return (
    <div className="my-2 px-2">
      <p className="py-2">{name}:</p>
      <input
        type="text"
        name=""
        className={`bg-${
          bg ? bg : "whiteGray"
        }   px-4 py-2 text-[16px] text-${color ? color : 'black'} outline-none w-full`}
        id=""
        defaultValue={data}
        disabled
      />
    </div>
  );
};

export default DisabledFiled;
