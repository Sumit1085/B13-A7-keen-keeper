import React from 'react';
import { HiH1 } from 'react-icons/hi2';
import { Link } from 'react-router';

const FriendsCard = ({ friend }) => {
    // console.log(friends)
    return (
        <Link to={`/Friend/${friend.id}`} className='container mx-auto py-6'>
            <div className=''>
                 
                <div className="card bg-base-100  shadow-sm">
                   
                <figure className="px-10 pt-10">
                    <img
                        src={friend.picture}
                        alt="Shoes"
                        className="rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{friend.name}</h2>
                    <p>{friend.days_since_contact} days ago</p>
                    <div className='card-actions'>
                        {
                            friend.tags.map(tag => <p className='bg-[#244D3F] text-white px-2 py-1 rounded-xl'>{tag}</p>)
                        }
                    </div>
                    <div>
                        <p className={`${friend.status === 'overdue' ? 'bg-red-500 ' : friend.status === 'almost due' ? 'bg-[#EFAD44] text-white' : 'bg-green-500'} text-white px-2 py-1 rounded-xl`}>{friend.status}</p>
                    </div>
                </div>
            </div>
            </div>
        </Link>
    );
};

export default FriendsCard;