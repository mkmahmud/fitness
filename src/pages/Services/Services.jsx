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
import SubHead from "../../components/Heading/SubHead";
import Button from "../../components/Buttons/Button";
import { Link } from "react-router-dom";
import SectionHead from "../../components/Heading/SectionHead";
const Services = () => {
  return (
    <div>
      <PageHeading content="Services" />
      {/* Services */}
      <div
        className="bg-fixed bg-cover bg-center pt-20 pb-10"
       >
        <div className="px-5 ">
          <div className="flex items-center">
            <div className="h-[2px] w-[100px] bg-main"></div>
            <SubHead color="main" title="Our Services For You" />
          </div>
          <div className="lg:flex items-center justify-between">
          <SectionHead
              color="black"
              title="Push Your Limits Forward We Offer To You "
            ></SectionHead>
            <div className="lg:w-3/12">
              <Button>
                <Link to="/login" className="md:px-2">
                  Become A Member
                </Link>
              </Button>{" "}
            </div>
          </div>
        </div>
        <div className="md:flex justify-center">
          <ServiceCard
            icon="fa-solid fa-dumbbell"
            title="health caring"
            description="The sea freight service has grown considerably in recent years. We spend
            time getting to know..."
            path="/services"
            content="Discover more About us"
          ></ServiceCard>
          <ServiceCard
            icon="fa-solid fa-dumbbell"
            title="QUALITY EQUIPMENT"
            status="active"
            description="The sea freight service has grown considerably in recent years. We spend
            time getting to know..."
            path="/services"
            content="Discover more About us"
          ></ServiceCard>
          <ServiceCard
            icon="fa-solid fa-dumbbell"
            title="gym strategies"
            description="The sea freight service has grown considerably in recent years. We spend
            time getting to know..."
            path="/services"
            content="Discover more About us"
          ></ServiceCard>
        </div>
      </div>
    </div>
  );
};

export default Services;
