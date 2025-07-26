import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faRotateLeft, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

export default function OrderItem({ orderInfo }) {
  const { _id, cartItems, totalOrderPrice, shippingAddress } = orderInfo;
  return (
    <>
      <div className="border border-gray-300 rounded-lg mb-5">
        <div className="bg-mainColor p-3">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex  flex-col">
              <div className="flex gap-x-3">
                <h3>Order #{orderInfo?.id}</h3>
                <span
                  className={`${
                    orderInfo.isDelivered
                      ? "bg-green-100 text-green-600"
                      : "bg-blue-100 text-blue-600"
                  } px-2 py-1 rounded-full text-sm font-medium`}
                >
                  {orderInfo.isDelivered ? "Delivered" : "Processing"}
                </span>
              </div>
              <h4>
                Placed on{" "}
                {new Date(orderInfo?.createdAt).toLocaleDateString("en-us", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </h4>
            </div>
            <div className="flex  gap-x-2">
              <Link to="/" className="text-primary-600 font-medium">
                <FontAwesomeIcon icon={faRotateRight} className="me-1" />
                Reorder
              </Link>

              <Link
                to={`/account/order-details/${_id}`}
                className="text-gray-600 font-medium"
              >
                <FontAwesomeIcon icon={faEye} className="me-1" />
                View details
              </Link>
            </div>
          </div>
        </div>
        <div className="flex p-2 flex-col lg:flex-row justify-between gap-x-3">
          <div className="flex gap-x-3 border-r border-gray-300 pr-5 flex-wrap">
            {cartItems.map((item) => (
              <div className="relative rounded-md">
                <img
                  src={item.product.imageCover}
                  className="w-12 h-12 min-w-[50px] min-h-[50px] object-cover rounded-lg border border-gray-200 p-1"
                />
                <div className="absolute top-0 right-0 size-5 text-white bg-black text-xs rounded-tr-md rounded-bl-md flex justify-center items-center">
                  {item.count}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm text-gray-500">Items</h3>
            <span className="text-lg font-bold">
              {orderInfo.cartItems.reduce((acc, item) => acc + item.count, 0)}{" "}
              item
            </span>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm text-gray-500">Total amount</h3>
            <span className="text-lg font-bold">{totalOrderPrice} EGP</span>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm text-gray-500">Delivered to</h3>
            <span className="text-lg font-bold">
              {shippingAddress?.details}
            </span>
          </div>
          <div className="flex flex-col border-l border-gray-300 pl-5 space-y-3">
            <button
              type="submit"
              className="py-2 px-2 bg-primary-600 border-transparent cursor-pointer  text-sm font-semibold text-white text-center rounded-md"
            >
              Track order
            </button>
            <button className="py-2 px-2 border mb-5 border-primary-600  text-sm text-primary-600 font-semibold text-center rounded-md">
              Write review
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
