import React from "react";

const Blogs = () => {
  return (
    <div className=" my-10 p-3 md:w-4/5 md:mx-auto  ">
      <div className="shadow-lg rounded-lg p-2 ">
        <h1 className=" text-2xl text-center font-bold underline   p-3 ">
          {" "}
          What is Semantic Tag{" "}
        </h1>
        <p className=" text-gray-900 ">
          {" "}
          Semantic ট্যাগ HTML 5 এ নতুন এসেছে, Semantic ট্যাগ ব্যাবহার করার কারন
          হলো , আমরা ডেভেলোপাররা যারা কোড লিখি তারা খুব যেন খুব সহজেই বুঝতে পারি
          কোন ট্যাগ কোন কাজের জন্য ব্যাবহার করা হচ্ছে । Semantic ট্যাগ বর্তমানে
          সব ব্রাউজারেই সাপোর্ট। Semantic ট্যাগ ব্যাবহারের সবচেয়ে বড় কারন হলো
          যেন সার্চ ইঞ্জিন খুব সহজেই ওয়েবসাইটকে খুজে পাই, এবং গুগলে দেখাতে পারে
          । কিছু Semantic ট্যাগ হলোঃ Header, Footer, Article, aside, Main, Nav,
          Section .{" "}
        </p>
      </div>
      <div className=" shadow-2xl rounded-lg mt-5 p-2 ">
        <h1 className=" text-2xl text-center font-bold underline  p-3 ">
          {" "}
          What is the purpose of Context API{" "}
        </h1>
        <p className=" text-gray-900 ">
          {" "}
          React এ আমরা যদি কোন component থেকে অন্য component এ props দিয়ে ডাটা
          পাঠাতে চাই, এবং যাকে ডাটা পাঠাতে চাই সে যদি অনেক নিচে থাকে তাহলে আগে
          তার parent কে ডাটা পাঠাতে হবে এবং তারপর সেই component টি ডাটা পাবে।
          যাকে সংক্ষেপে props drilling বলে । কিন্তু Context API আমাদের কাজকে
          অনেক সহজ করে দিয়েছে। Context API বানানোর নিয়ম হচ্ছে const UserContext
          = createContext(); এবং আমরা যাকে ডাটা পাঠাতে চাই তাকে
          UserContext.Provider এর ভিতরে রাখতে হবে, যে ডাটা পাঠাবে তাকে Provider
          বলে এবং যে ডাটা রিসিভ করবে তাকে Consumer বলে।
        </p>
      </div>
    </div>
  );
};

export default Blogs;
