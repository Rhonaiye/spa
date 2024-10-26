import React from 'react';

const BookDemo = () => {
  return (
    <section className="relative top-28 bg-[#F3F4EF] bg-opacity-60 backdrop-blur-md  text-center rounded-2xl py-20 px-5 lg:px-20 mx-6 lg:mx-20 ">
      <h2 className="text-2xl lg:text-3xl font-semibold mb-4">It's time to take back control</h2>
      <p className="text-black mb-6">
        We help thousands of customers connect the moving parts of their business with a platform that people love using. 
        We can do the same for you.
      </p>
      <button className="px-4 py-2 bg-transparent border-[1.2px] border-black text-black rounded-md">Book a demo today →</button>
    </section>
  );
};

export default BookDemo;
