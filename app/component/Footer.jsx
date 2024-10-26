import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#191B1B] text-white py-20 pt-[25vh] lg:pt-[38vh] px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between lg:items-start mb-8">
        
        {/* Left Section */}
        <div className="lg:w-1/4 mb-8 lg:mb-0 lg:mr-6">
          <h2 className="text-2xl font-semibold">SPENDESK</h2>
          <p className="mt-3 text-gray-400 text-sm">Empower your team with the complete spend management solution</p> 

          <div className="flex gap-3 mt-4 md:mt-[6vh] lg:mt-[10vh]">
            <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer" />
            <FaInstagram className="text-gray-400 hover:text-white cursor-pointer" />
            <FaLinkedinIn className="text-gray-400 hover:text-white cursor-pointer" />
            <FaYoutube className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
          <p className="text-gray-500 text-xs mt-4">English (UK)</p> 
        </div>

        {/* Link Sections */}
        <div className="lg:flex lg:justify-between lg:w-3/4">
          <div className="mb-6 lg:mb-0">
            <h3 className="font-semibold text-lg mb-3">SOLUTIONS</h3>
            <ul className="text-gray-400 space-y-2 text-sm"> 
              <li>Invoice Processing</li>
              <li>Project Expenses</li>
              <li>Subscription Management</li>
              <li>Business Travel</li>
              <li>Team Perks</li>
              <li>Digital Advertising</li>
              <li>Expense Management</li>
              <li>Business Cards</li>
            </ul>
          </div>

          <div className="mb-6 lg:mb-0">
            <h3 className="font-semibold text-lg mb-3">PLATFORM</h3>
            <ul className="text-gray-400 space-y-2 text-sm"> {/* Text size adjusted */}
              <li>Features</li>
              <li>Company Cards</li>
              <li>Virtual Cards</li>
              <li>API & Integrations</li>
              <li>Pricing</li>
              <li>Security</li>
              <li>Trust Center</li>
            </ul>
          </div>

          <div className="mb-6 lg:mb-0">
            <h3 className="font-semibold text-lg mb-3">RESOURCES</h3>
            <ul className="text-gray-400 space-y-2 text-sm"> {/* Text size adjusted */}
              <li>Customer stories</li>
              <li>Blog</li>
              <li>Finance team resources</li>
              <li>ROI Calculator</li>
              <li>CFO Connect</li>
              <li>FAQs</li>
              <li>Glossary</li>
              <li>Help Center</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">COMPANY</h3>
            <ul className="text-gray-400 space-y-2 text-sm"> {/* Text size adjusted */}
              <li>About us</li>
              <li>Partners</li>
              <li>Careers</li>
              <li>News & Press</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
