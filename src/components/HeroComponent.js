import React from 'react'


const Hero = () => {
  return (
    <>
      <div className="flex flex-col text-center bg-blue-700 py-5">
        <h1 className="text-white font-bold mb-5 mt-5 lg:text-5xl md:text-3xl sm:text-xl">
          OUR STORY
        </h1>
        <p className="text-white mx-auto font-light leading-6 lg:px-40 lg:text-2xl md:px-8 md:text-xl sm:px-3 sm:text-md">
          Everything we do is a celebration of seafood – from how we source our
          fish and shellfish to serving up new ways for you to enjoy it. Since
          1968, we’ve been committed to bringing you a seafood experience you
          won’t find anywhere else. That's how we Sea Food Differently®.
        </p>
      </div>
      <div className="flex flex-wrap bg-white">
        <div className="lg:w-1/2 md:w-full sm:w-full">
          <img
            src="../assets/images/toa-heftiba.jpg"
            alt="FishFood"
            className="fit"
          />
        </div>
        <div className="lg:w-1/2 md:w-full sm:w-full p-5 bg-gradient-to-r from-gray-200">
          <h1 className="text-3xl mb-5 font-bold text-left pt-5">
            OUR SOURCING STORY
          </h1>
          <p className="text-justify leading-6 font-sans capitalize">
            Our commitment to bringing you the best means that all of the
            seafood we serve is sourced in ways that are traceable, sustainable,
            and responsible.
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero
