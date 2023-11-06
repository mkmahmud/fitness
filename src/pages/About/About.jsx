import React from "react";
import PageHeading from "../../components/PageHeading/PageHeading";
import MainButton from "../../components/Buttons/MainButton";
import aboutImage from "../../assets/gallery/about.png";
import gellary1 from "../../assets/gallery/gallery1.png";
import gellary2 from "../../assets/gallery/gallery2.png";
import gellary3 from "../../assets/gallery/gallery3.png";
import team1 from "../../assets/gallery/team1.png";
import team2 from "../../assets/gallery/team2.png";
import team3 from "../../assets/gallery/team3.png";
import TrainnerCard from "../../components/TrainnerCard/TrainnerCard";
import Button from "../../components/Buttons/Button";
import { Link } from "react-router-dom";
import SubHead from "../../components/Heading/SubHead";
import SectionHead from "../../components/Heading/SectionHead";

const About = () => {
  return (
    <div>
      <PageHeading content="About Us"></PageHeading>
      {/* About */}
      <div className="my-20 lg:flex items-center justify-between xl:my-40">
        <div className="px-5 lg:w-1/2">
          <img
            className="block mx-auto"
            src={aboutImage}
            alt="Fitness one About"
          />
        </div>
        <div className="py-10 px-4 md:px-10 lg:w-1/2">
          <div className="flex items-center">
            <div className="h-[2px] w-[100px] bg-orange"></div>
            <SubHead color="main" title="About our gym" />
          </div>
          <SectionHead
            color="black"
            title="Build Perfect Body Shape For Good And Healthy Life."
          ></SectionHead>
          <p className="text-base text-blackGray">
            Brook presents your services with flexible, convenient and cdpose
            layouts. You can select your favorite layouts & elements for cular
            ts with unlimited ustomization possibilities. Pixel-perfect
            replication of the designers is intended.
          </p>
          <p className="text-base text-blackGray my-6">
            Brook presents your services with flexible, convefnient and chient
            anipurpose layouts. You can select your favorite layouts.
          </p>
          <div className="my-10">
            <Button>
              <Link to="/login" className="md:px-2">
                Become A Member
              </Link>
            </Button>
          </div>
        </div>
      </div>
      {/* Gallery */}
      <section className="overflow-hidden text-gray-700 mb-10">
        <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="w-full sm:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={gellary1}
              />
            </div>
            <div className="w-full sm:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={gellary2}
              />
            </div>
            <div className="w-full sm:w-full p-1 md:p-2 h-[400px]">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg "
                src={gellary3}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Team Members */}
      <div className="bg-white pt-20 pb-10">
        <div className="px-5 ">
          <div className="flex items-center">
            <div className="h-[2px] w-[100px] bg-main"></div>
            <SubHead color="main" title="Our Team Members" />
          </div>
          <div className="lg:flex items-center justify-between">
          <SectionHead
              color="black"
              title="Our Most Exprienced Trainers"
            ></SectionHead>
            <div className="lg:w-3/12">
              <Button>
                <Link className="px-2" to="/services">
                  More Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="md:flex justify-around">
          <TrainnerCard image={team1}></TrainnerCard>
          <TrainnerCard image={team2}></TrainnerCard>
          <TrainnerCard image={team3}></TrainnerCard>
        </div>
      </div>
    </div>
  );
};

export default About;
