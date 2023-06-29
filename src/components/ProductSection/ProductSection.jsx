import React, { useEffect, useState } from "react";
import './ProductSection.css'
import Product from "./Product";

const ProductSection = () => {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [activeTab, setActiveTab] = useState("All");
    const [showAllItems, setShowAllItems] = useState(false);
  
    useEffect(() => {
      fetch(`../../../public/data.json`)
        .then((res) => res.json())
        .then((data) => {
          setItems(data);
          setFilteredItems(data); 
        });
    }, []);
  
    const handleTabChange = (category) => {
      if (category === "All") {
        setFilteredItems(items);
      } else {
        const filteredData = items.filter((item) => item.category === category);
        setFilteredItems(filteredData);
      }
      setActiveTab(category);
      setShowAllItems(false);
    };

    const handleSeeAll = () => {
        setShowAllItems(true);
      };


  return (
    <div>
      <div className="flex items-center gap-3 justify-center">
        <div className="flex gap-1">
          <div className="h-3 w-3 border rounded-full border-[#7CC000]"></div>
          <div className="h-3 w-3 border rounded-full border-[#7CC000]"></div>
          <div className="h-3 w-3 border rounded-full border-[#7CC000]"></div>
        </div>
        <p className=" text-[#7CC000] text-sm font-semibold">
          FRESH FROM OUR FARM
        </p>
        <div className="flex gap-1">
          <div className="h-3 w-3 border rounded-full border-[#7CC000]"></div>
          <div className="h-3 w-3 border rounded-full border-[#7CC000]"></div>
          <div className="h-3 w-3 border rounded-full border-[#7CC000]"></div>
        </div>
      </div>
      <div>
        <h2 className="text-center text-5xl font-bold py-4">
          Good Organic Products
        </h2>
      </div>

      <div className="flex justify-center pt-3 pb-10">
      <div className="border-2 border-[#7CC000] rounded-full">
      <div className="flex">
        <button
          className={activeTab === "All" ? "active rounded-s-full" : "notActive rounded-s-full"}
          onClick={() => handleTabChange("All")}
        >
          All
        </button>
        <button
          className={activeTab === "Vegetable" ? "active border-x-2 border-[#7CC000]" : "notActive border-x-2 border-[#7CC000]"}
          onClick={() => handleTabChange("Vegetable")}
        >
          Vegetable
        </button>
        <button
          className={activeTab === "Fruit" ? "active rounded-e-full" : "notActive rounded-e-full"}
          onClick={() => handleTabChange("Fruit")}
        >
          Fruit
        </button>
      </div>
      </div>
      </div>

      <div className="md:grid grid-cols-4 gap-10">
      {showAllItems
          ? filteredItems.map((item) => (
              <Product item={item} key={item.id}></Product>
            ))
          : filteredItems.slice(0, 12).map((item) => (
              <Product item={item} key={item.id}></Product>
            ))}
      </div>

      {!showAllItems && filteredItems.length > 12 && (
        <div className="flex justify-center mt-5">
          <button className="bg-[#7cc000] py-2 px-8 text-lg text-white rounded-md my-5" onClick={handleSeeAll}>See All</button>
        </div>
      )}
    </div>
  );
};

export default ProductSection;
