import React from 'react';
import saleImg from '../../assets/sale8.png'
import { FaLongArrowAltRight } from 'react-icons/fa';

const TrustedSection = () => {
    return (
        <div>
            <div className="md:flex justify-between gap-3 items-center py-20">
                <div className="md:w-1/2">
                    <img src={saleImg} alt="" />
                </div>
                <div className="md:w-1/2">
                    <div className='flex items-center gap-2'>
                        <div className='flex gap-1'>
                            <div className='h-3 w-3 border rounded-full border-[#7CC000]'></div>
                            <div className='h-3 w-3 border rounded-full border-[#7CC000]'></div>
                            <div className='h-3 w-3 border rounded-full border-[#7CC000]'></div>
                        </div>
                        <p className=' text-black text-sm font-semibold'>FRESH FROM OUR FARM</p>
                    </div>
                    <h2 className='text-5xl font-bold pt-5'>Trusted Organic Food Store Conscious</h2>
                    <div className='flex gap-5 font-semibold text-xl italic py-10'>
                        <div className='h-20 w-2 bg-[#7CC000]'></div>
                        <p>"We believe that organic food is the best way to eat for your health and the health of the planet."</p>
                    </div>
                    <p className='text-lg text-gray-500 pb-5'>We're passionate about providing our customers with the best possible organic food. That's why we're constantly working to improve our sourcing practices and our product offerings.</p>
                    <button className="bg-[#81C408] text-white text-xl px-9 py-4 rounded-full flex items-center gap-2">Subscribe <FaLongArrowAltRight/></button>
                </div>
            </div>
        </div>
    );
};

export default TrustedSection;