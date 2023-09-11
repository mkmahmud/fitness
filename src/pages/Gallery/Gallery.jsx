import React from "react";
import PageHeading from "../../components/PageHeading/PageHeading";
import gellary1 from "../../assets/gallery/gallery1.png";
import gellary2 from "../../assets/gallery/gallery2.png";
import gellary3 from "../../assets/gallery/gallery3.png";

const Gallery = () => {
  return (
    <div>
      <PageHeading content="Our Gallery" />
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
    </div>
  );
};

export default Gallery;
