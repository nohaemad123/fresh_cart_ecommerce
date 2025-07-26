import React from "react";

export default function SidebarSearchSkeleton() {
  return (
    <div className="bg-white rounded-md p-4 space-y-6 animate-pulse">
      {/* Filter Title Skeleton */}
      <div className="h-6 w-32 bg-gray-200 rounded mb-2" />
      {/* Category Filter Skeleton */}
      <div>
        <div className="h-5 w-24 bg-gray-100 rounded mb-2" />
        {[...Array(5)].map((_, idx) => (
          <div key={idx} className="h-4 w-3/4 bg-gray-100 rounded mb-2" />
        ))}
      </div>
      {/* Brand Filter Skeleton */}
      <div>
        <div className="h-5 w-24 bg-gray-100 rounded mb-2" />
        {[...Array(5)].map((_, idx) => (
          <div key={idx} className="h-4 w-2/3 bg-gray-100 rounded mb-2" />
        ))}
      </div>
      {/* Price Filter Skeleton */}
      <div>
        <div className="h-5 w-24 bg-gray-100 rounded mb-2" />
        <div className="flex gap-2">
          <div className="h-4 w-12 bg-gray-100 rounded" />
          <div className="h-4 w-12 bg-gray-100 rounded" />
        </div>
      </div>
      {/* Button Skeleton */}
      <div className="h-10 w-full bg-gray-200 rounded mt-4" />
    </div>
  );
}
