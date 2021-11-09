import React from 'react'

const ContactFormComponent = () => {
  return (
    <>
      <div className="text-left sm:px-0">
        <form action="#" method="POST">
          <div className="shadow overflow-hidden">
            <div className="bg-gray-100 sm:p-6">
              <div className="block text-left">
                <h1 className="inline-flex font-bold pt-1 pb-2 mb-3 pl-2 border-b-2 border-transparent border-gray-300">
                  Contact Form
                </h1>
              </div>
              {/* Row first */}
              <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 px-2 py-2">
                  <label
                    htmlFor="first-name"
                    className="block lg:inline-block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="w-full lg:w-1/2 px-2 py-2">
                  <label
                    htmlFor="last-name"
                    className="block lg:inline-block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="w-full px-2 py-2 md:w-3/4">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="w-full px-2 py-2 md:w-3/4">
                <label
                  htmlFor="subject-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject-address"
                  id="subject-address"
                  autoComplete="subject"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="w-full px-2 py-2">
                <label
                  htmlFor="description-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  rows={3}
                  name="description-address"
                  id="description-address"
                  autoComplete="description"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="px-2 py-4 bg-gray-50 text-right">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactFormComponent
