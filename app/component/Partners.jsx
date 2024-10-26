import React from 'react';
import StarIcon from '@mui/icons-material/Star';

const Partners = () => {
  return (
    <div className='background py-8 bg-black text-white'>
      <div className="flex flex-col justify-center items-center gap-5 lg:gap-0 lg:mb-5">
        <p className="text-center mb-4 max-sm:text-sm">
          LOVED BY 5,000+ <span className="font-bold">FINANCE TEAMS</span>
        </p>

        <div className="flex items-center gap-2 mb-5 lg:mb-0">
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

      <div className='flex flex-col md:flex-row md:justify-center md:gap-3 lg:gap-4'>
        {/* Left Section */}
        <div className='flex  justify-center items-center gap-4 max-sm:mb-5'>
          <p className='font-bold text-xl text-center'>depop</p>
          <p className='font-bold text-xl text-blue-500 text-center'>Zapp</p>
          <p className='font-bold text-xl font-serif text-center'>bloom & wild</p>
          <p className='font-bold text-xl text-green-500 text-center'>Tier</p>
        </div>

        {/* Right Section */}
        <div className='flex justify-center items-center gap-4'>
          <p className='font-bold text-xl text-green-200 text-center'>moneybox</p>
          <p className='font-bold text-xl text-center'>wefox</p>
          <p className='font-bold text-xl text-center'>silverfin</p>
          <p className='font-bold text-xl text-center'>hotjar</p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
