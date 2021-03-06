import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../Custom_Link/CustomLink";

const Navbar = () => {
  return (
    <nav className="bg-yellow-100 text-center border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl text-violet-900 whitespace-nowrap font-mono font-bold uppercase  ">
            {" "}
            Rotten Potatoes{" "}
          </span>
        </Link>
        <div className="flex md:order-2">
          <button

            type="button"
            className="focus:outline-none hidden md:block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg md:text-sm px-5 py-2.5  text-xl mr-2 mb-2"
          >
            View More
          </button>
          <button
            data-collapse-toggle="mobile-menu-4"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-4"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-4"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <CustomLink
                to="/home"
                className="block py-2 px-2 text-gray-700 border-b border-gray-100"
              >
                Home
              </CustomLink>
            </li>
            <li>
              <CustomLink
                to="/reviews"
                className="block py-2 px-2 text-gray-700 border-b border-gray-100"
              >
                Reviews
              </CustomLink>
            </li>
            <li>
              <CustomLink
                to="/dashboard"
                className="block py-2 px-2 text-gray-700 border-b border-gray-100"
              >
                Dashboard
              </CustomLink>
            </li>
            <li>
              <CustomLink
                to="/blogs"
                className="block py-2 px-2 text-gray-700 border-b border-gray-100"
              >
                Blogs
              </CustomLink>
            </li>
            <li>
              <CustomLink
                to="/about"
               className="block py-2 px-2 text-gray-700 border-b border-gray-100"
              >
                About
              </CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
