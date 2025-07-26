import React from "react";

export default function FeaturedBrandsSkeleton() {
  return (
    <div className="">
      {/* Section Title Skeleton */}
      <div className="h-8 w-56 bg-gray-200 rounded mb-6 mt-2 animate-pulse" />
      {/* Brands Grid Skeleton */}
      <div className="grid lg:grid-cols-3 gap-x-10 gap-y-5 mt-5">
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="rounded-md">
            <div className="bg-white p-6 rounded-md flex flex-col items-center space-y-4 shadow animate-pulse">
              <div className="h-20 w-20 bg-gray-200 rounded-full" />
              <div className="h-6 w-24 bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
