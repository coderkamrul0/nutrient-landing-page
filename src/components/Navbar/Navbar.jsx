import React from 'react';
import { FaUserAlt,FaRegHeart,FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div>
                <div className='flex justify-between items-center py-5'>
                    <div className="logo">
                        <h4 className='font-bold text-2xl'>NUTRIENT</h4>
                    </div>
                    <div className="nav">
                        <ul className='flex gap-5 font-bold'>
                            <li><Link to={'#'}>Home</Link></li>
                            <li><Link to={'#'}>Shop</Link></li>
                            <li><Link to={'#'}>Blog</Link></li>
                            <li><Link to={'#'}>About</Link></li>
                        </ul>
                    </div>
                    <div className="profile flex gap-5">
                        <Link className='bg-[#cfcaca] p-2 rounded-full' to={'#'}><FaUserAlt size={20}/></Link>
                        <Link className='bg-[#cfcaca] p-2 rounded-full' to={'#'}><FaRegHeart size={20}/></Link>
                        <Link className='bg-[#7CC000] p-2 rounded-full text-white' to={'#'}><FaShoppingBag size={20}/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;