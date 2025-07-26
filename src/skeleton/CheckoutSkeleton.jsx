import React from "react";

export default function CheckoutSkeleton() {
  return (
    <div className="bg-mainColor py-10 animate-pulse">
      <div className="container m-auto">
        {/* Title */}
        <div className="h-8 w-40 bg-gray-300 rounded mb-5"></div>

        <div className="grid grid-cols-1 md:grid-cols-12 mb-2 gap-x-5 mt-5">
          {/* Left Column - Payment & Shipping */}
          <div className="md:col-span-8 space-y-10">
            {/* Payment Method */}
            <div className="bg-white p-5 rounded-lg shadow-sm space-y-5">
              <div className="h-6 w-52 bg-gray-300 rounded"></div>

              <div className="space-y-4">
                {[...Array(2)].map((_, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-300 rounded-md p-4 flex gap-4 items-center"
                  >
                    <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-32 bg-gray-300 rounded"></div>
                      <div className="h-3 w-40 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white p-5 rounded-lg shadow-sm space-y-5">
              <div className="h-6 w-52 bg-gray-300 rounded"></div>
              <div className="space-y-4">
                <div className="h-16 w-full bg-gray-200 rounded"></div>
                <div className="grid lg:grid-cols-2 gap-5">
                  <div className="h-12 bg-gray-200 rounded"></div>
                  <div className="h-12 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="md:col-span-4">
            <div className="bg-white p-5 rounded-md shadow-sm space-y-5 sticky top-10">
              <div className="h-6 w-40 bg-gray-300 rounded"></div>

              {/* Cart Items */}
              <div className="space-y-3">
                {[...Array(3)].map((_, idx) => (
                  <div key={idx} className="flex gap-3 items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-lg"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-32 bg-gray-300 rounded"></div>
                      <div className="h-3 w-24 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-3 border-t pt-3 border-gray-300">
                <div className="flex justify-between">
                  <div className="h-4 w-20 bg-gray-300 rounded"></div>
                  <div className="h-4 w-16 bg-gray-300 rounded"></div>
                </div>
                <div className="flex justify-between">
                  <div className="h-4 w-20 bg-gray-300 rounded"></div>
                  <div className="h-4 w-16 bg-gray-300 rounded"></div>
                </div>
                <div className="flex justify-between">
                  <div className="h-4 w-20 bg-gray-300 rounded"></div>
                  <div className="h-4 w-16 bg-gray-300 rounded"></div>
                </div>
              </div>

              {/* Buttons */}
              <div className="h-12 w-full bg-gray-300 rounded"></div>
              <div className="h-12 w-full bg-gray-200 rounded"></div>

              {/* Security */}
              <div className="h-4 w-32 bg-gray-300 rounded"></div>
              <div className="h-3 w-40 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
