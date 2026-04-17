import { Pie, PieChart, Cell, ResponsiveContainer } from 'recharts';
import { useContext } from 'react';
import { FriendContextAPI } from '../FriendContext/FriendContext';
import { FaCircle } from 'react-icons/fa';
import Nodata from '../Nodata/Nodata';

export default function PieChartWithPaddingAngle({ isAnimationActive = true }) {
  const { timeline = [] } = useContext(FriendContextAPI);

  const chartData = [
    { name: 'Call', value: timeline.filter(item => item.type === 'call').length },
    { name: 'Text', value: timeline.filter(item => item.type === 'text').length },
    { name: 'Video', value: timeline.filter(item => item.type === 'video').length },
  ];

  const hasData = timeline.length > 0 && chartData.some(item => item.value > 0);

  const colors = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className='container mx-auto mt-10'>
      <h2 className='text-5xl font-bold'>Friendship Analytics</h2>

      {!hasData ? (
        <div className='flex justify-center my-6'>
          <Nodata />
        </div>
      ) : (
        <>
          <div style={{ width: '100%', height: 350 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={chartData}
                  innerRadius="60%"
                  outerRadius="80%"
                  cornerRadius={10}
                  paddingAngle={5}
                  dataKey="value"
                  nameKey="name"
                  isAnimationActive={isAnimationActive}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className='flex justify-center py-2 mb-3'>
            <p className='flex items-center mr-2 gap-2'>
              <FaCircle className='text-[#0088FE]' /> Call
            </p>
            <p className='flex items-center mr-2 gap-2'>
              <FaCircle className='text-[#00C49F]' /> Text
            </p>
            <p className='flex items-center mr-2 gap-2'>
              <FaCircle className='text-[#FFBB28]' /> Video
            </p>
          </div>
        </>
      )}
    </div>
  );
}