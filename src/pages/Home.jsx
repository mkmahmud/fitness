import React from "react";
import heroImage from "../assets/hero/h1_hero.png";
import MainButton from "../components/Buttons/MainButton";
import { FaPlay } from "react-icons/fa";
import aboutImage from "../assets/gallery/about.png";
import serviceImage from "../assets/gallery/service.png";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import {
  FaDumbbell,
  FaHeartbeat,
  FaICursor,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import FeedbackImage from "../assets/gallery/feedback.png";
import qutaion from "../assets/gallery/qutaion.png";
import ClientReviewCard from "../components/ClientReviewCard/ClientReviewCard";
import gellary1 from "../assets/gallery/gallery1.png";
import gellary2 from "../assets/gallery/gallery2.png";
import gellary3 from "../assets/gallery/gallery3.png";
import TrainnerCard from "../components/TrainnerCard/TrainnerCard";
import team1 from "../assets/gallery/team1.png";
import team2 from "../assets/gallery/team2.png";
import team3 from "../assets/gallery/team3.png";

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
          <img
            className="block mx-auto"
            src={aboutImage}
            alt="Fitness one About"
          />
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
          <p className="text-[16px] text-blackGray">
            Brook presents your services with flexible, convenient and cdpose
            layouts. You can select your favorite layouts & elements for cular
            ts with unlimited ustomization possibilities. Pixel-perfect
            replication of the designers is intended.
          </p>
          <p className="text-[16px] text-gray my-6">
            Brook presents your services with flexible, convefnient and chient
            anipurpose layouts. You can select your favorite layouts.
          </p>
          <div className="my-10">
            <MainButton path="/" content="BECOME A MEMBER"></MainButton>
          </div>
        </div>
      </div>
      {/* Service Section */}
      <div
        class="bg-fixed bg-cover bg-center pt-20 pb-10"
        style={{ backgroundImage: `url(${serviceImage})` }}
      >
        <div className="px-5 ">
          <div className="flex items-center">
            <div className="h-[1px] w-[100px] bg-orange"></div>
            <p className=" pl-10 uppercase text-orange text-[14px]">
              oUR sERVICES FOR YOU
            </p>
          </div>
          <div className="lg:flex items-center justify-between">
            <h2
              className="text-white text-[29px] sm:text-[44px] md:text-[70px] md:leading-none  font-bold uppercase py-6 lg:pr-20 lg:w-9/12"
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
      {/* Feedback Section */}
      <div class="my-20 lg:flex items-center justify-between xl:my-40">
        <div className="px-5 lg:w-1/2">
          <img
            className="block mx-auto"
            src={FeedbackImage}
            alt="Fitness one Feedback"
          />
        </div>
        <div className="py-10 px-4 md:px-10 lg:w-1/2">
          <div className="flex items-center">
            <div className="h-[1px] w-[100px] bg-orange"></div>
            <p className=" pl-10 uppercase text-orange text-[14px]">
              Client Feedback
            </p>
          </div>
          <h2
            className="text-black text-[29px] sm:text-[44px] md:text-[70px] md:leading-none  font-bold uppercase py-6"
            style={{ fontFamily: "'Teko', sans-serif" }}
          >
            What Our Client thik about our gym
          </h2>
          <div>
            <ClientReviewCard></ClientReviewCard>
            <div className="flex text-orange my-10">
              <FaArrowLeft className="mx-2" />
              <FaArrowRight className="mx-2" />
            </div>
          </div>
        </div>
      </div>
      {/* Our Gellary */}
      <section class="overflow-hidden text-gray-700 mb-10">
        <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="w-full sm:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full rounded-lg"
                src={gellary1}
              />
            </div>
            <div class="w-full sm:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full rounded-lg"
                src={gellary2}
              />
            </div>
            <div class="w-full sm:w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full rounded-lg h-[400px]"
                src={gellary3}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Team Members */}
      <div class="bg-white pt-20 pb-10">
        <div className="px-5 ">
          <div className="flex items-center">
            <div className="h-[1px] w-[100px] bg-orange"></div>
            <p className=" pl-10 uppercase text-orange text-[14px]">
              Our Team Members
            </p>
          </div>
          <div className="lg:flex items-center justify-between">
            <h2
              className="text-black text-[29px] sm:text-[44px] md:text-[70px] md:leading-none  font-bold uppercase py-6 lg:pr-20 lg:w-9/12"
              style={{ fontFamily: "'Teko', sans-serif" }}
            >
              Our Most Exprienced Trainers
            </h2>
            <div className="lg:w-3/12">
              <MainButton path="/" content="More services"></MainButton>
            </div>
          </div>
        </div>
        <div className="md:flex justify-around">
          <TrainnerCard image={team1}></TrainnerCard>
          <TrainnerCard image={team2}></TrainnerCard>
          <TrainnerCard image={team3}></TrainnerCard>
        </div>
      </div>
      {/* Time Schedule */}
      <div class="bg-white pt-20 pb-10">
        <div className="px-5 text-center ">
          <div className="flex items-center justify-center">
            <div className="h-[1px] w-[100px] bg-orange"></div>
            <p className=" pl-10 uppercase text-orange text-[14px]">
              OUR tIME SCHEDULE 
            </p>
          </div>
          <div className="w-full lg:w-[60%] mx-auto">
            <h2
              className="text-black text-[29px] sm:text-[44px] md:text-[70px] md:leading-none  font-bold uppercase py-6 text-center"
              style={{ fontFamily: "'Teko', sans-serif" }}
            >
              SELECT THE pERFECT TIME YOU NEED NOW
            </h2>
          </div>
        </div>
        <div className="my-20">
          <ul className="bg-sky px-4 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:px-20 gap-4">
            <li className="px-6 py-2 text-[24px]  text-center">Suturday</li>
            <li className="px-6 py-2 text-[24px]  text-center">Sunday</li>
            <li className="px-6 py-2 text-[24px]  text-center">Monday</li>
            <li className="px-6 py-2 text-[24px] bg-red text-white text-center">
              Tuesday
            </li>
            <li className="px-6 py-2 text-[24px]  text-center">Wednesday</li>
            <li className="px-6 py-2 text-[24px]  text-center">Thursday</li>
            <li className="px-6 py-2 text-[24px]  text-center">Friday</li>
          </ul>
          <ul className="bg-sky px-4 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:px-20 gap-4">
            <li className="px-6 py-6 text-[24px]  text-center  ">
              <div>
                <h5 className="bg-black text-white px-4 py-2">8am-10am</h5>
                <h2 className="text-[30px]">Kick Boxing</h2>
                <p>by Jhon Doe</p>
              </div>
            </li>
            <li className="px-6 py-6 text-[24px]  text-center bg-red ">
              <div className="text-white">
                <h5 className="bg-white text-black px-4 py-2">8am-10am</h5>
                <h2 className="text-[30px]">Kick Boxing</h2>
                <p>by Jhon Doe</p>
              </div>
            </li>
            <li className="px-6 py-6 text-[24px]  text-center  ">
              <div>
                <h5 className="bg-black text-white px-4 py-2">8am-10am</h5>
                <h2 className="text-[30px]">Kick Boxing</h2>
                <p>by Jhon Doe</p>
              </div>
            </li>
            <li className="px-6 py-6 text-[24px]  text-center  ">
              <div>
                <h5 className="bg-black text-white px-4 py-2">8am-10am</h5>
                <h2 className="text-[30px]">Kick Boxing</h2>
                <p>by Jhon Doe</p>
              </div>
            </li>
            <li className="px-6 py-6 text-[24px]  text-center  ">
              <div>
                <h5 className="bg-black text-white px-4 py-2">8am-10am</h5>
                <h2 className="text-[30px]">Kick Boxing</h2>
                <p>by Jhon Doe</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
