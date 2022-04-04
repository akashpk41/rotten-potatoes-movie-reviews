import React from "react";
import useReviews from "../../hooks/useReviews";
import ReviewCard from "../Review_Card/ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div className=" text-center  border-2 bg-teal-100  border-red-400 p-3 rounded-lg shadow-2xl my-7 ">
      <h2 className="text-2xl font-semibold  "> All Reviews ({reviews.length}) </h2>
      <div className=" mb-3 grid sm:grid-cols-2  xl:grid-cols-4 md:grid-cols-3 md:w-4/5 md:mx-auto ">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
