import { Link } from "react-router";
import image_slider from "../../assets/slider-image-1.jpg";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxArchive,
  faHeart,
  faLocationDot,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { cartContext } from "../../context/Cart.context";
import { wishlistContext } from "../../context/Wishlist.context";
import { useCart } from "../../hooks/useCart";
import { useWishlist } from "../../hooks/useWishlist";
import { useOrders } from "../../hooks/useOrders";
import { useAddresses } from "../../hooks/useAddresses";
import DashboardSkeleton from "../../skeleton/DashboardSkeleton";

export default function Dashboard() {
  const { orders } = useOrders();
  const { cartProducts, isLoading } = useCart();
  const { wishlistProducts } = useWishlist();
  const { addresses } = useAddresses();

  if (isLoading) return <DashboardSkeleton />;
  return (
    <>
      <div
        style={{
          backgroundImage: `url('${image_slider}')`,
          backgroundSize: "cover",
          width: "100%",
          backgroundPosition: "center center",
        }}
        className="rounded-lg"
      >
        <div className="overlay rounded-lg py-10">
          <div className="container flex flex-col space-y-4">
            <h2 className="text-2xl font-bold">Welcome back! FreshCart</h2>
            <p className="text-lg">
              Get 20% off on your first order with code FRESH20
            </p>
            <div className="flex gap-4">
              <Link
                to="/"
                className=" py-2 px-5 bg-primary-600 border-transparent cursor-pointer  text-lg font-semibold text-white text-center rounded-md"
              >
                Shop now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
        <div className="bg-primary-100 p-5 rounded-lg">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold">My orders</h3>
            <FontAwesomeIcon
              icon={faBoxArchive}
              className="text-primary-600 text-2xl"
            />
          </div>
          <span className="text-[18px]"></span>
          {orders?.length ? orders?.length : 0}
        </div>
        <div className="bg-red-100 p-5 rounded-lg">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold">My Cart</h3>
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-red-600 text-2xl"
            />
          </div>
          <span className="text-[18px]"></span>{" "}
          {cartProducts?.products?.length ? cartProducts?.products?.length : 0}
        </div>
        <div className="bg-blue-100 p-5 rounded-lg">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold">My Wishlist</h3>
            <FontAwesomeIcon
              icon={faHeart}
              className="text-blue-600 text-2xl"
            />
          </div>
          <span className="text-[18px]"></span>
          {wishlistProducts?.length ? wishlistProducts?.length : 0}
        </div>
        <div className="bg-yellow-100 p-5 rounded-lg">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold">My addresses</h3>
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-yellow-600 text-2xl"
            />
          </div>
          <span className="text-[18px]"></span>{" "}
          {addresses?.length ? addresses?.length : 0}
        </div>
      </div>
    </>
  );
}
