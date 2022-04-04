import React from "react";
import poster from "../../images/poster-1.jpg";
const Header = () => {
  return (
    <header className=" flex flex-col-reverse p-2   bg-purple-300 md:flex-row   items-center justify-center  ">
      <div className="left-side space-y-2 p-3 text-center md:text-left md:w-2/4  ">
        <h1 className='text-3xl font-bold font-serif ' >Mad Max: Fury Road</h1>
        <h3 className='text-xl font- font-semibold text-gray-900' >2015 ‧ Action/Adventure</h3>
        <p className=' text-base text-gray-800 ' >
          In a post-apocalyptic wasteland, Max, a drifter and survivor,
          unwillingly joins Imperator Furiosa, a rebel warrior, in a quest to
          overthrow a tyrant who controls the land's water supply.
        </p>
        <a
        target='_blank'
        rel="noreferrer"
        href="https://www.youtube.com/watch?v=hEJnMQG9ev8"
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg md:text-sm px-5 py-2.5  text-xl mr-2 mb-2"
        >
          Watch Trailer Now
        </a>
      </div>

      <div className="right-side md:w-2/4 ">
        <img className=" shadow-lg rounded-lg w-auto md:h-96 mx-auto " src={poster} alt="" />
      </div>
    </header>
  );
};

export default Header;
