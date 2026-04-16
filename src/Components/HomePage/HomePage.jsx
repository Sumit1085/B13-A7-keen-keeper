import React from 'react';
import SummaryCard from '../UI/SummaryCard';
import FriendsCard from '../UI/FriendsCard';
import Friends from '../Friends/Friends';

const HomePage = () => {
    return (
        <div className=' bg-[#F8FAFC]'>
            <div className='container mx-auto'>
                <div className='py-20 text-center'>
                    <h1 className='text-5xl font-bold'>Friends to keep close in your life</h1>
                    <p className='mt-4 text-[#1F2937]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />relationships that matter most.</p>
                    <button className='btn mt-8 bg-[#244D3F] text-white'>+ Add a Friend</button>
                </div>

                <div>
                    <SummaryCard/>
                </div>
                <div className=''>
                    <Friends></Friends>
                </div>
            </div>
        </div>
    );
};

export default HomePage;