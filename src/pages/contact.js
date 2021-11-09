import React from 'react'
import ContactFormComponent from '../components/ContactFormComponent';

const contact = () => {
  return (
    <>
      <div className="flex-grow">
        <div className="container my-10">
          <h1 className="text-3xl mb-5 font-bold md:text-5xl lg:text-7xl">
            Get in touch
          </h1>
          <div className="flex flex-wrap justify-evenly">
            <div className="w-full xl:w-2/5 lg:w-2/5">
              <div className="bg-blue-500 lg:h-full text-white">
                <div className="p-5 sm:px-0 text-left">
                  <h3 className=" pl-4 text-xl inline-flex font-extrabold border-b-2 leading-10 text-gray-100">
                    Personal Information
                  </h3>
                  <p className="mt-1 px-5 text-sm text-gray-200">
                    Got a question about our services or about your gift card?
                    If you have a question about your gift card, don't forget to
                    include your card number in the message. Please fill in your
                    contact details below.
                  </p>
                  <div className="px-4 py-5">
                    <h3 className="font-extrabold text-gray-100">
                      Collaborate
                    </h3>
                    <div className="inline-block">
                      <span className="mr-1 pl-5 font-bold">Call:</span>
                      <span className="text-gray-300">+98-916-802-4877</span>
                    </div>
                    <div className="inline-block">
                      <span className="mr-1 pl-5 font-bold">Email:</span>
                      <span className="text-gray-300">
                        Somayehmahjob@gmail.com
                      </span>
                    </div>
                  </div>
                  <div className="px-4 py-5 text-left">
                    <h3 className="font-extrabold text-gray-100">Join Us</h3>
                    <div className="inline-block">
                      <span className="mr-1 pl-5 font-bold">Call:</span>
                      <span className="text-gray-300">+98-916-802-4877</span>
                    </div>
                    <div className="inline-block">
                      <span className="mr-3 pl-5 font-bold">Email:</span>
                      <span className="text-gray-300">
                        Somayehmahjob@gmail.com
                      </span>
                    </div>
                  </div>
                  <div className="px-4 py-5 text-left">
                    <h3 className="text-xl inline-flex font-extrabold border-b leading-10 text-gray-100">
                      Location
                    </h3>
                    </div>
                    <div className="inline-block">
                      <span className="mr-3 pl-5 font-bold">Address:</span>
                      <span className="text-gray-300">
                        Khuzestan, ahvaz, kianpars..
                      </span>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-3/5 lg:w-3/5">
              <ContactFormComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default contact
