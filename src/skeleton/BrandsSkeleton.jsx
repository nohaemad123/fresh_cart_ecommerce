import React from "react";

export default function BrandsSkeleton() {
  return (
    <>
      {/* Breadcrumb Skeleton */}
      <div className="container mt-6">
        <div className="h-6 w-48 bg-gray-200 rounded mb-6 animate-pulse" />
      </div>
      {/* Title & Description Skeleton */}
      <div className="py-5 animate-pulse">
        <div className="container">
          <div className="text-center flex flex-col space-y-3">
            <div className="h-10 w-72 bg-gray-200 rounded mx-auto" />
            <div className="h-5 w-2/3 bg-gray-100 rounded mx-auto" />
          </div>
        </div>
      </div>
      {/* Featured Brands Skeleton */}
      <div className="py-10 bg-mainColor animate-pulse">
        <div className="container">
          <div className="h-8 w-56 bg-gray-200 rounded mb-6 mt-2" />
          <div className="grid lg:grid-cols-3 gap-x-10 gap-y-5 mt-5">
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="rounded-md">
                <div className="bg-white p-6 rounded-md flex flex-col items-center space-y-4 shadow">
                  <div className="h-20 w-20 bg-gray-200 rounded-full" />
                  <div className="h-6 w-24 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Search, Sort, and Brands Grid Skeleton */}
      <div className="py-10 bg-mainColor animate-pulse">
        <div className="container">
          <div className="flex justify-between items-center mb-10">
            <div className="h-12 w-72 bg-gray-200 rounded" />
            <div className="flex items-center gap-x-4">
              <div className="h-6 w-20 bg-gray-200 rounded" />
              <div className="h-10 w-32 bg-gray-100 rounded" />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-10">
            {[...Array(8)].map((_, idx) => (
              <div
                key={idx}
                className="bg-white rounded-md flex flex-col items-center p-6 shadow space-y-4"
              >
                <div className="h-20 w-20 bg-gray-200 rounded-full" />
                <div className="h-6 w-24 bg-gray-200 rounded" />
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
      {/* Brand Partner Skeleton */}
      <div className="container my-10 animate-pulse">
        <div className="h-8 w-56 bg-gray-200 rounded mb-6" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="h-24 bg-gray-100 rounded" />
          ))}
        </div>
      </div>
    </>
  );
}
