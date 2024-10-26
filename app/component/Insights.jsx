import React from 'react';
import flower from '../images/flowers.png';
import laptop from '../images/laptop.png';
import keyboard from '../images/keyboard.png';
import aircraft from '../images/aircraft.png'
import Image from 'next/image';

const insightsData = [
  { 
    title: '5 excellent marketing budget examples to copy', 
    tag: 'Smart spending', 
    time: '5min', 
    image: flower 
  },
  { 
    title: 'Purchase order processes: common issues and best practice', 
    tag: 'Finance tools & tech', 
    time: '8min', 
    image: laptop 
  },
  { 
    title: 'HMRC travel expenses: A guide for business travel & tax', 
    tag: 'Business travel spend', 
    time: '9min', 
    image: aircraft 
  },
  { 
    title: 'What is a financial controller? The role & keys to effectiveness', 
    tag: 'Finance insights', 
    time: '8min', 
    image: keyboard
  },
];

const Insights = () => (
  <div className='lg:px-[7vh] md:px-7 px-3 py-[8vh]'>
    <div className='flex flex-col lg:flex-row items-start gap-3 lg:items-center lg:justify-between'>
      <h1 className='text-2xl lg:text-3xl font-semibold'>Insights from our experts</h1>
      <button className='px-3 py-1 border-[1.2px] border-black rounded-md'>Check out the blog</button>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10'>
      {insightsData.map((insight, index) => (
        <div key={index} className='h-[40vh] p-4 rounded-lg flex flex-col justify-between'>
          <div className='w-full h-2/3 bg-gray-400 rounded-md flex items-center justify-center text-gray-700'>
              <Image src={insight.image} alt={insight.title} className='object-cover w-full h-full rounded-md' />
          </div>
          
          <p className='font-semibold text-sm mt-4'>{insight.title}</p>
          <div className='flex gap-4 mt-2 items-center'>
            <p className='text-violet-500 bg-violet-100 px-2 py-1 rounded-md text-sm font-semibold'>{insight.tag}</p>
            <p className='text-sm text-neutral-800'>{insight.time}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Insights;
