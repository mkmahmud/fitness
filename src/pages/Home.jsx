import React from "react";
import heroImage from "../assets/hero/h1_hero.png";
const Home = () => {
  return (
    <div
      class="bg-fixed bg-cover bg-center h-screen flex items-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div>
        <h2 className="text-white text-[70px]">Build Perfect body <br /> Shape for good and <br /> Healthy life.</h2>
      </div>
    </div>
  );
};

export default Home;
