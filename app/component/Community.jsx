import React from 'react'
import Image from 'next/image'
import cfo from  '../images/cfo-connect.png'
import secure from '../images/Secure&compliant.png'
import service from '../images/service-focused.png'
import { FiArrowUpRight } from 'react-icons/fi';
import { MdArrowForward } from 'react-icons/md';

const Community = ()=>{
  return (
    <div className='background bg-[#F3F4EF] py-20 px-2 lg:px-2'>
        
        <h1 className='text-2xl mb-7 font-bold text-neutral-800 ml-7 md:text-4xl  lg:ml-12'>Community backed</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 place-items-center md:justify-items-center lg:justify-items-center'>
           
           <div className='lg:w-3/4 md:w-3/4 w-[42vh]'>
           <Image src={cfo} alt='CFO connect' className='rounded-xl'/>

              <div className='mt-4 flex flex-col gap-2 mb-3'>
                 <h1 className='text-xl font-bold'>CFO Connect</h1>
                 <p className='text-sm text-neutral-800'>CFO connect, our community of 12K+ CFOs whose insightsfuel Spendesk. Join us today.</p>
              </div>
              <FiArrowUpRight size={40}/>
           </div>

           <div className='lg:w-3/4 md:w-3/4 w-[42vh]'>
           <Image src={service} alt='service' className='rounded-xl'/>

              <div className='mt-4 flex flex-col gap-2 mb-3'>
                 <h1 className='text-xl font-bold'>Service focused</h1>
                 <p className='text-sm text-neutral-800'>Our consultative approach sets us apart 98% say getting started with us was easy</p>
              </div>
              <FiArrowUpRight size={40}/>
           </div>

           <div className='lg:w-3/4 md:w-3/4 w-[42vh]'>
           <Image src={secure} alt='secure and compliant' className='rounded-xl'/>

              <div className='mt-4 flex flex-col gap-2 mb-3'>
                 <h1 className='text-xl font-bold'>Secure & compliant</h1>
                 <p className='text-sm text-neutral-800'>We're serious about security. Your spending is very safe and private with us</p>
              </div>
              <FiArrowUpRight size={40}/>
           </div>
        </div>
    </div>
  )
}

export default Community