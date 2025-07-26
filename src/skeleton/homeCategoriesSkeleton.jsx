import React from "react";

export default function HomeCategoriesSkeleton() {
  return (
    <div className="py-10 animate-pulse bg-mainColor">
      <div className="container">
        {/* Header skeleton */}
        <div className="h-8 w-40 bg-gray-200 rounded mb-8 mx-auto" />
        {/* Categories skeleton grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[...Array(6)].map((_, idx) => (
            <div
              key={idx}
              className="flex bg-white flex-col items-center space-y-3"
            >
              <div className="h-20 w-20 bg-gray-300 rounded-full" />
              <div className="h-4 w-16 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
