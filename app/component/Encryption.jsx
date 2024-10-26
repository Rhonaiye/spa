'use client';
import React from 'react';
import { Carousel } from 'antd';
import table from '../images/table.png';
import Image from 'next/image';
import flower from '../images/flowers.png';
import laptop from '../images/laptop.png';
import keyboard from '../images/keyboard.png';
import aircraft from '../images/aircraft.png';

const Encryption = () => {
  return (
    <div>
      <h1 className='bg-white py-8 font-semibold lg:py-6 text-3xl md:text-4xl lg:font-medium lg:text-8xl text-center'>
        End-to-end encryption
      </h1>

      <div className='flex flex-col lg:flex-row gap-[10vh] px-5 lg:px-[7vh] py-20 bg-[#191B1B] text-white'>
        <div className='side-section lg:w-1/2 md:pt-28 lg:pt-[27vh]'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl md:text-3xl lg:text-3xl font-semibold'>Our customers get results</h1>
            <p className='text-sm md:text-base lg:text-base'>
              Thousands of hours, millions of pounds and more. Our customers have saved a lot thanks to Spendesk. And continue to do so daily. Why not you? It's easy to switch.
            </p>
            <div>
              <button className='text-white bg-indigo-700 font-bold px-4 py-2 rounded-md'>See plans</button>
            </div>
          </div>
        </div>

        <div className='lg:w-1/2'>
          <Carousel vertical autoplay dots={false}>
            {/* First Set of Items */}
            <div className='flex flex-col gap-4 mb-4'>
              <div className='w-full h-auto flex items-center justify-center py-7'>
                <Image src={table} alt='table-image' className='rounded-xl' height={60} width={400} layout="responsive" />
              </div>
              <div className='w-full h-auto flex items-center justify-center py-7'>
                <Image src={keyboard} alt='keyboard-image' className='rounded-xl' height={60} width={400} layout="responsive" />
              </div>
            </div>

            {/* Second Set of Items */}
            <div className='flex flex-col gap-4 mb-4'>
              <div className='w-full h-auto flex items-center justify-center py-7'>
                <Image src={aircraft} alt='aircraft-image' className='rounded-xl' height={60} width={400} layout="responsive" />
              </div>

              <div className='w-full h-auto flex items-center justify-center py-7'>
                <Image src={laptop} alt='laptop-image' className='rounded-xl' height={60} width={400} layout="responsive" />
              </div>
            </div>

            {/* Third Set of Items */}
            <div className='flex flex-col gap-4'>
              <div className='w-full h-auto flex items-center justify-center py-7'>
                <Image src={table} alt='table-image' className='rounded-xl' height={60} width={400} layout="responsive" />
              </div>
              <div className='w-full h-auto flex items-center justify-center py-7'>
                <Image src={flower} alt='flower-image' className='rounded-xl' height={60} width={400} layout="responsive" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Encryption;
