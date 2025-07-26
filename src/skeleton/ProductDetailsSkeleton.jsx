import React from "react";
import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import ProductInfoSkeleton from "./ProductInfoSkeleton";
import ProductTabsSkeleton from "./productTabsSkeleton";
import RelatedProductsSkeleton from "./RelatedProductsSkeleton";

export default function ProductDetailsSkeleton() {
  return (
    <>
      <BreadCrumb />
      <div className="bg-mainColor py-5">
        <div className="container">
          <ProductInfoSkeleton />
          <ProductTabsSkeleton />
          <RelatedProductsSkeleton />
        </div>
      </div>
    </>
  );
}
