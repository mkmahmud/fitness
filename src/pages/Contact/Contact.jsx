import React from "react";
import PageHeading from "../../components/PageHeading/PageHeading";
import { useForm } from "react-hook-form";
import Icon from "../../components/Buttons/Icon";
import { useSendMessageMutation } from "../../redux/api/Contact/ContactApi";
import toast from "react-hot-toast";

const Contact = () => {
  const inputStyle =
    "w-full outline-none pl-[18px] bg-white border border-borderColor text-[16px] my-4";

  // Send Message by Redux Hook
  const [sendMessage] = useSendMessageMutation();

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const res = await sendMessage(data);
    if (res) {
      toast.success("Message sent successfully");
    }
  };

  return (
    <div>
      <PageHeading content="Contact Us"></PageHeading>
      <div className="mx-4 my-10 md:my-20 md:flex ">
        <div className="md:w-2/3 md:mx-4 ">
          <h2 className="text-large text-blue font-medium">Get In Touch</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-[600px]">
            <textarea
              className={inputStyle}
              placeholder="Message"
              name=""
              id=""
              cols="30"
              rows="7"
              maxLength="200"
              {...register("message", { required: true })}
            ></textarea>

            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className={`h-[48px]  ${inputStyle}`}
              {...register("email", { required: true })}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Name"
              className={`h-[48px]  ${inputStyle}`}
              {...register("name", { required: true })}
            />
            <button
              type="submit"
              className="px-10 py-4 my-4 text-main text-lg border border-main hover:text-white hover:bg-main uppercase font-light"
              style={{ fontFamily: "'Teko', sans-serif" }}
            >
              <span className="mx-4">SEND</span>
              <Icon IconName="fa-solid fa-paper-plane" size="xl" />
            </button>
          </form>
        </div>
        <div className="my-4 md:w-1/3 md:mx-4">
          <div className="flex items-center">
            <Icon IconName="fa-solid fa-house" color="gray" size="xl" />

            <div className="leading-none mx-4 my-8">
              <h3 className="text-xl">Buttonwood, California.</h3>
              <p className="text-[#8a8a8a]">Rosemead, CA 91770</p>
            </div>
          </div>
          <div className="flex items-center">
            <Icon IconName="fa-solid fa-phone" color="gray" size="xl" />
            <div className="leading-none mx-4 my-8">
              <h3 className="text-xl">+1 253 565 2365</h3>
              <p className="text-[#8a8a8a]">Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="flex items-center">
            <Icon IconName="fa-solid fa-envelope" color="gray" size="xl" />
            <div className="leading-none mx-4 my-8">
              <h3 className="text-xl">fitnessone@gmail.com</h3>
              <p className="text-[#8a8a8a]">Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
