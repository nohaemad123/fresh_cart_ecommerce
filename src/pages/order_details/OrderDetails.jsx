import React, { useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";
import { getOrderByIdApi } from "../../services/orders-service";
import { Link, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { faMoneyBill1Wave } from "@fortawesome/free-solid-svg-icons";
import { useOrderDetails } from "../../hooks/useOrderDetails";
import OrderDetailsSkeleton from "../../skeleton/OrderDetailsSkeleton";

export default function OrderDetails() {
  let { id } = useParams();
  const { order, isLoading } = useOrderDetails(id);

  if (isLoading) return <OrderDetailsSkeleton />;
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col lg:flex-row gap-x-3 ">
          <h3 className="text-lg font-bold">order Id #{order.id}</h3>
          <span
            className={`${
              order.isDelivered
                ? "bg-green-100 text-green-600"
                : "bg-blue-100 text-blue-600"
            } px-2 py-1 rounded-full text-sm font-medium`}
          >
            {order.isDelivered ? "Delivered" : "Processing"}
          </span>
          <h4>
            Placed on{" "}
            {new Date(order?.createdAt).toLocaleDateString("en-us", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </h4>
        </div>
        <button className="bg-primary-600 rounded-md px-3 py-2 cursor-pointer text-white font-bold">
          Download invoice
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 mb-2 mt-5 gap-x-5">
        <div className="md:col-span-7 ">
          <div className=" p-5 rounded-md border border-gray-300/70 mb-3">
            <h3 className="text-lg font-bold">
              Order Items (
              {order.cartItems.reduce((acc, item) => acc + item.count, 0)} item)
            </h3>
            {order.cartItems.map((item) => (
              <div className="mt-3 ">
                <div className="flex gap-x-3 items-center">
                  <img
                    src={item.product.imageCover}
                    className="w-12 h-12 min-w-[50px] min-h-[50px] object-cover rounded-lg border border-gray-200 p-1"
                  />
                  <div className="flex flex-col space-y-1">
                    <h4 className="text-primary-500 font-bold">
                      {item.product.category.name}
                    </h4>

                    <h3 className="text-[16px] font-bold">
                      {item.product.title}
                    </h3>
                    <span className="text-gray-500">
                      Quantity: {item.count}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" p-5 rounded-md border border-gray-300/70 mb-3">
            <h3 className="text-lg font-medium">Order summary</h3>
            <div className="flex justify-between mb-3 mt-3">
              <h3 className="text-[18px] font-medium">subtotal</h3>
              <span>{order.totalOrderPrice} EGP</span>
            </div>
            <div className="flex justify-between mb-3">
              <h3 className="text-[18px] font-medium">Shipping price</h3>
              <span>{order.shippingPrice} EGP</span>
            </div>
            <div className="flex justify-between mb-3">
              <h3 className="text-[18px] font-medium">Tax price</h3>
              <span>{order.taxPrice} EGP</span>
            </div>
            <div className="flex justify-between mb-3">
              <h3 className="text-[18px] font-medium">Total</h3>
              <span>{order.totalOrderPrice} EGP</span>
            </div>
            <div className="flex justify-between mb-3">
              <h3 className="text-[18px] font-medium">Payment method</h3>
              <span>
                <FontAwesomeIcon
                  icon={faMoneyBill1Wave}
                  className="me-3 text-primary-600"
                />
                {order.paymentMethodType}
              </span>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 ">
          <div className=" p-5 rounded-md border border-gray-300/70">
            <h3 className="text-lg font-bold">User details</h3>
            <div className="flex justify-between mt-3">
              <h3 className="text-[18px] font-medium">Name</h3>
              <span className="text-sm">{order.user.name}</span>
            </div>
            <div className="flex justify-between mt-3">
              <h3 className="text-[18px] font-medium">Email</h3>
              <span className="text-sm">{order.user.email}</span>
            </div>
            <div className="flex justify-between mt-3">
              <h3 className="text-[18px] font-medium">phone number</h3>
              <span>{order.user.phone}</span>
            </div>
          </div>
          {order?.shippingAddress && (
            <div className=" p-5 rounded-md border border-gray-300/70 mt-3">
              <h3 className="text-lg font-bold">Shipping address</h3>
              <div className="flex justify-between mt-3">
                <h3 className="text-[18px] font-medium">City</h3>
                <span className="text-sm">{order.shippingAddress.city}</span>
              </div>
              <div className="flex justify-between mt-3">
                <h3 className="text-[18px] font-medium">Address</h3>
                <span className="text-sm">{order.shippingAddress.details}</span>
              </div>
              <div className="flex justify-between mt-3">
                <h3 className="text-[18px] font-medium">phone number</h3>
                <span>{order.shippingAddress.phone}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className=" p-5 rounded-md border border-gray-300/70">
        <h3 className="text-lg font-bold">Add notes</h3>
        <form className="mt-3">
          <textarea
            className="form-control w-full "
            placeholder="Add notes"
          ></textarea>
          <button
            type="submit"
            className="bg-primary-600 rounded-md px-3 py-2 cursor-pointer text-white font-bold mt-3"
          >
            Add note
          </button>
        </form>
      </div>
    </>
  );
}
