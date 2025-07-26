import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import { Link } from "react-router";
import FeaturedBrandCard from "../featured_brand_card/FeaturedBrandCard";
import { useBrands } from "../../hooks/useBrands";
import FeaturedBrandsSkeleton from "../../skeleton/FeaturedBrandsSkeleton";

export default function FeaturedBrands() {
  const { brands, isLoading } = useBrands({ limit: 3 });
  if (isLoading) return <FeaturedBrandsSkeleton />;

  return (
    <>
      <div className="">
        <h3 className="text-2xl font-bold">Featured brands</h3>
        <div className="grid lg:grid-cols-3  gap-x-10 gap-y-5 mt-5">
          {brands &&
            brands.map((brand) => (
              <div className="rounded-md" key={brand._id}>
                <FeaturedBrandCard brandInfo={brand} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
