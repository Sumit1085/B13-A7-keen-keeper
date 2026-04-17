import React, { useContext } from 'react';
import { FriendContextAPI } from '../FriendContext/FriendContext';
import text from '../../assets/text.png'
import call from '../../assets/call.png'
import video from '../../assets/video.png'

const Timeline = () => {
  const { friends, setFriends, timeline, setTimeline, handleCall, handleText, handleVideo } = useContext(FriendContextAPI)
  console.log("timeline", timeline)
  console.log("friends", friends)
  const getTimelineImage = (type) => {
    if (type === "call") return call;
    if (type === "text") return text;
    if (type === "video") return video;
  };

  return (
    <div className="bg-[#F8FAFC] p-6">
      <div className='container mx-auto'>
        <h2 className="text-xl font-semibold mb-4">Timeline</h2>

        <div className=''>
          <div className="space-y-4 mt-4 bg-white">
          {timeline.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-3 rounded-lg">

              <img
                src={getTimelineImage(item.type)}
                className="w-12 h-12"
              />

              <div>
                <p className="font-medium">{`${item.type} with ${item.name}`}</p>
                <p className="text-sm text-gray-500">{item.type} action</p>
              </div>

            </div>
          ))}
        </div>
        </div>
      </div>

    </div>
  );

};

export default Timeline;