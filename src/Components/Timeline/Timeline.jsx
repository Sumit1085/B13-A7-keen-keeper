import React, { useContext } from 'react';
import { FriendContextAPI } from '../FriendContext/FriendContext';
import text from '../../assets/text.png'
import call from '../../assets/call.png'
import video from '../../assets/video.png'
import Nodata from '../Nodata/Nodata';


const Timeline = () => {
  const { timeline } = useContext(FriendContextAPI)
  const getTimelineImage = (type) => {
    if (type === "call") return call;
    if (type === "text") return text;
    if (type === "video") return video;
  };

  return (
    <div className="bg-[#F8FAFC] p-6">
      <div className='container mx-auto'>
        <h2 className="text-[48px] font-semibold mb-4">Timeline</h2>

        {timeline.length === 0 ? (<div className='flex justify-center my-6'>
         <Nodata/>
        </div>) : (<div className=''>
            <div className=" mt-4 space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-center bg-white  gap-4 p-3 rounded-lg">
                
                  <img
                    src={getTimelineImage(item.type)}
                    className="w-8 h-8"
                  />

                  <div>
                    <p className="text-[20px] font-medium">{`${item.type} with ${item.name}`}</p>
                    <p className="text-[16px] text-gray-500">{new Date(item.next_due_date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    })}</p>
                  </div>

                </div>
              ))}
            </div>
          </div>)
        }
      </div>

    </div>
  );

};

export default Timeline;