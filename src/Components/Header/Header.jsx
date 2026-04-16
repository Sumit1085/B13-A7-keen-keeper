import React from 'react';
import { FaHome } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { NavLink } from 'react-router';


const Header = () => {
    return (
        <div className=' '>
            <div className='bg-white border-b border-[#bdc3c7]'>
                <div className="navbar bg-base-100 container mx-auto">
                    <div className="flex-1">
                        <a className=" text-2xl"><span className='text-black font-bold'>Keen</span><span className='text-[#244D3F] font-semibold'>Keeper</span></a>
                    </div>
                    <div className="flex gap-3">
                        <NavLink to={'/'} className={({ isActive }) =>
                            `btn ${isActive ? "bg-[#244D3F] text-white" : ""}`
                        }><FaHome />Home</NavLink>
                        <NavLink to={'/timeline'} className={({ isActive }) =>
                            `btn ${isActive ? "bg-[#244D3F] text-white" : ""}`
                        }><FaClock />Timeline</NavLink>
                        <NavLink to={'/stats'} className={({ isActive }) =>
                            `btn ${isActive ? "bg-[#244D3F] text-white" : ""}`
                        }><ImStatsDots />Stats</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;