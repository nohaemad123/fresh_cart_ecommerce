import {
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import OrderItem from "../../components/order_item/OrderItem";

import { useOrders } from "../../hooks/useOrders";
import OrdersSkeleton from "../../skeleton/OrdersSkeleton";

export default function Orders() {
  const { orders, isLoading } = useOrders();
  console.log("orders:", orders);
  if (isLoading) return <OrdersSkeleton />;
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between mb-5 items-center">
        <h3 className="text-xl font-bold">My orders</h3>
        <div className="flex flex-col lg:flex-row gap-x-5 mt-3">
          <select className="form-control min-w-30 bg-[#f3f4f6] px-3 rounded-md mb-3 lg:mb-0">
            <option>All orders </option>
          </select>
          <div className="relative flex justify-center">
            <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="form-control min-w-50 bg-[#f3f4f6] rounded-md"
              placeholder="Search orders ..."
            />
          </div>
        </div>
      </div>
      {orders?.map((order) => (
        <OrderItem orderInfo={order} key={order._id} />
      ))}

      <div className="flex justify-between items-center">
        <p>Showing 1-4 of 12 orders</p>
        <div>
          <ul className="flex gap-x-3">
            <li className="cursor-pointer font-semibold text-sm size-7 bg-gray-200/50 flex justify-center items-center text-gray-600">
              <FontAwesomeIcon icon={faChevronLeft} />
            </li>
            <li className="cursor-pointer font-semibold text-sm size-7 bg-primary-600 flex justify-center items-center text-white">
              1
            </li>
            <li className="cursor-pointer font-semibold text-sm size-7 bg-gray-200/50 flex justify-center items-center text-gray-600">
              2
            </li>
            <li className="cursor-pointer font-semibold text-sm size-7 bg-gray-200/50 flex justify-center items-center text-gray-600">
              3
            </li>
            <li className="cursor-pointer font-semibold text-sm size-7 bg-gray-200/50 flex justify-center items-center text-gray-600">
              <FontAwesomeIcon icon={faChevronRight} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
