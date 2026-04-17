import React from 'react';
import { FaHandPaper } from 'react-icons/fa';
import { GrLinkPrevious } from 'react-icons/gr';
import { Link } from 'react-router';

const Nodata = () => {
    return (
        <div>
            <div>
           <FaHandPaper className='text-6xl flex justify-center w-full text-[#95a5a6]' />
            <h1 className='text-[48px] text-[#95a5a6]'>No data found</h1>
            <Link className='btn w-full bg-[#244D3F] text-white' to={'/'}><GrLinkPrevious />
 Go to previous page</Link>
         </div>
        </div>
    );
};

export default Nodata;