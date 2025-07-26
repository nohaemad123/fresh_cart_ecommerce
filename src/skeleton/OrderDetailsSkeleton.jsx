import React from "react";

export default function OrderDetailsSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="flex flex-col lg:flex-row gap-x-3 space-y-2 lg:space-y-0">
          <div className="h-6 w-32 bg-gray-300 rounded"></div>
          <div className="h-5 w-20 bg-gray-300 rounded"></div>
          <div className="h-5 w-40 bg-gray-300 rounded"></div>
        </div>
        <div className="h-8 w-40 bg-gray-300 rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5">
        {/* Left Side */}
        <div className="md:col-span-7 space-y-4">
          {/* Order Items */}
          <div className="p-5 rounded-md border border-gray-300/70 space-y-4">
            <div className="h-6 w-40 bg-gray-300 rounded"></div>
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="flex gap-x-3 items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-lg"></div>
                <div className="flex flex-col space-y-2">
                  <div className="h-4 w-24 bg-gray-300 rounded"></div>
                  <div className="h-4 w-32 bg-gray-300 rounded"></div>
                  <div className="h-4 w-16 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="p-5 rounded-md border border-gray-300/70 space-y-4">
            <div className="h-6 w-32 bg-gray-300 rounded"></div>
            {[...Array(4)].map((_, idx) => (
              <div key={idx} className="flex justify-between">
                <div className="h-4 w-28 bg-gray-300 rounded"></div>
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
              </div>
            ))}
            <div className="flex justify-between">
              <div className="h-4 w-28 bg-gray-300 rounded"></div>
              <div className="h-4 w-24 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:col-span-5 space-y-4">
          {/* User Details */}
          <div className="p-5 rounded-md border border-gray-300/70 space-y-4">
            <div className="h-6 w-32 bg-gray-300 rounded"></div>
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="flex justify-between">
                <div className="h-4 w-24 bg-gray-300 rounded"></div>
                <div className="h-4 w-24 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>

          {/* Shipping Address */}
          <div className="p-5 rounded-md border border-gray-300/70 space-y-4">
            <div className="h-6 w-40 bg-gray-300 rounded"></div>
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="flex justify-between">
                <div className="h-4 w-24 bg-gray-300 rounded"></div>
                <div className="h-4 w-24 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Notes */}
      <div className="p-5 rounded-md border border-gray-300/70 space-y-3">
        <div className="h-6 w-32 bg-gray-300 rounded"></div>
        <div className="h-20 w-full bg-gray-200 rounded"></div>
        <div className="h-8 w-32 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}
