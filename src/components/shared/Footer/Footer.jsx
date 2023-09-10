import React from "react";
import footerImage from "../../../assets/footer/footer.png";
import footerLogo from "../../../assets/logo/logo2_footer.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  // styles
  const footerHead = "text-[18px] font-semibold my-[18px] text-white";
  const footerList = "font-[16px] text-gray my-4";
  return (
    <div
      class="bg-fixed bg-cover bg-center  flex items-center pt-20 lg:px-20"
      style={{ backgroundImage: `url(${footerImage})` }}
    >
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="mx-4 my-10">
            <h2 className={footerHead}>COMPANY</h2>
            <ul className="mt-10">
              <li className={footerList}>
                <Link to="/">About Us</Link>
              </li>
              <li className={footerList}>
                <Link to="/">Privecy & policy</Link>
              </li>
              <li className={footerList}>
                <Link to="/">Press & Blog</Link>
              </li>
              <li className={footerList}>
                <Link to="/">Company</Link>
              </li>
            </ul>
          </div>
          <div className="mx-4 my-10">
            <h2 className={footerHead}>OPEN HOUR</h2>
            <ul className="mt-10">
              <li className={footerList}>
                <Link to="/">Monday 11am-7pm</Link>
              </li>
              <li className={footerList}>
                <Link to="/">Monday 11am-7pm</Link>
              </li>
              <li className={footerList}>
                <Link to="/">Monday 11am-7pm</Link>
              </li>
              <li className={footerList}>
                <Link to="/">Monday 11am-7pm</Link>
              </li>
            </ul>
          </div>
          <div className="mx-4 my-10">
            <h2 className={footerHead}>Resources</h2>
            <ul className="mt-10">
              <li className={footerList}>
                <Link to="/">Protien Insurance</Link>
              </li>
              <li className={footerList}>
                <Link to="/">Trainners</Link>
              </li>
              <li className={footerList}>
                <Link to="/">Car</Link>
              </li>
            </ul>
          </div>
          <div className="mx-4 my-10">
            <img src={footerLogo} alt="" />
            <p className="font-[14px] text-gray my-10">
              {" "}
              GThe trade war currently ensuing between te US anfd several
              natxions around thdhe globe, most fiercely with.
            </p>
            <div className="flex  space-x-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF className="text-gray font-[1rem]" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaXTwitter className="text-gray font-[1rem]" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-gray font-[1rem]" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaGlobe className="text-gray font-[1rem]" />
              </a>
            </div>
          </div>
        </div>
        <div className="my-10  border-t-2 border-gray">
          <p className="text-gray text-center p-4">
            Copyright &copy; All rights reserved by fitness one
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
