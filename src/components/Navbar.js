import React, { useState } from 'react';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isClientPortalOpen, setIsClientPortalOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsClientPortalOpen(false);
    setIsAboutOpen(false);
  };

  const toggleClientPortalDropdown = () => {
    setIsClientPortalOpen(!isClientPortalOpen);
    setIsServicesOpen(false);
    setIsAboutOpen(false);
  };

  const toggleAboutDropdown = () => {
    setIsAboutOpen(!isAboutOpen);
    setIsServicesOpen(false);
    setIsClientPortalOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-green-700 p-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-white">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo on the left */}
          <div className="flex items-center">
            <img
              className="h-32 w-auto sm:h-[250px] sm:p-5"
              src="/images/ideal.png"
              alt="Logo"
            />
          </div>

          {/* Center content */}
          <div className="flex-1 flex items-center justify-center sm:justify-center">
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                <a
                  href="#services"
                  className="text-xl  font-semibold text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm"
                >
                  Services
                </a>

                <div className="relative">
                  <button
                    onClick={toggleServicesDropdown}
                    className="text-xl  font-semibold text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  >
                    Services areas
                    <svg
                      className={`ml-2 h-5 w-5 transform transition-transform ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {isServicesOpen && (
                    <div className="origin-top-right absolute left-1 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                      <a
                        href="#option1"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Dc Colony
                      </a>
                      <a
                        href="#option2"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Model Town
                      </a>
                      <a
                        href="#option3"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Ghakkhar
                      </a>
                      <a
                        href="#option3"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Satellite Town
                      </a>
                    </div>
                  )}
                </div>

              <div className="relative">
                  <button
                    onClick={toggleClientPortalDropdown}
                    className="text-xl  font-semibold text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  >
                    Client Portal
                    <svg
                      className={`ml-2 h-5 w-5 transform transition-transform ${
                        isClientPortalOpen ? 'rotate-180' : ''
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {isClientPortalOpen && (
                    <div className="origin-top-right absolute left-1 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                      <a
                        href="#option1"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Register
                      </a>
                      <a
                        href="#option2"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Log in
                      </a>
                      <a
                        href="#option3"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Book Now
                      </a>
                    </div>
                  )}
                </div>
                
                <div className="relative">
                  <button
                    onClick={toggleAboutDropdown}
                    className="text-xl  font-semibold text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  >
                    About
                    <svg
                      className={`ml-2 h-5 w-5 transform transition-transform ${
                        isAboutOpen ? 'rotate-180' : ''
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {isAboutOpen && (
                    <div className="origin-top-right absolute left-1 right-0 mt-2 w-40 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                      <a
                        href="#option1"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        FAQs
                      </a>
                      <a
                        href="#option2"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Blog
                      </a>
                      <a
                        href="#option3"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Mission
                      </a>
                    </div>
                  )}
                </div>

               
              </div>
            </div>
          </div>

          {/* Contact info on the right */}
          <div className="hidden sm:block">
            <a
              href="tel:(415)633-6225"
              className="text-xl  font-semibold text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              (+92) 317-7190178
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#services"
            className="text-xl  font-semibold text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </a>

          <div className="relative">
            <button
              onClick={toggleServicesDropdown}
              className="text-xl  font-semibold text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
            >
              Services areas
              <svg
                className={`ml-2 h-5 w-5 transform transition-transform ${
                  isServicesOpen ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isServicesOpen && (
              <div className="origin-top-right absolute right-[-10px] mt-2 w-40 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                <a
                  href="#option1"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Dc Colony
                </a>
                <a
                  href="#option2"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Model Town
                </a>
                <a
                  href="#option3"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Ghakkhar
                </a>
                <a
                  href="#option3"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Satellite Town
                </a>
              </div>
            )}
          </div>

    <div className="relative">
            <button
              onClick={toggleClientPortalDropdown}
              className="text-xl  font-semibold text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
            >
              Client Portal
              <svg
                className={`ml-2 h-5 w-5 transform transition-transform ${
                  isClientPortalOpen ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isClientPortalOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                <a
                  href="#option1"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Register
                </a>
                <a
                  href="#option2"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Log in
                </a>
                <a
                  href="#option3"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Book Now
                </a>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={toggleAboutDropdown}
              className="text-xl  font-semibold text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
            >
              About
              <svg
                className={`ml-2 h-5 w-5 transform transition-transform ${
                  isAboutOpen ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isAboutOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                <a
                  href="#option1"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  FAQs
                </a>
                <a
                  href="#option2"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Blog
                </a>
                <a
                  href="#option3"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Mission
                </a>
              </div>
            )}
          </div>

          

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
