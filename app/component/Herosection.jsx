'use client'
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';

import budget from '../images/budget.png'
import cardImage from '../images/card.png'; 
import invoiceImage from '../images/invoice.png'; 
import { FaArrowRight } from 'react-icons/fa';

const images = [
  {
    src: cardImage, 
    name: "Corporate cards",
    description: "Set card limits and create approval flows with smart card controls",
  },
  {
    src: invoiceImage, 
    name: "Invoice management",
    description: "Automate invoice handling from entry to payment",
  },
  {
    src: budget, 
    name: "Integrated budgeting",
    description: "Plan departmental spending using our detailed budget features",
  },
  {
    src: cardImage, 
    name: "Image 4",
    description: "Set card limits and create approval flows with smart card controls",
  },
];

const Herosection = () => {
  return (
    <div className='py-[20vh] px-[2vh] lg:py-[20vh] md:px-[5vh] lg:px-[7vh] bg-white font-sans flex flex-col gap-7'>
      <h1 className='text-4xl sm:text-5xl md:text-8xl lg:text-8xl font-bold text-neutral-800 lg:w-3/4'>
        Where Finance Connects
      </h1>

      <div className='text-sm sm:text-base'>
        <p> + Get 100% visibility on your operational spend</p>
        <p> + Spend management built for finance</p>
      </div>

      <div className='line border-[0.8px] border-black'></div>

      <div className='flex gap-2 sm:gap-4'>
        <button className='bg-indigo-500 p-1 sm:p-2 rounded-md text-white flex items-center gap-2 text-xs sm:text-sm'>
          Book a demo <FaArrowRight/>  
        </button>
        <button className='bg-transparent border-[1px] border-black rounded-md px-2 sm:px-3 flex items-center gap-2 text-xs sm:text-sm'>
          Tour the Spendesk app <FaArrowRight/> 
        </button>
      </div>

      <div className="w-full px-2 sm:px-4 md:px-6 py-4">
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: 1,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-1 sm:pl-2 md:pl-4 md:basis-1/3">
                <div className="p-1">
                  <Card className='bg-[#191B1B] rounded-xl h-[40vh] sm:h-[35vh] md:h-[25vh] lg:h-[47vh]'> {/* Adjusted height for mobile */}
                    <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 pb-0 text-slate-100 h-full"> {/* Adjusted padding for mobile */}
                      <h2 className="font-semibold text-lg sm:text-xl">{image.name}</h2> 
                      <p className="text-center font-light text-xs sm:text-sm w-[80%] md:w-[100%] ">{image.description}</p>
                      <Image 
                        src={image.src} 
                        alt={image.name} 
                        width={280}  // reduced width for smaller screens
                        height={50} 
                        className="mb-2 mx-auto sm:mb-4 mt-4 sm:mt-6 max-w-full max-h-[12vh] object-contain"

                      /> 
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Buttons Container */}
          <div className="flex justify-start gap-2 mt-4 pl-1 sm:pl-2 md:pl-4">
            <CarouselPrevious className="static translate-y-0 w-6 sm:w-8 h-6 sm:h-8" />
            <CarouselNext className="static translate-y-0 w-6 sm:w-8 h-6 sm:h-8" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Herosection;
