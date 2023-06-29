import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Services from "../../components/Services/Services";


const Home = () => {
  return (
    <div>
      <div>
        <div className="bg-[#F3F5F5]">
          <div  className="max-w-screen-xl mx-auto px-3 md:px-0">
            <HeroSection />
          </div>
        </div>
        <div   className="max-w-screen-xl mx-auto px-3 md:px-0">
            <Services/>
        </div>
      </div>
    </div>
  );
};

export default Home;
