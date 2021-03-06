import React from "react";
import { Link } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import Header from "../Header/Header";
import ReviewCard from "../Review_Card/ReviewCard";

const Homepage = () => {
  const [reviews, setReviews] = useReviews();
  // console.log(reviews);

  return (
    <div>
      <Header />
      {/* movie review section  */}
      <div className=" text-center  border-2 bg-teal-100  border-red-400 p-3 rounded-lg shadow-2xl my-7 ">
        <h2 className="text-2xl font-semibold  ">
          {" "}
          Top Reviews{" "}
        </h2>
        <div className=" mb-3 grid  sm:grid-cols-2  xl:grid-cols-4  md:grid-cols-3 md:w-4/5 md:mx-auto ">
          {reviews.slice(0, 3).map((review) => (
            // console.log(review.name)

            <ReviewCard key={review.id} review={review} />
          ))}

        </div>
        <Link to='/reviews' className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium mb-3 rounded-lg md:text-sm px-5 py-2.5  text-xl mr-2 ">More Reviews</Link>
      </div>
    </div>
  );
};

export default Homepage;
