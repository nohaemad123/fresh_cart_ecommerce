import React, { useState } from "react";
import { faGrip, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CategoriesSkeleton() {
  const [view, setView] = useState("grid");

  return (
    <>
      {/* Breadcrumb Skeleton */}
      <div className="container mt-6">
        <div className="h-6 w-48 bg-gray-200 rounded mb-6 animate-pulse" />
      </div>
      <div className="p-10 animate-pulse">
        <div className="container">
          <div className="flex flex-col space-y-4 lg:flex-row justify-between items-center">
            <div className="flex flex-col space-y-3">
              <div className="h-10 w-64 bg-gray-200 rounded" />
              <div className="h-5 w-80 bg-gray-100 rounded" />
            </div>
            <div className="flex flex-col space-y-4 lg:flex-row justify-between items-center">
              <div className="flex gap-x-5">
                <div className="h-6 w-24 bg-gray-200 rounded" />
                <div className="h-10 w-32 bg-gray-100 rounded" />
              </div>
              <div className="flex gap-x-5">
                <button
                  className={`w-[35px] h-[40px] bg-gray-200 text-lg rounded-md`}
                >
                  <FontAwesomeIcon icon={faGrip} />
                </button>
                <button
                  className={`w-[35px] h-[40px] bg-gray-200 text-lg rounded-md`}
                >
                  <FontAwesomeIcon icon={faList} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 bg-mainColor animate-pulse">
        <div className="container">
          {view === "grid" ? (
            <div className="grid lg:grid-cols-3 gap-x-10 gap-y-5">
              {[...Array(6)].map((_, idx) => (
                <div className="rounded-md" key={idx}>
                  <div className="bg-white p-6 rounded-md flex flex-col items-center space-y-4 shadow">
                    <div className="h-24 w-24 bg-gray-200 rounded-full" />
                    <div className="h-6 w-32 bg-gray-200 rounded" />
                    <div className="h-4 w-20 bg-gray-100 rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-5">
              {[...Array(6)].map((_, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-md flex items-center gap-6 p-4 mb-4 shadow"
                >
                  <div className="h-20 w-20 bg-gray-200 rounded-full" />
                  <div className="flex-1">
                    <div className="h-6 w-40 bg-gray-200 rounded mb-2" />
                    <div className="h-4 w-32 bg-gray-100 rounded" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Optionally, skeletons for subcategories, featured, seasonal, and newsletter */}
      <div className="container my-10">
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
