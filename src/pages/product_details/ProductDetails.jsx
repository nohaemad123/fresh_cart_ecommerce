import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductDetailsById } from "../../services/products-service";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import Loading from "../../components/loading/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import ProductRating from "../../components/product_rating/ProductRating";
import ReactImageGallery from "react-image-gallery";
import { calcDiscount } from "../../utils/calcDiscount.utils";
import ProductInfo from "../../components/product_info/ProductInfo";
import ProductTabs from "../../components/productTabs/ProductTabs";
import RelatedProducts from "../../components/related_products/RelatedProducts";
import ViewedProducts from "../../components/viewed_products/viewedProducts";

export default function ProductDetails() {
  let { id } = useParams();
  // console.log(param);
  // let id = param.id;
  console.log(id);
  const [product, setProduct] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  async function getProductDetails() {
    try {
      setIsLoading(true);
      const response = await getProductDetailsById(id);
      if (response.success) {
        setIsLoading(false);
        setProduct(response.data.data);
        console.log(response);
      }
    } catch (error) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProductDetails();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <BreadCrumb
        secondLink={product?.category?.name}
        thirdLink={product?.title}
      />

      <div className="bg-mainColor py-5">
        <div className="container">
          <ProductInfo productDetails={product} />

          <ProductTabs productDetails={product} />

          <RelatedProducts productDetails={product} />
        </div>
      </div>
      <ViewedProducts />
    </>
  );
}
