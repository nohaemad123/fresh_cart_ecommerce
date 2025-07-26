import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductDetailsById } from "../../services/products-service";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import ProductRating from "../../components/product_rating/ProductRating";
import ReactImageGallery from "react-image-gallery";
import { calcDiscount } from "../../utils/calcDiscount.utils";
import ProductInfo from "../../components/product_info/ProductInfo";
import ProductTabs from "../../components/productTabs/ProductTabs";
import RelatedProducts from "../../components/related_products/RelatedProducts";
import { useProductDetails } from "../../hooks/useProductDetails";
import ViewedProducts from "../../components/viewed_products/viewedProducts";
import ProductDetailsSkeleton from "../../skeleton/ProductDetailsSkeleton";

export default function ProductDetails() {
  let { id } = useParams();
  // console.log(param);
  // let id = param.id;

  // const [isLoading, setIsLoading] = useState(true);

  const { productDetails, isLoading } = useProductDetails(id);

  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }

  return (
    <>
      <BreadCrumb
        secondLink={productDetails?.category?.name}
        thirdLink={productDetails?.title}
      />

      <div className="bg-mainColor py-5">
        <div className="container">
          <ProductInfo productDetails={productDetails} />

          <ProductTabs productDetails={productDetails} />

          <RelatedProducts productDetails={productDetails} />
        </div>
      </div>
      <ViewedProducts />
    </>
  );
}
