import React from "react";

export default function ViewedProductsSkeleton() {
  return (
    <div className="container my-10 animate-pulse">
      {/* Header skeleton */}
      <div className="h-7 w-48 bg-gray-200 rounded mb-6" />
      {/* Viewed products grid skeleton */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow p-3 flex flex-col gap-3"
          >
            <div className="h-28 w-full bg-gray-200 rounded" />
            <div className="h-4 w-3/4 bg-gray-200 rounded" />
            <div className="h-4 w-1/2 bg-gray-100 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
