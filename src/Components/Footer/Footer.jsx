import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='py-10 md:py-20 bg-[#244D3F] text-white '>
            <div className='container mx-auto'>
                <h1 className='text-center font-bold text-5xl md:text-6xl' >keenKeeper</h1>
                <p className='mt-4 px-2 text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className='mt-6 text-center text-2xl font-medium'>Social Links</p>
                <div className='flex justify-center gap-3 mt-4'>
                    <FaFacebook className='text-3xl' />
                    <FaInstagramSquare className='text-3xl' />
                    <BsTwitterX className='text-3xl' />
                </div>
                <div className="divider"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between text-center text-[#FAFAFA] mt-7">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className=''>
                        <a  className='mr-5' href="#">Privacy Policy</a>
                        <a  className='mr-5' href="#">Terms of Service</a>
                        <a  className='mr-5' href="#">Cookies</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;