// Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
// import logo from '..public/vite.svg'. public no need to import

function Navbar() {
  return (
    <nav className="bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* Your logo or brand icon here */}
              <img className="h-8 w-auto" src="./vite.svg" alt="Your logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* Navigation links */}
                <NavLink
                  to="/6th-Multipageawebsite-using_Tailwind/"
                  className={({ isActive }) =>
                    ` ${
                      isActive ? "text-orange-700" : "text-gray-300"
                    } hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/6th-Multipageawebsite-using_Tailwind/about"
                  className={({ isActive }) =>
                    ` ${
                      isActive ? "text-orange-700" : "text-gray-300"
                    } hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/6th-Multipageawebsite-using_Tailwind/services"
                  className={({ isActive }) =>
                    ` ${
                      isActive ? "text-orange-700" : "text-gray-300"
                    } hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`
                  }
                >
                  Services
                </NavLink>
                <NavLink
                  to="/6th-Multipageawebsite-using_Tailwind/contact"
                  className={({ isActive }) =>
                    ` ${
                      isActive ? "text-orange-700" : "text-gray-300"
                    } hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`
                  }
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {/* Add your account or profile dropdown here */}
              <button
                className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                aria-label="Notifications"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* Your notification icon */}
                </svg>
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {/* Heroicon name: menu */}
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
              {/* Icon when menu is open */}
              {/* Heroicon name: x */}
              <svg
                className="hidden h-6 w-6"
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
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle classes based on menu state */}
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* Navigation links */}
          <NavLink
            to="/6th-Multipageawebsite-using_Tailwind/"
            className={({ isActive }) =>
              ` ${
                isActive ? "text-orange-700" : "text-gray-300"
              } hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/6th-Multipageawebsite-using_Tailwind/about"
            className={({ isActive }) =>
              ` ${
                isActive ? "text-orange-700" : "text-gray-300"
              } hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/6th-Multipageawebsite-using_Tailwind/services"
            className={({ isActive }) =>
              ` ${
                isActive ? "text-orange-700" : "text-gray-300"
              } hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/6th-Multipageawebsite-using_Tailwind/contact"
            className={({ isActive }) =>
              ` ${
                isActive ? "text-orange-700" : "text-gray-300"
              } hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
