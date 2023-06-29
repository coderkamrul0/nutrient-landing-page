import React from "react";
import shape2 from "../../assets/shape2.png";
import bannerImg from '../../assets/bannerImg.png'
import { FaLongArrowAltRight } from 'react-icons/fa';


const HeroSection = () => {
  return (
    <div>
      <div className="md:flex items-center py-20">
        <div className="md:w-1/2">
          <div className="relative">
            <img src={shape2} alt="" className="" />
            <p className="absolute top-3 text-white font-bold left-6">
              100% ORGANIC FOODS
            </p>
          </div>
          <h1 className="text-5xl font-bold">Organic Veggies & Foods You Cook <span className="text-[#81C408]">Healthy</span></h1>
          <p className="text-lg  text-gray-500 py-5">We believe that everyone deserves to eat healthy, delicious food. That's why we offer a wide variety of organic vegetables, fruits, and other foods that are free of pesticides, herbicides, and other chemicals. Shop our selection today and start feeling the difference!</p>
          <button className="bg-[#81C408] text-white text-xl px-7 py-4 rounded-full flex items-center gap-2">Shop Now <FaLongArrowAltRight/></button>
        </div>

        <div className="md:w-1/2">
            <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
