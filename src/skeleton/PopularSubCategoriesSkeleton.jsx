import React from "react";

export default function PopularSubcategoriesSkeleton() {
  return (
    <div className="py-10 animate-pulse">
      <div className="container">
        {/* Title Skeleton */}
        <div className="h-8 w-64 bg-gray-300 rounded mb-5"></div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {[...Array(6)].map((_, idx) => (
            <div
              key={idx}
              className="bg-gray-200 p-5 rounded-md flex flex-col justify-center items-center space-y-4 h-40 w-full"
            >
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div className="h-5 w-24 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
