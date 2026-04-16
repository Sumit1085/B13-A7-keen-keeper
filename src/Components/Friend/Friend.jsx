import React from 'react';
import { FaVideo } from 'react-icons/fa';
import { FiArchive } from 'react-icons/fi';
import { IoIosCall, IoMdText } from 'react-icons/io';
import { MdDeleteOutline } from 'react-icons/md';
import { RiNotificationSnoozeLine } from 'react-icons/ri';
import { useLoaderData, useParams } from 'react-router';

const Friend = () => {
    const { id } = useParams()
    const friendData = useLoaderData();
    const friend = friendData.find(f => f.id == id)
    console.log(friend)

    return (
        <div className=' bg-[#F8FAFC]'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-3 py-20'>
                    <div className='col-span-1 '>
                        <div className="card bg-base-100 w-96 shadow-sm p-6">
                            <figure>
                                <img className='rounded-full'
                                    src={friend.picture} />
                            </figure>
                            <div className="card-body text-center">
                                <h2 className=" text-[20px] font-semibold text-center">{friend.name}</h2>
                                <div className='flex justify-center'>
                                    <span className={`${friend.status === 'overdue' ? 'bg-red-500 ' : friend.status === 'almost due' ? 'bg-[#EFAD44]' : 'bg-green-500'} text-white p-3  rounded-xl text-center badge`}>{friend.status}</span>
                                </div>

                                <div>
                                    {friend.tags.map(f => <p className='badge p-3 text-white bg-green-500'>{f}</p>)}
                                </div>
                                <div>
                                    <p className='text-[16px] italic text-[#64748B]'>"{friend.bio}"</p>
                                </div>
                                <div>
                                    <p className='text-[14px] text-[#64748B]'>Preferred: {friend.email}</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col w-96.25 mt-4 space-y-2'>
                            <button className='btn text-[16px] font-medium'><RiNotificationSnoozeLine /> Snooze 2 weeks</button>
                            <button className='btn text-[16px] font-medium'><FiArchive /> Archive</button>
                            <button className='btn text-[16px] font-medium text-red-500'><MdDeleteOutline /> Delete</button>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div>
                            <div className='grid grid-cols-3 gap-9 '>
                                <div className='text-center shadow-sm bg-white p-8 rounded-lg'>
                                    <h1 className='text-3xl font-semibold text-[#244D3F]'>{friend.days_since_contact}</h1>
                                    <p className='text-lg text-[#64748B]'>Days Since Contact</p>
                                </div>
                                <div className='text-center shadow-sm bg-white p-8 rounded-lg'>
                                    <h1 className='text-3xl font-semibold text-[#244D3F]'>{friend.goal}</h1>
                                    <p className='text-lg text-[#64748B]'>Goal (Days)</p>
                                </div>
                                <div className='text-center shadow-sm bg-white p-8 rounded-lg'>
                                    <h1 className="text-3xl font-semibold text-[#244D3F]">
                                        {new Date(
                                            new Date().setDate(new Date().getDate() - friend.days_since_contact)
                                        ).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "2-digit",
                                            year: "numeric",
                                        })}
                                    </h1>
                                    <p className='text-lg text-[#64748B]'>Next Due</p>
                                </div>
                            </div>

                            <div className='flex justify-between bg-white p-6 mt-6'>
                                <div>
                                    <h1 className='text-[20px] font-medium text-[#244D3F]'>Relationship Goal</h1>
                                    <p className='text-[18px] mt-4'>Connect every <span className='font-bold'> 30 days</span></p>
                                </div>
                                <button className='btn'>Edit</button>
                            </div>
                            <div className="bg-white p-6 mt-6">
                                <div>
                                    <h1 className="text-[20px] font-medium text-[#244D3F]">
                                        Quick Check-In
                                    </h1>
                                </div>

                                <div className="grid grid-cols-3 gap-3 mt-4">
                                    <button className="btn flex flex-col items-center gap-1">
                                        <IoIosCall />
                                        Call
                                    </button>

                                    <button className="btn flex flex-col items-center gap-1">
                                        <IoMdText />
                                        Text
                                    </button>

                                    <button className="btn flex flex-col items-center">
                                        <FaVideo className='text-5xl' />
                                        Video
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Friend;