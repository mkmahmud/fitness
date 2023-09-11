import React from "react";
import PageHeading from "../../components/PageHeading/PageHeading";
import { FaHome, FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { useForm } from "react-hook-form";

const Contact = () => {
  const inputStyle =
    "w-full outline-none pl-[18px] border border-borderColor text-[16px] my-4";

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <PageHeading content="Contact Us"></PageHeading>
      <div className="mx-4 my-10 md:my-20 md:flex">
        <div className="md:w-2/3 md:mx-4">
          <h2 className="text-[27px] text-blue font-medium">Get In Touch</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              className={inputStyle}
              placeholder="Message"
              name=""
              id=""
              cols="30"
              rows="7"
              {...register("message", { required: true })}
            ></textarea>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Name"
              className={`h-[48px]  ${inputStyle}`}
              {...register("name", { required: true })}
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className={`h-[48px]  ${inputStyle}`}
              {...register("email", { required: true })}
            />
            <button
              type="submit"
              className="px-10 py-4 my-4 text-orange text-[18px] border border-orange hover:text-white hover:bg-orange uppercase font-light"
              style={{ fontFamily: "'Teko', sans-serif" }}
            >
              SEND
            </button>
          </form>
        </div>
        <div className="my-4 md:w-1/3 md:mx-4">
          <div className="flex items-center">
            <FaHome className="text-[27px] text-gray " />
            <div className="leading-none mx-4 my-8">
              <h3 className="text-[20px]">Buttonwood, California.</h3>
              <p className="text-[#8a8a8a]">Rosemead, CA 91770</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-[27px] text-gray " />
            <div className="leading-none mx-4 my-8">
              <h3 className="text-[20px]">+1 253 565 2365</h3>
              <p className="text-[#8a8a8a]">Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="flex items-center">
            <FiMail className="text-[27px] text-gray " />
            <div className="leading-none mx-4 my-8">
              <h3 className="text-[20px]">fitnessone@gmail.com</h3>
              <p className="text-[#8a8a8a]">Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
