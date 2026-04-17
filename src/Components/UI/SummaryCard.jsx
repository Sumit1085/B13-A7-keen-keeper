import React, { useContext } from 'react';
import { FriendContextAPI } from '../FriendContext/FriendContext';

const SummaryCard = () => {
    const {friends} = useContext(FriendContextAPI)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 '>
            <div className='text-center shadow-sm bg-white p-8'>
                <h1 className='text-3xl font-semibold text-[#244D3F]'>{friends.length}</h1>
                <p className='text-lg text-[#64748B]'>Total Frinds</p>
            </div>
            <div className='text-center shadow-sm bg-white p-8'>
                <h1 className='text-3xl font-semibold text-[#244D3F]'>3</h1>
                <p className='text-lg text-[#64748B]'>On Track</p>
            </div>
            <div className='text-center shadow-sm bg-white p-8 '>
                <h1 className='text-3xl font-semibold text-[#244D3F]'>6</h1>
                <p className='text-lg text-[#64748B]'>Need Attention</p>
            </div>
            <div className='text-center shadow-sm bg-white p-8'>
                <h1 className='text-3xl font-semibold text-[#244D3F]'>12</h1>
                <p className='text-lg text-[#64748B]'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default SummaryCard;