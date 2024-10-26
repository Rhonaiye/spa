'use client'
import React, { useState } from 'react';
import { ChevronDown, X, Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  return (
    <div className="w-full">
      {/* Announcement Bar */}
      {showAnnouncement && (
        <div className="bg-[#5D20D2] text-white py-2 px-4 text-center relative">
          <span className='max-sm:text-sm'>
            Introducing Spendesk Procurement. Control spend from the start with our new procure-to-pay solution.
            <a href="#" className="underline ml-2 ">Learn more.</a>
          </span>
          <button
            onClick={() => setShowAnnouncement(false)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

    

      {/* Main Navigation */}
      <div className="bg-white border-b border-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-xl font-bold">SPENDESK</a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                  <span>Solutions</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                  <span>Platform</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <a href="#" className="text-gray-700 hover:text-gray-900">
                Pricing
              </a>

              <a href="#" className="text-gray-700 hover:text-gray-900">
                Customer stories
              </a>

              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                  <span>Resources</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                  <span>Company</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <a
                href="#"
                className="bg-[#5D20D2] text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Book a demo
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Solutions</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Platform</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Pricing</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Customer stories</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Resources</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Company</a>
              <a
                href="#"
                className="block px-3 py-2 text-center bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Book a demo
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;