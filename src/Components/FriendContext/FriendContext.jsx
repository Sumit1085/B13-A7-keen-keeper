import React, { createContext, useState } from "react";
import friendsData from "../../../public/data.json";
import { toast } from "react-toastify";

export const FriendContextAPI = createContext();

const FriendContext = ({ children }) => {
  const [friends, setFriends] = useState(friendsData);
  const [timeline, setTimeline] = useState([]); 

  const addToTimeline = (friend, type) => {
    const exists = timeline.find((item) => item.id === friend.id && item.type === type);

    if (exists) {
      toast.error("Already added!");
      return;
    }else{
        setTimeline([...timeline, { ...friend, type }]);
        toast.success(`${type} added`);
    }

    
  };

  const handleCall = (friend) => addToTimeline(friend, "call");
  const handleText = (friend) => addToTimeline(friend, "text");
  const handleVideo = (friend) => addToTimeline(friend, "video");

  const data = {
    friends,
    setFriends,
    timeline,
    setTimeline,
    handleCall,
    handleText,
    handleVideo,
  };

  return (
    <FriendContextAPI.Provider value={data}>
      {children}
    </FriendContextAPI.Provider>
  );
};

export default FriendContext;
