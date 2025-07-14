import { Link } from "react-router";
import empty_cart from "../../assets/undraw_empty-cart_574u.svg";

export default function EmptyCart() {
  return (
    <>
      <div className="p-5 mt-5">
        <div className=" flex flex-col justify-center items-center space-y-5">
          <img src={empty_cart} alt="" className="w-80" />
          <h3 className="text-2xl text-primary-600 font-bold">
            Your cart is empty
          </h3>
          <p className="text-gray-500">
            To add products in cart, continue shopping
          </p>
          <Link
            to="/"
            className="py-2 px-3 border mb-5 bg-primary-600  text-lg text-white font-semibold text-center rounded-md"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    </>
  );
}
