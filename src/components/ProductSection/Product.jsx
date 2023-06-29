import React from "react";
import { FaRegHeart } from "react-icons/fa";


const Product = ({ item }) => {
  const { name, price, rating, image } = item;
  return (
    <div className="mb-5 md:mb-0 ">
      <div className="bg-[#F5F5F5] h-[300px] w-[300] p-4 flex items-center justify-center relative">
        <img src={image} alt="" />
        <FaRegHeart size={26} className="absolute right-5 top-5 bg-[#7CC000] p-1 text-white rounded-md"/>
      </div>
      <div className="py-2">
        <p className="font-bold">{name}</p>
        <div></div>
      </div>
      <div className="flex justify-between">
        <p className="text-[#7CC000] font-bold text-lg">${price}</p>
        <button className="border-[#7cc000] rounded-md border-2 px-2 hover:bg-[#7cc000] hover:text-white ">Add to cart</button>
      </div>
      
    </div>
  );
};

export default Product;
