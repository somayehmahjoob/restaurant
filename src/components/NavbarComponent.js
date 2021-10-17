import React, { Fragment } from 'react';
import { Disclosure } from "@headlessui/react";
import {MenuIcon, XIcon} from '@heroicons/react/outline';

const navigation = [
  {name: "Home", href: "/" , current : true},
  {name: "Menu", href: "/" , current : false},
  {name: "About", href: "/" , current : false},
  {name: "contact", href: "/" , current : false}
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function  Navbart(){
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded text-gray-600 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only"> Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="lg:block h-8 w-auto"
                    src="../assets/images/logo@2x.png"
                    alt="Logo"
                  />
                </div>
                <div className="hidden sm:block sm:ml-10">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-gray-900 border-b-2 border-blue-600"
                            : "text-gray-500 hover:text-blue-500",
                          "px-3 py-3 leading-10 text-lg font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-blue-500 text-white"
                        : "text-gray-700 hover:bg-blue-400 hover:text-white",
                      "block py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  );
}