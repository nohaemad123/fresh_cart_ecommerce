import React from "react";

export default function ProductInfoSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto p-6">
      {/* Image Gallery Skeleton */}
      <div className="md:col-span-1">
        <div className="bg-gray-200 h-96 w-full rounded-lg mb-4" />
        <div className="flex gap-2">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="h-16 w-16 bg-gray-100 rounded" />
          ))}
        </div>
      </div>

      {/* Product Info Skeleton */}
      <div className="md:col-span-2">
        <div className="flex flex-col gap-4">
          {/* Title */}
          <div className="h-8 w-2/3 bg-gray-200 rounded" />
          {/* Category */}
          <div className="h-5 w-1/4 bg-gray-100 rounded" />
          {/* Rating */}
          <div className="h-5 w-1/3 bg-gray-100 rounded" />
          {/* Price */}
          <div className="h-7 w-1/4 bg-gray-200 rounded" />
          {/* Discount */}
          <div className="h-5 w-20 bg-gray-100 rounded" />
          {/* Description */}
          <div className="h-4 w-full bg-gray-100 rounded" />
          <div className="h-4 w-5/6 bg-gray-100 rounded" />
          <div className="h-4 w-2/3 bg-gray-100 rounded" />
          {/* Actions */}
          <div className="flex gap-3 mt-6">
            <div className="h-12 w-32 bg-gray-300 rounded" />
            <div className="h-12 w-12 bg-gray-200 rounded-full" />
            <div className="h-12 w-12 bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
