import React from "react";

export default function SearchProductsSkeleton() {
  return (
    <>
      {/* Breadcrumb Skeleton */}
      <div className="container">
        <div className="h-6 w-48 bg-gray-200 rounded mb-6 mt-6 animate-pulse" />
      </div>
      <div className="bg-mainColor py-10 animate-pulse">
        <div className="container">
          {/* Title Skeleton */}
          <div className="h-8 w-80 bg-gray-200 rounded mb-4" />
          <div className="h-5 w-56 bg-gray-100 rounded mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-12 mb-2 gap-x-10 mt-5">
            {/* Sidebar Skeleton */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-md p-4 space-y-6 animate-pulse">
                {/* Filter Title Skeleton */}
                <div className="h-6 w-32 bg-gray-200 rounded mb-2" />
                {/* Category Filter Skeleton */}
                <div>
                  <div className="h-5 w-24 bg-gray-100 rounded mb-2" />
                  {[...Array(5)].map((_, idx) => (
                    <div
                      key={idx}
                      className="h-4 w-3/4 bg-gray-100 rounded mb-2"
                    />
                  ))}
                </div>
                {/* Brand Filter Skeleton */}
                <div>
                  <div className="h-5 w-24 bg-gray-100 rounded mb-2" />
                  {[...Array(5)].map((_, idx) => (
                    <div
                      key={idx}
                      className="h-4 w-2/3 bg-gray-100 rounded mb-2"
                    />
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
            </div>
            {/* Products Skeleton */}
            <div className="md:col-span-9">
              {/* Filter/Sort Skeleton */}
              <div className="bg-white p-5 rounded-md mb-8">
                <div className="flex flex-col space-y-4 lg:flex-row justify-between items-center">
                  <div className="flex items-center gap-x-3">
                    <div className="h-6 w-20 bg-gray-200 rounded" />
                    <div className="h-10 w-10 bg-gray-100 rounded-md" />
                    <div className="h-10 w-10 bg-gray-100 rounded-md" />
                  </div>
                  <div className="flex items-center gap-x-3">
                    <div className="h-6 w-20 bg-gray-200 rounded" />
                    <div className="h-10 w-32 bg-gray-100 rounded" />
                  </div>
                </div>
              </div>
              {/* Products Grid Skeleton */}
              <div className="grid lg:grid-cols-3 gap-10 mt-10">
                {[...Array(9)].map((_, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow p-4 flex flex-col gap-4"
                  >
                    <div className="h-40 w-full bg-gray-200 rounded" />
                    <div className="h-5 w-3/4 bg-gray-200 rounded" />
                    <div className="h-4 w-1/2 bg-gray-100 rounded" />
                    <div className="h-6 w-1/3 bg-gray-300 rounded mt-2" />
                  </div>
                ))}
              </div>
              {/* Pagination Skeleton */}
              <div className="flex justify-center items-center mt-10">
                <ul className="flex gap-x-3">
                  <li className="size-7 bg-gray-200 rounded flex justify-center items-center" />
                  {[...Array(3)].map((_, idx) => (
                    <li
                      key={idx}
                      className="size-7 bg-gray-100 rounded flex justify-center items-center"
                    />
                  ))}
                  <li className="size-7 bg-gray-200 rounded flex justify-center items-center" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
