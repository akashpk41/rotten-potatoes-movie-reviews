import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../../images/page-not-found.png";
const NotFound = () => {
  return (
    <div className="flex mx-3 md:w-4/5 md:mx-auto md:p-5  shadow-2xl rounded-sm my-10 flex-col-reverse md:flex-row items-center justify-center ">
      <div className="left-side p-5    ">
        <h1 className=" mb-8 text-2xl text-red-600 ">
          {" "}
          Sorry !  The page you request was not found{" "}
        </h1>
        <Link to='/home' className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg md:text-sm px-5 py-2.5  text-xl mt-5"  > Go to Home </Link>
      </div>
      <div className="right-side  ">
        <img
          className=" rounded-sm my-3 w-96 "
          src={errorImg}
          alt="Page Not Found"
        />
      </div>
    </div>
  );
};

export default NotFound;
