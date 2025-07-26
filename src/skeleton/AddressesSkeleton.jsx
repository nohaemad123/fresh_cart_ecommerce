import React from "react";

export default function AddressesSkeleton() {
  return (
    <>
      {/* Header Skeleton */}
      <div className="flex justify-between items-center animate-pulse">
        <div className="h-7 w-40 bg-gray-200 rounded" />
        <div className="h-9 w-36 bg-gray-200 rounded" />
      </div>
      {/* Empty state skeleton (optional) */}
      {/* <div className="h-32 w-full bg-gray-100 rounded mt-8" /> */}
      {/* Addresses Grid Skeleton */}
      <div className="grid lg:grid-cols-2 mt-5 gap-10 animate-pulse">
        {[...Array(2)].map((_, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow p-6 flex flex-col gap-4"
          >
            <div className="h-6 w-32 bg-gray-200 rounded mb-2" />
            <div className="h-4 w-2/3 bg-gray-100 rounded" />
            <div className="h-4 w-1/2 bg-gray-100 rounded" />
            <div className="h-4 w-1/3 bg-gray-100 rounded" />
            <div className="flex gap-3 mt-4">
              <div className="h-10 w-24 bg-gray-200 rounded" />
              <div className="h-10 w-24 bg-gray-100 rounded" />
            </div>
          </div>
        ))}
      </div>
      {/* Add Address Form Skeleton (optional, shown when isAction == "add") */}
      {/* <div className="mt-5">
        <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
          <div className="h-6 w-32 bg-gray-200 rounded mb-2" />
          <div className="h-10 w-full bg-gray-100 rounded" />
          <div className="h-10 w-1/2 bg-gray-100 rounded" />
          <div className="h-10 w-1/3 bg-gray-100 rounded" />
          <div className="h-10 w-24 bg-gray-200 rounded self-end" />
        </div>
      </div> */}
    </>
  );
}
