import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <p className="text-gray-300">©2024 my Company.  All rights reserved.</p>
          <div className="flex space-x-4">
            <span className="text-gray-300 hover:text-white cursor-pointer">
              About
            </span>
            <span className="text-gray-300 hover:text-white cursor-pointer">
              Contact
            </span>
            <span className="text-gray-300 hover:text-white cursor-pointer">
              Privacy 
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
