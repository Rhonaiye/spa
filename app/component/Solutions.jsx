'use client'
import Image from 'next/image';
import React from 'react';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary, { accordionSummaryClasses } from '@mui/joy/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';
import man from '../images/man.png';
import { FaArrowRight } from 'react-icons/fa';

const Solutions = () => {
  return (
    <div className='bg-[#F3F4EF] border-t-2 border-t-red rounded-[4vh] py-[10vh] md:px-[3vh] lg:px-[5vh]'>
      <div className='flex flex-col md:flex-row lg:flex-row gap-[10vh] px-5'>
        
        {/* Image Section */}
        <div className='lg:w-1/2 md:w-1/2'>
          <Image
            src={man}
            alt='image of a man'
            className='lg:h-[68vh] object-cover bg-center rounded-xl'
          />
        </div>

        {/* Accordion Section */}
        <div className='side-section lg:w-1/2 md:w-1/2 lg:mt-10 flex flex-col gap-5'>
           <h1 className='text-2xl font-bold max-sm:mb-8 lg:text-3xl lg:mb-10'>Spend management your business will love. Yes, really</h1>
          <Accordion
            sx={{
              [`& .${accordionSummaryClasses.indicator}`]: {
                transition: '0.2s',
              },
              [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]: {
                transform: 'rotate(45deg)',
              },
            }}
          >
            <AccordionSummary indicator={<AddIcon />}>
            <p className='font-bold'>Ways to use Spendesk</p>
            </AccordionSummary>
            <AccordionDetails>
               <p className='font-extralight'>
                  Want a break from endlessly chasing receipts? From business travel and
                  managing subscriptions to petty cash and more, keeping track of
                  expenses has never been easie
               </p>
            </AccordionDetails>
          </Accordion>

          <div className='line border-[0.8px] border-black'></div>

          <Accordion
            sx={{
              [`& .${accordionSummaryClasses.indicator}`]: {
                transition: '0.2s',
              },
              [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]: {
                transform: 'rotate(45deg)',
              },
            }}
          >
            <AccordionSummary indicator={<AddIcon />}>
              <p className='font-bold'>Industries we serve</p>
            </AccordionSummary>
            <AccordionDetails>
              <p className='font-extralight'>More detailed text about the second section can go here.</p>
            </AccordionDetails>
          </Accordion>
          
          <div>
            <button className='bg-indigo-500 p-2 px-4 mt-4 rounded-md text-white flex items-center gap-2'>See our solutions <FaArrowRight size={20}/> </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Solutions;