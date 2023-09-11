import React from "react";
import PageHeading from "../../components/PageHeading/PageHeading";
import serviceImage from "../../assets/gallery/service.png";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import {
  FaDumbbell,
  FaHeartbeat,
  FaICursor,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import MainButton from "../../components/Buttons/MainButton";
const Services = () => {
  return (
    <div>
      <PageHeading content="Services" />
      {/* Services */}
      <div className="bg-fixed bg-cover bg-center pt-20 pb-10">
        <div className="px-5 ">
          <div className="flex items-center">
            <div className="h-[1px] w-[100px] bg-orange"></div>
            <p className=" pl-10 uppercase text-orange text-[14px]">
              oUR sERVICES FOR YOU
            </p>
          </div>
          <div className="lg:flex items-center justify-between">
            <h2
              className="text-black text-[29px] sm:text-[44px] md:text-[70px] md:leading-none  font-bold uppercase py-6 lg:pr-20 lg:w-9/12"
              style={{ fontFamily: "'Teko', sans-serif" }}
            >
              PUSH YOUR LIMITS FORWARD We Offer to you
            </h2>
            <div className="lg:w-3/12">
              <MainButton path="/" content="BECOME A MEMBER"></MainButton>
            </div>
          </div>
        </div>
        <div className="md:flex justify-center">
          <ServiceCard
            icon={FaHeartbeat}
            title="health caring"
            description="The sea freight service has grown considerably in recent years. We spend
            time getting to know..."
            path="/"
            content="Discover more About us"
          ></ServiceCard>
          <ServiceCard
            icon={FaDumbbell}
            title=" QUALITY EQUIPMENT"
            description="The sea freight service has grown considerably in recent years. We spend
            time getting to know..."
            path="/"
            content="Discover more About us"
          ></ServiceCard>
          <ServiceCard
            icon={FaICursor}
            title="gym strategies"
            description="The sea freight service has grown considerably in recent years. We spend
            time getting to know..."
            path="/"
            content="Discover more About us"
          ></ServiceCard>
        </div>
      </div>
    </div>
  );
};

export default Services;
