'use client'
import React from 'react';

const Footer2 = () => {
  const legalLinks = [
    { title: '© Spendesk', href: '#' },
    { title: 'Terms of Service', href: '#' },
    { title: 'Privacy Policy', href: '#' },
    { title: 'Cookies Policy', href: '#' },
    { title: 'Legal Notice', href: '#' },
    { title: 'Cookie Settings', href: '#' },
  ];

  return (
    <footer className="w-full bg-white text-black py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto lg:flex lg:px-10 md:pl-4">
       

       <div className='flex flex-col'>
              {/* Legal Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-gray-800 hover:text-gray-600 transition-colors font-bold"
              >
                {link.title}
              </a>
            ))}
          </div>

         {/* Legal Text */}
         <div className="mt-8 space-y-4 lg:w-3/4">
            <p className="text-xs text-gray-800 leading-relaxed">
            Payments services are provided as part of the Spendesk product by Spendesk Financial Services in the EEA, by Adyen in the UK and by Sutton Bank in the US. Spendesk Financial Services is a French payment institution licensed by the ACPR under number 17518. Adyen N.V. is a Dutch bank, whose UK branch is licensed by the FCA to provide payment services under number 779800. Sutton Bank is an FDIC insured member institution.
            </p>
            <p className="text-xs text-gray-800 leading-relaxed">
            Visa debit cards are issued by Spendesk Financial Services in the EEA, by Adyen in the UK and by Sutton Bank in the US, pursuant to a license from Visa.
            </p>
         </div>
       </div>
       
       {/* App install buttons */}
       <div className='mt-8 lg:mt-0 lg:pr-8'>
        <p className='text-3xl font-extrabold font-serif'>Visa</p>
       </div>

        
      </div>
      
    </footer>
  );
};

export default Footer2;
