import React from "react";
import ViewedProductsSkeleton from "./ViewedProductsSkeleton";

export default function CartSkeleton() {
  return (
    <>
      {/* Breadcrumb Skeleton */}
      <div className="container my-6 animate-pulse">
        <div className="h-6 w-40 bg-gray-200 rounded mb-6" />
      </div>
      <div className="bg-mainColor py-15 animate-pulse">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 mb-2 gap-x-5">
            {/* Cart Items Skeleton */}
            <div className="md:col-span-8 bg-white py-5 rounded-md border border-gray-300/70">
              <div className="border-b border-gray-300 pb-5 px-10">
                <div className="h-7 w-40 bg-gray-200 rounded mb-2" />
                <div className="h-4 w-32 bg-gray-100 rounded" />
              </div>
              <div className="py-5 pb-0 space-y-6 px-10">
                {[...Array(3)].map((_, idx) => (
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
            {/* Order Summary Skeleton */}
            <div className="md:col-span-4">
              <div className="bg-white p-5 w-full rounded-md border border-gray-300/70">
                <div className="h-7 w-32 bg-gray-200 rounded mb-5" />
                {[...Array(3)].map((_, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center mb-3"
                  >
                    <div className="h-5 w-24 bg-gray-100 rounded" />
                    <div className="h-5 w-16 bg-gray-200 rounded" />
                  </div>
                ))}
                <div className="flex justify-between items-center mb-3 border-t py-3 border-gray-300">
                  <div className="h-6 w-20 bg-gray-200 rounded" />
                  <div className="h-6 w-16 bg-gray-300 rounded" />
                </div>
                <div className="flex flex-col space-y-3 mt-4">
                  <div className="h-12 w-full bg-gray-300 rounded" />
                  <div className="h-12 w-full bg-gray-100 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ViewedProductsSkeleton />
    </>
  );
}
