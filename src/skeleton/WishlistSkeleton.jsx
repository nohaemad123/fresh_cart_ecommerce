import React from "react";

export default function WishlistSkeleton() {
  return (
    <>
      {/* Breadcrumb Skeleton */}
      <div className="container mt-6">
        <div className="h-6 w-48 bg-gray-200 rounded mb-6 animate-pulse" />
      </div>
      <div className="bg-mainColor py-15 animate-pulse">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 mb-2 gap-x-5 items-start">
            {/* Wishlist Items Skeleton */}
            <div className="md:col-span-9 bg-white py-5 rounded-md border border-gray-300/70 w-full inline-block">
              <div className="border-b border-gray-300 pb-5 px-10">
                <div className="h-7 w-40 bg-gray-200 rounded mb-2" />
                <div className="flex flex-col lg:flex-row space-y-2 justify-between items-center">
                  <div className="h-4 w-32 bg-gray-100 rounded mb-2" />
                  <div className="flex gap-x-4">
                    <div className="h-10 w-24 bg-gray-200 rounded" />
                    <div className="h-10 w-32 bg-gray-300 rounded" />
                  </div>
                </div>
              </div>
              <div className="px-10 mt-6 space-y-6">
                {[...Array(4)].map((_, idx) => (
                  <div key={idx} className="flex gap-4 items-center">
                    <div className="h-20 w-20 bg-gray-200 rounded" />
                    <div className="flex-1 space-y-2">
                      <div className="h-5 w-1/2 bg-gray-200 rounded" />
                      <div className="h-4 w-1/3 bg-gray-100 rounded" />
                      <div className="h-4 w-1/4 bg-gray-100 rounded" />
                    </div>
                    <div className="h-8 w-16 bg-gray-100 rounded" />
                  </div>
                ))}
              </div>
            </div>
            {/* Sidebar Skeleton */}
            <div className="md:col-span-3 space-y-5">
              {/* Create new wishlist */}
              <div className="bg-white p-5 rounded-md border border-gray-300/70">
                <div className="h-6 w-40 bg-gray-200 rounded mb-4" />
                <div className="space-y-4">
                  <div className="h-4 w-32 bg-gray-100 rounded" />
                  <div className="h-10 w-full bg-gray-100 rounded" />
                  <div className="h-4 w-20 bg-gray-100 rounded" />
                  <div className="flex gap-4">
                    <div className="h-4 w-16 bg-gray-100 rounded" />
                    <div className="h-4 w-16 bg-gray-100 rounded" />
                  </div>
                  <div className="h-10 w-full bg-gray-200 rounded" />
                </div>
              </div>
              {/* My wishlist list */}
              <div className="bg-white p-5 rounded-md border border-gray-300/70">
                <div className="h-6 w-32 bg-gray-200 rounded mb-4" />
                {[...Array(3)].map((_, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between border-b border-gray-300 pb-3 mt-2 items-center"
                  >
                    <div>
                      <div className="h-4 w-24 bg-gray-100 rounded mb-1" />
                      <div className="h-3 w-12 bg-gray-100 rounded" />
                    </div>
                    <div className="h-4 w-10 bg-gray-200 rounded" />
                  </div>
                ))}
              </div>
              {/* Share wishlist */}
              <div className="bg-white p-5 rounded-md border border-gray-300/70 flex flex-col space-y-3">
                <div className="h-6 w-40 bg-gray-200 rounded mb-2" />
                <div className="h-4 w-32 bg-gray-100 rounded mb-2" />
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-10 w-full bg-gray-200 rounded" />
                  <div className="h-10 w-full bg-gray-100 rounded" />
                </div>
                <div className="border border-gray-400 p-2 rounded-lg flex items-center relative h-[35px] mt-2">
                  <div className="h-4 w-40 bg-gray-100 rounded" />
                  <div className="h-8 w-16 bg-gray-200 rounded absolute top-[1px] right-[1px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
