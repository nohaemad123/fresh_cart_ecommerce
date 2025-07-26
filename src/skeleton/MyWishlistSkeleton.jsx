import React from "react";

export default function MyWishlistSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      {[...Array(4)].map((_, idx) => (
        <div
          key={idx}
          className="flex gap-4 items-center py-4 border-b border-gray-100"
        >
          {/* Product image skeleton */}
          <div className="h-20 w-20 bg-gray-200 rounded" />
          {/* Product info skeleton */}
          <div className="flex-1 space-y-2">
            <div className="h-5 w-1/2 bg-gray-200 rounded" />
            <div className="h-4 w-1/3 bg-gray-100 rounded" />
            <div className="h-4 w-1/4 bg-gray-100 rounded" />
          </div>
          {/* Action button skeleton */}
          <div className="h-8 w-16 bg-gray-100 rounded" />
        </div>
      ))}
    </div>
  );
}
