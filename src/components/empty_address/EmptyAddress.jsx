import React from "react";
import empty_address from "../../assets/undraw_delivery-address_409g.svg";

export default function EmptyAddress() {
  return (
    <>
      <div className="mt-5 flex flex-col justify-center items-center space-y-5">
        <img src={empty_address} alt="" className="w-80" />
        <h3 className="text-2xl text-primary-600 font-bold">
          Don't have addresses
        </h3>
        <p className="text-gray-500">
          To add address, please click on add new address button
        </p>
      </div>
    </>
  );
}
