import React from "react";
import heroImage from "../assets/hero/h1_hero.png";
import MainButton from "../components/Buttons/MainButton";
import { FaPlay } from "react-icons/fa";
import aboutImage from "../assets/gallery/about.png";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        class="bg-fixed bg-cover bg-center pt-40 pb-6 md:pb-40 xl:h-screen md:flex items-center justify-between"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="px-4 md:px-10">
          <div className="flex items-center">
            <div className="h-[1px] w-[100px] bg-orange"></div>
            <p className="text-white pl-10 uppercase text-orange text-[13px]">
              with patrick potter
            </p>
          </div>
          <h2
            className="text-white text-[29px] md:text-[70px] md:leading-none md:w-[80%] xl:w-[70%] font-bold uppercase py-16"
            style={{ fontFamily: "'Teko', sans-serif" }}
          >
            Build Perfect body Shape for good and Healthy life.
          </h2>
          <MainButton path="/" content="BECOME A MEMBER"></MainButton>
        </div>
        {/* Play button */}
        <div className="relative py-10 flex justify-end">
          <div className="relative bg-red h-16 w-16 lg:h-20 lg:w-20  rounded-full flex items-center justify-center mx-6 md:mx-14 lg:mx-20  ">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red opacity-75"></span>
            <FaPlay className="text-white text-[20px]" />
          </div>
        </div>
      </div>
      {/* About Section */}
      <div class="my-20 lg:flex items-center justify-between xl:my-40">
        <div className="px-5 lg:w-1/2">
          <img className="block mx-auto" src={aboutImage} alt="Fitness one About" />
        </div>
        <div className="py-10 px-4 md:px-10 lg:w-1/2">
          <div className="flex items-center">
            <div className="h-[1px] w-[100px] bg-orange"></div>
            <p className=" pl-10 uppercase text-orange text-[14px]">
              About our gym
            </p>
          </div>
          <h2
            className="text-black text-[29px] sm:text-[44px] md:text-[70px] md:leading-none  font-bold uppercase py-6"
            style={{ fontFamily: "'Teko', sans-serif" }}
          >
            Build Perfect body Shape for good and Healthy life.
          </h2>
          <p className="text-[16px] text-blackGray">Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replication of the designers is intended.</p>
          <p className="text-[16px] text-gray my-6">Brook presents your services with flexible, convefnient and chient anipurpose layouts. You can select your favorite layouts.</p>
          <div className="my-10">
          <MainButton path="/" content="BECOME A MEMBER"></MainButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
