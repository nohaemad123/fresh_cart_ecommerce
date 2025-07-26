import React from "react";

export default function OrdersSkeleton() {
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
      {/* Orders Table/List Skeleton */}
      <div className="py-10 bg-mainColor animate-pulse">
        <div className="container">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="h-7 w-40 bg-gray-200 rounded mb-6" />
            {/* Table header skeleton */}
            <div className="flex mb-4">
              <div className="h-5 w-24 bg-gray-100 rounded mr-4" />
              <div className="h-5 w-24 bg-gray-100 rounded mr-4" />
              <div className="h-5 w-24 bg-gray-100 rounded mr-4" />
              <div className="h-5 w-24 bg-gray-100 rounded" />
            </div>
            {/* Table rows skeleton */}
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 bg-gray-100 rounded-full" />
                <div className="flex-1">
                  <div className="h-4 w-1/2 bg-gray-200 rounded mb-2" />
                  <div className="h-3 w-1/3 bg-gray-100 rounded" />
                </div>
                <div className="h-8 w-20 bg-gray-200 rounded" />
                <div className="h-8 w-20 bg-gray-100 rounded" />
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
    </>
  );
}
