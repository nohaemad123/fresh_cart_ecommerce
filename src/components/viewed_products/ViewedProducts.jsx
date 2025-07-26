import { useContext } from "react";
import Loading from "../loading/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../product_card/ProductCard";
import { Navigation, Autoplay } from "swiper/modules";
import { useProduct } from "../../hooks/useProduct";
import ViewedProductsSkeleton from "../../skeleton/ViewedProductsSkeleton";

export default function ViewedProducts() {
  const { products, isLoading } = useProduct();

  if (isLoading) {
    return <ViewedProductsSkeleton />;
  }

  return (
    <>
      <div className="my-10">
        <div className="container">
          <div className="flex justify-between">
            <h3 className="text-2xl font-bold">You might like this</h3>
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
            modules={[Navigation, Autoplay]}
            slidesPerView={4}
            autoplay={{ delay: 4000 }}
            className="mt-5"
            loop={true}
            navigation={{
              pnextEl: ".related_next_btn",
              prevEl: ".related_prev_btn",
            }}
            spaceBetween={20}
          >
            {products.map((product) => {
              return (
                <SwiperSlide key={product._id}>
                  <ProductCard productInfo={product} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}
