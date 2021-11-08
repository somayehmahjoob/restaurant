import { Transition } from '@headlessui/react';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-auto sm:h-10"
                  src="../assets/images/logo@2x.png"
                  alt="Logo"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink
                    to="/"
                    className="hover:text-blue-800 text-gray-900 px-3 py-2 text-lg font-medium"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/menu"
                    className="hover:text-blue-800 text-gray-900 px-3 py-2 text-lg font-medium"
                  >
                    Menu
                  </NavLink>
                  <NavLink
                    to="/about"
                    className="hover:text-blue-800 text-gray-900 px-3 py-2 text-lg font-medium"
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className="hover:text-blue-800 text-gray-900 px-3 py-2 text-lg font-medium"
                  >
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 hover:text-white hover:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main Menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="text-left px-0 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <NavLink
                  to="/"
                  className="hover:bg-blue-800 hover:text-white text-gray-900 block px-3 py-2 text-sm font-medium border-t border-gray-300"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/menu"
                  className="hover:bg-blue-800 hover:text-white  text-gray-900 block px-3 py-2 text-sm font-medium border-t border-gray-300"
                >
                  Menu
                </NavLink>
                <NavLink
                  to="/about"
                  className="hover:bg-blue-800 hover:text-white  text-gray-900 block px-3 py-2 text-sm font-medium border-t border-gray-300"
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className="hover:bg-blue-800 hover:text-white  text-gray-900 block px-3 py-2 text-sm font-medium border-t border-gray-300"
                >
                  Contact
                </NavLink>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
}

export default Navbar;
