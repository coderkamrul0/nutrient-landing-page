import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';

const Home = () => {
    return (
        <div className='bg-[#F3F5F5]'>
            <div className='max-w-screen-xl mx-auto px-3 md:px-0'>
                <HeroSection/>
            </div>
        </div>
    );
};

export default Home;