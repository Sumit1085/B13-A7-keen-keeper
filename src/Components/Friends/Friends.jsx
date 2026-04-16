import React, { useContext } from 'react';
import { FriendContextAPI } from '../FriendContext/FriendContext';
import FriendsCard from '../UI/FriendsCard';

const Friends = () => {
    const {friends} = useContext(FriendContextAPI)
    console.log(friends)
    return (
        <div>
            <h2>Your Friends</h2>
            <div className='grid grid-cols-4 mt-5 gap-5'>
            
            {
                friends.map(friend => <FriendsCard key={friend.id} friends={friends} friend={friend}></FriendsCard>)
            }
        </div>
        </div>
    );
};

export default Friends;