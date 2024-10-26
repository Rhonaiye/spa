import React from 'react'
import StarIcon from '@mui/icons-material/Star';

const Partners = ()=>{
  return (
    <div className='background py-8 bg-black text-white'>

    <div className="flex flex-col justify-center place-items-end items-center gap-5 lg:gap-0 lg:mb-5 ">
      <p className="text-center mb-4 max-sm:text-sm">
        LOVED BY 5,000+ <span className="font-bold">FINANCE TEAMS</span>
      </p>
    
      <div className="flex items-center gap-2 max-sm:mb-5 mb-5 lg:mb-0">
        <span className="font-bold max-sm:text-sm">4.7/5</span>
        <div className="flex items-center">
          <StarIcon fontSize="small" className="text-indigo-400" />
          <StarIcon fontSize="small" className="text-indigo-400" />
          <StarIcon fontSize="small" className="text-indigo-400" />
          <StarIcon fontSize="small" className="text-indigo-400" />
          <StarIcon fontSize="small" className="text-indigo-400" />
        </div>
      </div>
    </div>
    

        <div className='parent flex flex-col md:flex-row md:justify-center lg:flex-row items-center lg:justify-evenly'>
             <div className='flex max-sm:mb-3 gap-[4vh] lg:gap-[10vh]'>
                <div>
                     <p className='font-bold text-xl'>depop</p>
                </div>

                <div>
                  <p className='font-bold text-xl text-blue-500' >Zapp</p>
                </div>

                <div>
                  <p className='font-bold text-xl font-serif'>bloom & wild</p>
                </div>

                <div>
                  <p className='font-bold text-xl text-green-500'>Tier</p>
                </div>
             </div>

             <div className='flex gap-[4vh] lg:gap-[10vh]'>
                <div>
                  <p className='font-bold text-xl text-green-200'>moneybox</p>
                </div>

                <div>
                  <p className='font-bold text-xl'>wefox</p>
                </div>

                <div>
                  <p className='font-bold text-xl'>silverfin</p>
                </div>

                <div>
                  <p className='font-bold text-xl'>hotjar</p>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Partners