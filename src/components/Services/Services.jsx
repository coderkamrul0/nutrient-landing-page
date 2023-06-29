import React from 'react';
import service1 from '../../assets/service1.png'
import service2 from '../../assets/service2.png'
import service3 from '../../assets/service3.png'
import service4 from '../../assets/service4.png'

const Services = () => {
    return (
        <div className='py-10'>
            <div className='md:flex gap-20 font-bold text-xl text-[#858585]'>
                <div className='flex items-center gap-2 mb-3 md:mb-0'>
                    <img className='bg-[#F7F6F2] p-5 rounded-full' src={service1} alt="" />
                    <p>Product Form Organic Farm</p>
                </div>
                <div className='flex items-center gap-2 mb-3 md:mb-0'>
                    <img className='bg-[#F7F6F2] p-5 rounded-full' src={service2} alt="" />
                    <p>Free Home Delivery</p>
                </div>
                <div className='flex items-center gap-2 mb-3 md:mb-0'>
                    <img className='bg-[#F7F6F2] p-5 rounded-full' src={service3} alt="" />
                    <p>Promotions of The week</p>
                </div>
                <div className='flex items-center gap-2 mb-3 md:mb-0'>
                    <img className='bg-[#F7F6F2] p-5 rounded-full' src={service4} alt="" />
                    <p>-20% discount on all Vegetables</p>
                </div>
            </div>
        </div>
    );
};

export default Services;