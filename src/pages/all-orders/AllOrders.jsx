import React from "react";
import Orders from "../orders/Orders";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";

export default function AllOrders() {
  return (
    <>
      <BreadCrumb thirdLink={"All orders"} bg_gray={"bg-mainColor"} />
      <div className=" py-10">
        <div className="container ">
          <Orders />
        </div>
      </div>
    </>
  );
}
