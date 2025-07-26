import React from "react";

export default function RelatedProductsSkeleton() {
  return (
    <div className="my-10">
      {/* Header skeleton */}
      <div className="h-8 w-48 bg-gray-200 rounded mb-8" />
      {/* Related products grid skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow p-4 animate-pulse flex flex-col gap-4"
          >
            <div className="h-40 w-full bg-gray-200 rounded" />
            <div className="h-5 w-3/4 bg-gray-200 rounded" />
            <div className="h-4 w-1/2 bg-gray-100 rounded" />
            <div className="h-6 w-1/3 bg-gray-300 rounded mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
