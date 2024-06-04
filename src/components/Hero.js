  import React, { useState } from 'react';

  function Hero() {
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
      <div className="relative">
        <nav className="absolute top-2 left-0 w-full bg-opacity-50 text-white z-10">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="block  h-32 w-auto"
                    src="/images/ideal.png"
                    alt=""
                  />
                  
                </div>

                <div className="hidden  sm:block sm:ml-6">
                  <div className="flex space-x-4 ">
                    <a
                      href="home"
                      className="text-2xl font-bold text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Services
                    </a>

                    <div className="relative">
                      <button
                        onClick={toggleServicesDropdown}
                        className="text-2xl font-bold text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                      >
                        Services areas
                        <svg
                          className="ml-2 h-5 w-5"
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
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {isServicesOpen && (
                        <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
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
                            href="#option4"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Satellite Town
                          </a>
                        </div>
                      )}
                    </div>

                  <div className="relative">
                      <button
                        onClick={toggleAboutDropdown}
                        className="text-2xl font-bold text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                      >
                        About
                        <svg
                          className="ml-2 h-5 w-5"
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
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {isAboutOpen && (
                        <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                          <a
                            href="#faqs"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            FAQs
                          </a>
                          <a
                            href="#blog"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Blog
                          </a>
                          <a
                            href="#mission"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Mission
                          </a>
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <button
                        onClick={toggleClientPortalDropdown}
                        className="text-2xl font-bold text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                      >
                        Client Portal
                        <svg
                          className="ml-2 h-5 w-5"
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
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {isClientPortalOpen && (
                        <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                          <a
                            href="#login"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                          >
                            Login
                          </a>
                          <a
                            href="#register"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                          >
                            Register
                          </a>
                          <a
                            href="#book"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                          >
                            Book Now
                          </a>
                        </div>
                      )}
                    </div>

                

                  </div>
                </div>
              </div>
              <div className="hidden sm:block mt-3 bg-[#FF0000] p-3">
                <a
                  href="tel:(415)633-6225"
                  className="button-4 w-button text-2xl font-bold text-gray-300 hover:text-white px-3 py-2 rounded-md"
                >
                  (415) 633-6225
                </a>
              </div>
              <div className="sm:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md"
                >
                  <svg
                    className="h-6 w-6"
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
                </button>
              </div>
            </div>
          </div>
          
          {isMobileMenuOpen && (
            <div className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="home"
                  className="text-2xl font-bold text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                </a>
                <div className="relative">
                  <button
                    onClick={toggleServicesDropdown}
                    className="text-2xl font-bold text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center"
                  >
                    Services areas
                    <svg
                      className="ml-2 h-5 w-5"
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
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isServicesOpen && (
                    <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
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
                        href="#option4"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Satellite Town
                      </a>
                    </div>
                  )}
                </div>

              <div className="relative">
                  <button
                    onClick={toggleAboutDropdown}
                    className="text-2xl font-bold text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center"
                  >
                    About
                    <svg
                      className="ml-2 h-5 w-5"
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
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isAboutOpen && (
                    <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                      <a
                        href="#faqs"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        FAQs
                      </a>
                      <a
                        href="#blog"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Blog
                      </a>
                      <a
                        href="#mission"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Mission
                      </a>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <button
                    onClick={toggleClientPortalDropdown}
                    className="text-2xl font-bold text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center"
                  >
                    Client Portal
                    <svg
                      className="ml-2 h-5 w-5"
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
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isClientPortalOpen && (
                    <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                      <a
                        href="#login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      >
                        Login
                      </a>
                      <a
                        href="#register"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      >
                        Register
                      </a>
                      <a
                        href="#book"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      >
                        Book Now
                      </a>
                    </div>
                  )}
                </div>

                

              </div>
            </div>
          )}
        </nav>
        <div
    className="relative w-full h-screen"
    style={{
      backgroundImage:
        "linear-gradient(to right, rgba(33, 82, 78, 0.89) 15%, rgba(33, 82, 78, 0) 70%), url('/images/headerimg.jpeg')",
      backgroundSize: 'cover',
      backgroundPosition: 'top', // Adjusted background position
    }}
  >
    {/* Add any additional content here */}
  </div>
      </div>
    );
  }

  export default Hero;
