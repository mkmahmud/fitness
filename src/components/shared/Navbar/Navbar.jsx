import React, { useState } from "react";
import logo from "../../../assets/logo/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import MainButton from "../../Buttons/MainButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Mobile Menu
  const [mobileMenu, setMobileMenu] = useState(false);
  // Menus
  const menus = [
    "Home",
    "About",
    "Services",
    "Schedule",
    "Gallery",
    "Blog",
    "Contact",
  ];

  return (
    <div
      className="bg-[#00000080] py-4 fixed top-0 z-50 w-full"
      style={{ fontFamily: "'Teko', sans-serif" }}
    >
      {/* Mobile Menu */}
      <div className="flex items-center justify-between mx-2 sm:mx-6 md:mx-10  lg:hidden ">
        <Link to="/">
          <img src={logo} alt="Fitness one Logo" />
        </Link>
        <div>
          {mobileMenu ? (
            <AiOutlineClose
              color="red"
              fontSize="35px"
              onClick={() => setMobileMenu(false)}
            />
          ) : (
            <GiHamburgerMenu
              color="red"
              fontSize="35px"
              onClick={() => setMobileMenu(true)}
            />
          )}
        </div>
        {mobileMenu && (
          <ul className="absolute bg-white w-[90%] top-20 left-0 px-2 mx-10">
            {menus.map((menu, index) => {
              return (
                <Link
                  to={menu === 'Home' ? '/' : menu.toLowerCase()}
                  key={index}
                  className="block px-4 py-2 mt-2 text-sm text-black hover:text-red text-[20px] font-light transition duration-300"
                >
                  <li>{menu}</li>
                </Link>
              );
            })}
          </ul>
        )}
      </div>
      {/* Mobile Menu */}
      {/* Desktop Menu */}
      <div className="hidden lg:block ">
        <div className="flex items-center justify-between  lg:mx-10 xl:mx-20  ">
          <div>
            <Link to="/">
              <img src={logo} alt="Fitness one Logo" />
            </Link>
          </div>
          <div className="flex items-center">
            {/* Menus */}

            <ul className="flex">
              {menus.map((menu, index) => {
                return (
                  <Link
                  to={menu === 'Home' ? '/' : menu.toLowerCase()}
                    key={index}
                    className="block px-4 py-2 mt-2 text-white hover:text-red text-[20px] font-light transition duration-300"
                  >
                    <li>{menu}</li>
                  </Link>
                );
              })}
            </ul>

            {/* Button */}
            <div>
              <MainButton path="/login" content="Become a member"></MainButton>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop Menu */}
    </div>
  );
};

export default Navbar;
