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

// Updated images array with names and descriptions
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
    <div className='py-[20vh] px-[2vh] lg:py-[20vh] lg:px-[7vh] bg-white font-sans flex flex-col gap-7'>
      <h1 className='text-5xl lg:text-8xl font-bold text-neutral-800 lg:w-3/4'>
        Where Finance Connects
      </h1>

      <div>
        <p> + Get 100% visibility on your operational spend</p>
        <p> + Spend management built for finance</p>
      </div>

      <div className='line border-[0.8px] border-black'></div>

      <div className='flex gap-4'>
        <button className='bg-indigo-500 p-2 rounded-md text-white'>Book a demo</button>
        <button className='bg-transparent border-[1px] border-black rounded-md px-3'>Tour the Spendesk app</button>
      </div>

      <div className="w-full px-6 py-4">
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: 1,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
                <div className="p-1">
                  <Card className='bg-[#191B1B] rounded-xl'>
                    <CardContent className="flex flex-col items-center justify-center p-6 pb-0 text-slate-100">
                      <h2 className="font-semibold text-xl">{image.name}</h2> 
                      <p className="text-center font-light text-sm w-[80%]">{image.description}</p>
                      <Image 
                        src={image.src} 
                        alt={image.name} 
                        width={320} 
                        height={50} 
                        className="mb-0 mx-10 mt-6" 
                      /> 
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Buttons Container */}
          <div className="flex justify-start gap-2 mt-4 pl-2 md:pl-4">
            <CarouselPrevious className="static translate-y-0 w-8 h-8" />
            <CarouselNext className="static translate-y-0 w-8 h-8" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Herosection;
