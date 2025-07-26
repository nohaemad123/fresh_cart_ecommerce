import React from "react";

export default function SeasonalCategoriesSkeleton() {
  return (
    <div className="container my-10 animate-pulse">
      {/* Section Title Skeleton */}
      <div className="h-8 w-56 bg-gray-200 rounded mb-6" />
      {/* Seasonal Categories Grid Skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[...Array(4)].map((_, idx) => (
          <div
            key={idx}
            className="bg-white rounded-md flex flex-col items-center p-6 shadow space-y-4"
          >
            <div className="h-20 w-20 bg-gray-200 rounded-full" />
            <div className="h-6 w-24 bg-gray-200 rounded" />
            <div className="h-4 w-16 bg-gray-100 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
