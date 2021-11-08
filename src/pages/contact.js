import React from 'react'

const contact = () => {
  return (
    <>
      <div className="container flex-grow mt-10">
        <h1 className="text-7xl font-bold md:text-3xl sm:text-lg">
          Get in touch
        </h1>
        <div className="flex justify-evenly">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-xl font-medium leading-6 text-gray-900">
                Personal Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Making a reservation at Délicious restaurant is easy and takes
                just a couple of minutes.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            text
          </div>
        </div>
      </div>
    </>
  );
}

export default contact
