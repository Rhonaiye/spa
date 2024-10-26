'use client'
import React from 'react'
import { Progress } from "@/components/ui/progress"
import { FaArrowDown, FaArrowRight, FaChevronRight } from 'react-icons/fa'; 


const Features = ()=>{
  return (
    <div className='background bg-white py-20 font-sans'>
        
        <div className='lg:px-10 md:px-5 px-2'>
            <div className='texts-div flex flex-col gap-5'>
                <h1 className='text-3xl text-neutral-800 font-bold lg:w-3/5'>The spend management platform that connects the moving parts of your business</h1>
                <p className='text-neutral-800'>Real time control on spend, secure payment methods, clever automations, and more - making accounting a breeze</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-y-6 items-center justify-items-center mt-10'>

           <div className='flex flex-col md:flex-row lg:flex-row'>
              <div className='w-[30vh] md:w-[20vh] md:h-[20vh] lg:w-[25vh] lg:h-[27vh] h-[30vh] bg-neutral-900 text-white rounded-xl p-3 pt-5'>
                  <p className='font-bold mb-8'>Define your budget</p>
                  <Progress value={73}  className='bg-neutral-800' />

                  <div className='flex justify-center mt-5'>
                    <p className='font-bold text-2xl text-black bg-slate-100 py-[3px] px-3 rounded-full'>+</p>
                  </div>
                </div>
                <FaArrowRight className='max-sm:hidden self-center'/>
                <FaArrowDown className='lg:hidden md:hidden self-center mt-2'/>
            </div>



            <div className='flex flex-col md:flex-row lg:flex-row'>
                <div className='w-[30vh] md:w-[20vh] md:h-[20vh] lg:w-[25vh] lg:h-[27vh] h-[30vh] bg-neutral-900 text-white rounded-xl p-3 '>
                  <p className='font-bold'>Pay and set spend rules</p>

                  <div className='flex justify-center mt-5'>
                     <div><p className='font-bold text-2xl text-black bg-slate-100 py-[3px] px-3 rounded-full -rotate-45 ml-7'>£</p></div>
                     <p className='font-bold text-2xl text-black bg-slate-100 py-[3px] px-3 rounded-full mt-[55%] lg:mt-[40%]'>£</p>
                  </div>
                </div>
                <FaArrowRight className='max-sm:hidden self-center'/>
                <FaArrowDown className='lg:hidden md:hidden  self-center mt-2'/>
            </div>

                

            <div className='flex flex-col md:flex-row lg:flex-row'>
                <div className='w-[30vh] md:w-[20vh] md:h-[20vh] lg:w-[25vh] lg:h-[27vh] h-[30vh]  bg-neutral-900 text-white rounded-xl p-3 '>
                  <p className='font-bold'>Manage procurement</p>
                </div>
                <FaArrowRight className='max-sm:hidden self-center'/>
                <FaArrowDown className='lg:hidden md:hidden  self-center mt-2'/>
            </div>

            <div className='flex flex-col md:flex-row lg:flex-row'>
                <div className='w-[30vh] md:w-[20vh] md:h-[20vh] lg:w-[25vh] lg:h-[27vh] h-[30vh]  bg-neutral-900 text-white rounded-xl p-3 '>
                  <p className='font-bold'>Monitor and collect</p>
                </div>
                <FaArrowRight className='max-sm:hidden self-center'/>
                <FaArrowDown className='lg:hidden md:hidden  self-center mt-2'/>
            </div>

            <div className='flex flex-col md:flex-row lg:flex-row'>
                <div className='w-[30vh] md:w-[20vh] md:h-[20vh] lg:w-[25vh] lg:h-[27vh] h-[30vh]  bg-neutral-900 text-white rounded-xl p-3 '>
                  <p className='font-bold'>Automate and report</p>
                </div>
                <FaArrowRight className='max-sm:hidden self-center'/>
                <FaArrowDown className='lg:hidden md:hidden  self-center mt-2'/>
            </div>




            <div className='flex flex-col lg:flex-row'>
                <div className='w-[30vh] md:w-[20vh] md:h-[20vh] lg:w-[25vh] lg:h-[27vh] h-[30vh]  bg-neutral-900 text-white rounded-xl p-3 '>
                  <p className='font-bold'>Integrate</p>
                </div>
        
            </div>

            </div>

            <div className='flex gap-4 mt-10 justify-center lg:justify-start'>
              <button className='bg-indigo-600 font-bold p-2 rounded-md text-white'>All Features</button>
              <button className='bg-transparent border-[1.5px] border-black rounded-md px-3 flex gap-2 items-center'>View our integrations <FaArrowRight/> </button>
           </div>
        </div>
    </div>
  )
}

export default Features