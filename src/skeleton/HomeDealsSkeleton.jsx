import React from "react";
import ProductCardSkeleton from "./ProductCardSkeleton";

export default function HomeDealsSkeleton() {
  // This component is already a skeleton loader for the Home Deals section.
  // To clarify its purpose, let's add a comment and ensure all elements are placeholders.

  return (
    <div className="py-10 animate-pulse">
      <div className="container">
        {/* Header skeleton */}
        <div className="flex flex-col space-y-2 lg:flex-row justify-between items-center text-center">
          <div className="h-8 w-40 bg-gray-200 rounded" />
          <div className="flex items-center text-center">
            <div className="h-6 w-32 bg-gray-200 rounded" />
          </div>
        </div>
        {/* Countdown skeleton */}
        <div className="flex gap-2 mb-5 mt-5 items-center">
          <div className="h-5 w-24 bg-gray-200 rounded" />
          <div className="counter flex gap-3">
            <div className="size-8 bg-gray-300 rounded" />
            <span className="text-gray-300">:</span>
            <div className="size-8 bg-gray-300 rounded" />
            <span className="text-gray-300">:</span>
            <div className="size-8 bg-gray-300 rounded" />
          </div>
        </div>
        {/* Product cards skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, idx) => (
            <ProductCardSkeleton key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
