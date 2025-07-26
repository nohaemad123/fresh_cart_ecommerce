import React from "react";

export default function DashboardSkeleton() {
  return (
    <>
      {/* Hero Section Skeleton */}
      <div
        style={{
          backgroundSize: "cover",
          width: "100%",
          backgroundPosition: "center center",
        }}
        className="rounded-lg animate-pulse"
      >
        <div className="overlay rounded-lg py-10">
          <div className="container flex flex-col space-y-4">
            <div className="h-8 w-72 bg-gray-200 rounded mb-2" />
            <div className="h-6 w-80 bg-gray-100 rounded mb-2" />
            <div className="flex gap-4">
              <div className="h-10 w-32 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Cards Skeleton */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5 animate-pulse">
        <div className="bg-primary-100 p-5 rounded-lg">
          <div className="flex justify-between items-center mb-3">
            <div className="h-6 w-32 bg-gray-200 rounded" />
            <div className="h-8 w-8 bg-gray-200 rounded-full" />
          </div>
          <div className="h-6 w-12 bg-gray-100 rounded" />
        </div>
        <div className="bg-red-100 p-5 rounded-lg">
          <div className="flex justify-between items-center mb-3">
            <div className="h-6 w-32 bg-gray-200 rounded" />
            <div className="h-8 w-8 bg-gray-200 rounded-full" />
          </div>
          <div className="h-6 w-12 bg-gray-100 rounded" />
        </div>
        <div className="bg-blue-100 p-5 rounded-lg">
          <div className="flex justify-between items-center mb-3">
            <div className="h-6 w-32 bg-gray-200 rounded" />
            <div className="h-8 w-8 bg-gray-200 rounded-full" />
          </div>
          <div className="h-6 w-12 bg-gray-100 rounded" />
        </div>
        <div className="bg-yellow-100 p-5 rounded-lg">
          <div className="flex justify-between items-center mb-3">
            <div className="h-6 w-32 bg-gray-200 rounded" />
            <div className="h-8 w-8 bg-gray-200 rounded-full" />
          </div>
          <div className="h-6 w-12 bg-gray-100 rounded" />
        </div>
      </div>
    </>
  );
}
