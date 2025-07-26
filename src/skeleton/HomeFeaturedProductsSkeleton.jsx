import React from "react";
import ProductCardSkeleton from "./ProductCardSkeleton";

export default function HomeFeaturedProductsSkeleton() {
  return (
    <div className="py-10 animate-pulse">
      <div className="container">
        {/* Header skeleton */}
        <div className="h-8 w-48 bg-gray-200 rounded mb-8 mx-auto" />
        {/* Featured products skeleton grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, idx) => (
            <ProductCardSkeleton key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
