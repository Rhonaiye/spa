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

const Encryption = () => {
  return (
    <div>
      <h1 className='bg-white py-8 font-semibold lg:py-6 text-3xl md:text-4xl lg:font-medium lg:text-8xl text-center'>
        End-to-end encryption
      </h1>

      <div className='flex flex-col lg:flex-row gap-[10vh] px-5 lg:px-[7vh] py-20 bg-[#191B1B] text-white'>
        <div className='side-section lg:w-1/2'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-3xl lg:text-3xl font-semibold'>Our customers get results</h1>
            <p>
              Thousands of hours, millions of pounds and more. Our customers have saved a lot thanks to Spendesk. And continue to do so daily. Why not you? It's easy to switch.
            </p>
            <div>
              <button className='text-white bg-indigo-700 font-bold px-4 py-2 rounded-md'>See plans</button>
            </div>
          </div>
        </div>

        <div className='lg:w-1/2'>
          <div className="w-full h-56 overflow-hidden px-6 py-4"> {/* Set height to display 2 cards */}
            <Carousel
              opts={{
                align: "start",
                slidesToScroll: 1,
                vertical: true, // Ensure vertical scrolling is enabled
              }}
              className="w-full h-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4 flex flex-col">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 mb-2"> {/* Adjust margin for spacing */}
                    <div className="p-1">
                      <Card className="h-32"> {/* Set a fixed height for rectangular shape */}
                        <CardContent className="flex aspect-[4/3] items-center justify-center p-6"> {/* Aspect ratio for rectangle */}
                          <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Encryption;
