import React from "react";
import {  StarIcon } from '@heroicons/react/solid'

const ReviewCard = ({ review }) => {
  const { name, comment,image,rating } = review;
  // console.log(review);

  return (
    <div class="max-w-sm my-4 md:my-10 p-3 mx-2 bg-white rounded-lg border border-gray-200 shadow-2xl ">
      <div class="flex flex-col items-center pb-10">
        <img
          class="mb-3 w-24 h-24 rounded-full shadow-lg"
          src={image}
          alt=""
        />
        <h5 class="mb-1 text-xl font-medium text-gray-900 ">
         {name}
        </h5>
        <h5 class="mb-1 text-base flex font-medium text-gray-900 ">
        Ratings : {rating}  <StarIcon className="h-5 ml-1 mt-1 w-5 text-yellow-500"/>
        </h5>
        <span class="text-sm text-gray-600 ">
         {comment.slice(0,200) +'...'  }
        </span>

      </div>
    </div>
  );
};

export default ReviewCard;
