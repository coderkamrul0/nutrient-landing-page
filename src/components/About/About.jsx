import React from 'react';
import aboutImg from '../../assets/about.png'

const About = () => {
    return (
        <div>
            <div className="md:flex items-center py-10">
                <div className="md:w-1/2">
                    <p className='font-bold text-[#7CC000] text-xl'>About Us</p>
                    <p className="text-lg  text-gray-500 py-5">Nutrients are the essential substances that your body needs to function properly. They provide energy, help your body build and repair cells, and protect you from disease. There are two main types of nutrients: macronutrients and micronutrients.A healthy diet should include a variety of nutrient-rich foods. Some good sources of nutrients include fruits, vegetables, whole grains, lean protein, and low-fat dairy products.</p>
                </div>
                <div className="md:w-1/2">
                    <img src={aboutImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;