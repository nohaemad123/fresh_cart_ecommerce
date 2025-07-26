import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { getAllProductsApi } from "../../services/products-service";
import Loading from "../loading/Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../product_card/ProductCard";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useFilteredProducts } from "../../hooks/useFilteredProducts";
import RelatedProductsSkeleton from "../../skeleton/RelatedProductsSkeleton";

export default function RelatedProducts({ productDetails }) {
  const { category } = productDetails;
  console.log(category);
  // const [relatedProducts, setRelatedProducts] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  const { filteredProducts, isLoading } = useFilteredProducts({
    category: category._id,
  });
  // async function getAllProducts() {
  //   try {
  //     setIsLoading(true);

  //     const response = await getAllProductsApi({ category: category._id });
  //     if (response.success) {
  //       setIsLoading(false);
  //       setRelatedProducts(response.data.data);
  //     }
  //   } catch (error) {
  //     setIsLoading(false);
  //     setIsError(true);
  //   }
  // }

  // useEffect(() => {
  //   getAllProducts();
  // }, []);

  if (isLoading) {
    return <RelatedProductsSkeleton />;
  }

  return (
    <>
      <div className="my-10">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold">You may also like</h3>
          <div className="buttons flex gap-x-2">
            <button className="related_prev_btn bg-gray-200/40 cursor-pointer size-10 rounded-full flex flex-col text-center justify-center items-center">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className=" text-sm text-primary-600 "
              />
            </button>
            <button className="related_next_btn bg-gray-200/40 cursor-pointer size-10 rounded-full flex flex-col text-center justify-center items-center">
              <FontAwesomeIcon
                icon={faChevronRight}
                className=" text-sm text-primary-600 "
              />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          className="mt-5"
          loop={true}
          navigation={{
            nextEl: ".related_next_btn",
            prevEl: ".related_prev_btn",
          }}
          spaceBetween={20}
        >
          {filteredProducts.map((product) => {
            return (
              <SwiperSlide key={product._id}>
                <ProductCard productInfo={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
