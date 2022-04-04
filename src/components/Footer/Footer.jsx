import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="p-2 text-center  w-full  shadow md:flex md:items-center md:justify-between md:p-6 bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022 Rotten Potatoes™. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link to="/reviews" className="mr-4 hover:underline md:mr-6 ">
            Top Reviews
          </Link>
        </li>
        <li>
          <Link to="/privacypolicy" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link to="/blogs" className="mr-4 hover:underline md:mr-6">
            Blogs
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
