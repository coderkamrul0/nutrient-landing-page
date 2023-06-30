import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3 md:px-0 ">
      <div className="md:grid grid-cols-4 gap-5">
        <div>
          <ul>
            <li className="font-bold text-xl mb-5">Social</li>
            <Link to={"#"}>
              <li className="flex items-center gap-2 hover:text-[#7CC000]">
                <FaInstagram /> Instagram
              </li>
            </Link>
            <Link to={"#"}>
              <li className="flex items-center gap-2 hover:text-[#7CC000]">
                <FaFacebookF /> Facebook
              </li>
            </Link>
            <Link to={"#"}>
              <li className="flex items-center gap-2 hover:text-[#7CC000]">
                <FaTwitter /> Twitter
              </li>
            </Link>
            <Link to={"#"}>
              <li className="flex items-center gap-2 hover:text-[#7CC000]">
                <FaLinkedinIn /> Linkedin
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-bold text-xl mb-5">Information</li>
            <Link to={"#"}>
              <li className="hover:text-[#7CC000]">Home</li>
            </Link>
            <Link to={"#"}>
              <li className="hover:text-[#7CC000]">Shop</li>
            </Link>
            <Link to={"#"}>
              <li className="hover:text-[#7CC000]">Blog</li>
            </Link>
            <Link to={"#"}>
              <li className="hover:text-[#7CC000]">About</li>
            </Link>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-bold text-xl mb-5">Location</li>
            <li>786 Plane Street,</li>
            <li>Eastern Cape,</li>
            <li>Engcobo,</li>
            <li>5054</li>
          </ul>
        </div>
        <div>
          <li className="font-bold text-xl mb-5 list-none">Subscribe</li>
          <div className="flex">
            <input
              type="text"
              className="bg-gray-200 outline-none border border-[#7CC000] px-2 py-1"
              name=""
              id=""
            />
            <button className="bg-[#7CC000] border border-[#7CC000] text-white px-2 py-1">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr className="my-3" />
        <div>
          <p className="font-bold text-center">
            Copyright © 2022 <span className="text-[#7CC000]">NUTRIENT</span>{" "}
            Inc. All rights reserved.
          </p>
        </div>
    </div>
  );
};

export default Footer;
