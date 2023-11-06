import React from "react";

const Input = ({ hookForm, name, type, defaultValue }) => {
  return (
    <div className="my-2 px-2">
      <p className="py-2">{name}:</p>
      <input
        type={type ? type : "text"}
        name=""
        {...hookForm}
        defaultValue={defaultValue}
        placeholder={`Enter your ${name}`}
        className="bg-whiteGray   px-4 py-2 text-[16px] outline-none w-full"
        id=""
      />
    </div>
  );
};

export default Input;
