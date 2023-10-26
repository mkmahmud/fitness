import React from "react";

const Input = ({ hookForm, name }) => {
  return (
    <div className="my-2 px-2">
      <p className="py-2">{name}:</p>
      <input
        type="text"
        name=""
        {...hookForm}
        placeholder={`Enter your ${name}`}
        className="bg-whiteGray rounded-full px-4 py-2 text-[16px] outline-none w-full"
        id=""
      />
    </div>
  );
};

export default Input;
