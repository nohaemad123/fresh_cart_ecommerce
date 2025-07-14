import React from "react";
import ProductRating from "../product_rating/ProductRating";

export default function ReviewsTab({ ratingsAverage, ratingsQuantity }) {
  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-lg font-semibold">Customer reviews</h3>
        <button className="bg-primary-600 text-white cursor-pointer px-3 py-2 text-sm font-semibold rounded-md">
          Write a review
        </button>
      </div>
      <div className="mb-5">
        <div className="flex justify-between items-center mb-2">
          <div className="flex gap-x-3">
            <ProductRating rating={ratingsAverage} />
            <span className="font-medium">{ratingsAverage} out of 5</span>
          </div>
        </div>
        <p>Based on {ratingsQuantity} reviews</p>
      </div>
      <div className="mb-5">
        <div className="flex justify-between items-center mb-2">
          <div className="flex gap-x-3">
            <ProductRating rating={5} />
            <span className="font-medium">John D.</span>
          </div>
          <span>2 days ago</span>
        </div>
        <p>
          "Absolutely delicious! the strawberries were fresh, sweet, and
          perfectly ripe. the definitly order again"
        </p>
      </div>
      <div>
        <div className="flex justify-between items-center mb-2">
          <div className="flex gap-x-3">
            <ProductRating rating={4} />
            <span className="font-medium">Sarah m.</span>
          </div>
          <span>1 week ago</span>
        </div>
        <p>
          "Great quality organic strawberries. they latest longer than expected
          in the fridge"
        </p>
      </div>
    </>
  );
}
