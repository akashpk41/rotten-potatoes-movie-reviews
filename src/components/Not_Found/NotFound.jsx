import React from "react";
import errorImg from "../../images/page-not-found.png";
const NotFound = () => {
  return (
    <div className="flex mx-3 md:w-4/5 md:mx-auto md:p-5  shadow-2xl rounded-sm my-10 flex-col-reverse md:flex-row items-center justify-center ">
      <div className="left-side p-2    ">
        <h1 className=" text-2xl text-red-600 ">
          {" "}
          Sorry !  The page you request was not found{" "}
        </h1>
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
