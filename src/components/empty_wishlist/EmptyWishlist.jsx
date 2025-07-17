import { Link } from "react-router";
import empty_wishlist from "../../assets/c8a48e3c-267e-449b-8e3f-2ffd9a3be408.png";

export default function EmptyWishlist() {
  return (
    <>
      <div className="p-5 mt-5">
        <div className=" flex flex-col justify-center items-center space-y-2">
          <img src={empty_wishlist} alt="" className="w-100" />

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
