'use client'
import React, { useState } from 'react';
import { ChevronDown, X, Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  const navItems = [
    { label: 'Solutions', hasDropdown: true },
    { label: 'Platform', hasDropdown: true },
    { label: 'Pricing', hasDropdown: false },
    { label: 'Customer stories', hasDropdown: false },
    { label: 'Resources', hasDropdown: true },
    { label: 'Company', hasDropdown: true },
  ];

  return (
    <nav className="w-full">
      {/* Announcement Bar */}
      {showAnnouncement && (
        <div className="bg-[#5D20D2] text-white p-3 text-center relative">
          <p className="text-sm pr-8">
            Introducing Spendesk Procurement. Control spend from the start with our new procure-to-pay solution.
            <a href="#" className="underline ml-2 hover:opacity-80">Learn more.</a>
          </p>
          <button
            onClick={() => setShowAnnouncement(false)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-purple-700 rounded-full transition-colors"
            aria-label="Close announcement"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Navigation */}
      <div className="bg-white border-b border-black lg:py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-xl font-bold">SPENDESK</a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 pl-8">
              <div className="flex space-x-6">
                {navItems.map((item, index) => (
                  <div key={index} className="relative group">
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 py-2">
                      <span>{item.label}</span>
                      {item.hasDropdown && (
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="ml-6 lg:pl-10">
                <button className="bg-[#5D20D2] text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                  Book a demo
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
                aria-expanded={isMenuOpen}
                aria-label="Main menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-2 pb-3 space-y-1 border-t border-gray-200">
              {navItems.map((item, index) => (
                <div key={index} className="py-2">
                  <button className="w-full flex items-center justify-between text-gray-700 hover:text-gray-900 py-2">
                    <span>{item.label}</span>
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              ))}
              <div className="pt-4">
                <button className="w-full bg-[#5D20D2] text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                  Book a demo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;