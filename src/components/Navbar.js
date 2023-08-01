import React, { useState } from "react";
import { IconBulb, IconMoon, IconArrowForwardUp,IconArrowBack } from '@tabler/icons-react';
function Navbar() {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
    return (
        // Navbar
        <nav style={{background:'#1b0756'}}>
            <div className="max-w-full mx-auto  text-yellow-50">
                <div className="flex justify-between items-center">
                     <div className="flex  space-x-4 px-2 py-3 items-center">
                         <div  className="ml-3">
                            <a href="#">
                                <img className="w-36 "  src="https://admin.aryel.io/assets/img/brand/logo-white.png"></img>
                            </a>
                         </div>
                     
                    </div>
                    <div className="space-x-2"> My  x AR Campaign 
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium ml-2 mr-2 px-2.5 py-0.5 rounded-lg dark:bg-indigo-900 dark:text-indigo-300">Draft</span>

                    </div>
                   
                    <div className="flex items-center space-x-4">
            <a href=""><IconBulb /></a>
            <a href=""><IconMoon /></a>
            <a href=""><IconArrowForwardUp /></a>
            <a href=""><IconArrowBack /></a>

            <div className="relative">
              <div>
              <button
                onClick={toggleDropdown}
                className="text-yellow-50 hover:text-white focus:outline-none flex border border-white rounded-2xl px-3 py-1 mr-8"
              >
                 Actions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
               
              </button>
              </div>
              {isDropdownOpen && (
                <div className="absolute z-10 right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg">
                  {/* Add your dropdown menu items here */}
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Dropdown Item 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Dropdown Item 2
                  </a>
                </div>
              )}
            </div>
          </div>
                 
                    </div>
                  
            </div>
        </nav>
    );
}

export default Navbar;
