import React from "react";

export default function ProductTabsSkeleton() {
  return (
    <div className="bg-white rounded-lg my-10 animate-pulse">
      {/* Tabs Skeleton */}
      <div className="border-b border-gray-200">
        <div className="flex">
          <div className="px-6 py-4">
            <div className="h-6 w-24 bg-gray-200 rounded" />
          </div>
          <div className="px-6 py-4">
            <div className="h-6 w-28 bg-gray-200 rounded" />
          </div>
          <div className="px-6 py-4">
            <div className="h-6 w-36 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
      {/* Tab Content Skeleton */}
      <div className="p-6 space-y-4">
        <div className="h-4 w-3/4 bg-gray-100 rounded" />
        <div className="h-4 w-2/3 bg-gray-100 rounded" />
        <div className="h-4 w-1/2 bg-gray-100 rounded" />
        <div className="h-4 w-full bg-gray-100 rounded" />
        <div className="h-4 w-5/6 bg-gray-100 rounded" />
      </div>
    </div>
  );
}
