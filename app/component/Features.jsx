import React from 'react'

const Features = ()=>{
  return (
    <div className='background bg-white py-20 font-sans'>
        
        <div className='lg:px-10 px-2'>
            <div className='texts-div flex flex-col gap-5'>
                <h1 className='text-3xl text-neutral-800 font-bold lg:w-3/5'>The spend management platform that connects the moving parts of your business</h1>
                <p className='text-neutral-800'>Real time control on spend, secure payment methods, clever automations, and more - making accounting a breeze</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-6 gap-y-6 items-center justify-items-center mt-10'>
                <div className='w-[40vh] lg:w-[25vh] lg:h-[27vh] h-[35vh] bg-neutral-900 text-white rounded-xl p-3 '>
                  <p>Define your budget</p>
                </div>

                <div className='w-[40vh] lg:w-[25vh] lg:h-[27vh] h-[35vh] bg-neutral-900 text-white rounded-xl p-3 '>
                  <p>Pay and set spend rules</p>
                </div>

                <div className='w-[40vh] lg:w-[25vh] lg:h-[27vh] h-[35vh] bg-neutral-900 text-white rounded-xl p-3 '>
                  <p>Manage procurement</p>
                </div>

                <div className='w-[40vh] lg:w-[25vh] lg:h-[27vh] h-[35vh] bg-neutral-900 text-white rounded-xl p-3 '>
                  <p>Monitor & collect</p>
                </div>

                <div className='w-[40vh] lg:w-[25vh] lg:h-[27vh] h-[35vh] bg-neutral-900 text-white rounded-xl p-3 '>
                  <p>Automate & report</p>
                </div>

                <div className='w-[40vh] lg:w-[25vh] lg:h-[27vh] h-[35vh] bg-neutral-900 text-white rounded-xl p-3 '>
                  <p>Integrate</p>
                </div>
            </div>

            <div className='flex gap-4 mt-10 justify-center lg:justify-start'>
              <button className='bg-indigo-600 font-bold p-2 rounded-md text-white'>All Features</button>
              <button className='bg-transparent border-[1.5px] border-black rounded-md px-3'>View our integrations</button>
           </div>
        </div>
    </div>
  )
}

export default Features