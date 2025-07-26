import React from "react";

export default function ProductCardSkeleton() {
  return (
    <div className="product_card bg-white relative shadow-lg rounded-xl overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="bg-gray-200 h-60 w-full" />
      {/* Card info skeleton */}
      <div className="card_info p-4 space-y-3 flex flex-col">
        <div className="h-4 w-1/3 bg-gray-200 rounded" />
        <div className="h-5 w-2/3 bg-gray-200 rounded" />
        <div className="flex gap-x-2">
          <div className="h-4 w-12 bg-gray-200 rounded" />
          <div className="h-4 w-8 bg-gray-200 rounded" />
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="h-6 w-20 bg-gray-300 rounded" />
          <div className="h-9 w-9 bg-gray-300 rounded-full" />
        </div>
      </div>
      {/* Discount badge skeleton */}
      <div className="absolute top-3 left-3 h-6 w-12 bg-gray-300 rounded" />
      {/* Action buttons skeleton */}
      <div className="absolute top-3 right-3 bg-white p-2 flex flex-col space-y-5 shadow-md">
        <div className="h-6 w-6 bg-gray-200 rounded-full" />
        <div className="h-6 w-6 bg-gray-200 rounded-full" />
        <div className="h-6 w-6 bg-gray-200 rounded-full" />
      </div>
    </div>
  );
}
