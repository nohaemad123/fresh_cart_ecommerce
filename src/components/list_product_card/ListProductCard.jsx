import { Link } from "react-router";
import { calcDiscount } from "../../utils/calcDiscount.utils";
import ProductRating from "../product_rating/ProductRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faRotate,
  faHeart as solidHeart,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import {
  faEye,
  faHeart as regularHeart,
} from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { cartContext } from "../../context/Cart.context";
import { wishlistContext } from "../../context/Wishlist.context";
import { authContext } from "../../context/Auth.context";

export default function ListProductCard({ productInfo }) {
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
  const { AddProductToWishlist, wishlistProducts, DeleteWishlistFromCart } =
    useContext(wishlistContext);
  const { token } = useContext(authContext);

  var isExist = false;
  if (token) {
    isExist = wishlistProducts.find((product) => _id === product._id);
  }

  return (
    <>
      <div className="bg-white  shadow-lg rounded-xl overflow-hidden p-5 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-12 mb-2 gap-x-10 ">
          <div className="md:col-span-3 relative">
            <Link to={`/product-details/${_id}`} className="block">
              <img src={imageCover} className="h-60 mx-auto  object-cover" />
            </Link>
            {priceAfterDiscount && (
              <span className="bg-red-600 absolute top-3 left-3 text-white text-xs rounded-md px-2 py-1">
                -{calcDiscount({ price, priceAfterDiscount })}%
              </span>
            )}
          </div>
          <div className="md:col-span-9 ">
            <div className="flex flex-col space-y-3">
              <span className="text-sm text-gray-500">{category.name}</span>
              <Link to={`/product-details/${_id}`} className="">
                <h2 className=" font-semibold text-xl">{title}</h2>
              </Link>
              <div className="flex gap-x-2 text-sm text-gray-600">
                <ProductRating rating={ratingsAverage} /> {ratingsAverage} (
                {ratingsQuantity})
              </div>
              <div className="flex item-center gap-2">
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

              <div className=" bg-white  flex  items-center space-x-5 *:hover:bg-primary-600 *:hover:text-white *:transition-colors *:duration-500 *:cursor-pointer *:p-2 *:shadow-md ">
                {!isExist ? (
                  <button
                    onClick={() => {
                      AddProductToWishlist(_id);
                    }}
                  >
                    <FontAwesomeIcon icon={regularHeart} />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      DeleteWishlistFromCart(_id);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={solidHeart}
                      className="text-red-500"
                    />
                  </button>
                )}
                <FontAwesomeIcon icon={faRotate} />
                <Link to={`/product-details/${_id}`}>
                  <FontAwesomeIcon icon={faEye} />
                </Link>
              </div>
              <button
                onClick={() => {
                  AddProductToCart(_id);
                }}
                className="w-fit px-5 py-2 rounded-md cursor-pointer bg-primary-600 text-white text-lg inline-flex items-center"
              >
                <FontAwesomeIcon icon={faShoppingBag} className="me-2" /> Add to
                cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
