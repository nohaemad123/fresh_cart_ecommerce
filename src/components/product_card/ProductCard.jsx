import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { calcDiscount } from "../../utils/calcDiscount.utils";
import ProductRating from "../product_rating/ProductRating";
import { useContext } from "react";
import { cartContext } from "../../context/Cart.context";

export default function ProductCard({ productInfo }) {
  const {
    _id,
    imageCover,
    category,
    title,
    price,
    priceAfterDiscount,
    ratingsAverage,
    ratingsQuantity,
  } = productInfo;

  const { AddProductToCart } = useContext(cartContext);
  return (
    <>
      <div className="product_card bg-white relative  shadow-lg rounded-xl overflow-hidden">
        <div className="">
          <Link to={`/product-details/${_id}`} className="block">
            <img
              src={imageCover}
              alt=""
              className="h-60 mx-auto  object-cover"
            />
          </Link>
        </div>
        <div className="card_info  p-4 space-y-1 flex flex-col ">
          <span className="text-sm text-gray-500">{category.name}</span>
          <Link to={`/product-details/${_id}`} className="line-clamp-1">
            <h2 className=" font-semibold">{title}</h2>
          </Link>

          <div className="flex gap-x-2 text-sm text-gray-600">
            <ProductRating rating={ratingsAverage} /> {ratingsAverage} (
            {ratingsQuantity})
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              {priceAfterDiscount ? (
                <>
                  <span className="text-lg font-bold text-primary-600">
                    {priceAfterDiscount} EGP
                  </span>
                  <del className="text-gray-500">{price} EGP</del>
                </>
              ) : (
                <>
                  <span className="text-lg font-bold text-primary-600">
                    {price} EGP
                  </span>
                </>
              )}
            </div>
            <button
              onClick={() => {
                AddProductToCart(_id);
              }}
              className="size-9 rounded-full cursor-pointer bg-primary-600 text-white text-lg"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
        {priceAfterDiscount &&
          priceAfterDiscount < price &&
          calcDiscount({ price, priceAfterDiscount }) > 0 && (
            <span className="bg-red-600 absolute top-3 left-3 text-white text-xs rounded-md px-2 py-1">
              -{calcDiscount({ price, priceAfterDiscount })}%
            </span>
          )}

        <div className="absolute top-3 right-3 bg-white p-2 flex flex-col space-y-5 shadow-md *:hover:text-primary-600 *:transition-colors *:duration-500 *:cursor-pointer">
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faRotate} />
          <Link to={`/product-details/${_id}`}>
            <FontAwesomeIcon icon={faEye} />
          </Link>
        </div>
      </div>
    </>
  );
}
