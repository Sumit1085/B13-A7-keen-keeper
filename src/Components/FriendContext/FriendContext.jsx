import React, { createContext, useState } from 'react';
import friendsData from '../../Data/data.json'
export const FriendContextAPI = createContext();


const FriendContext = ({children}) => {
    const [friends, setFriends] = useState(friendsData);
    const data = {friends, setFriends}
    return (
        <FriendContextAPI.Provider value={data}>
            {children}
        </FriendContextAPI.Provider>
    );
};

export default FriendContext;