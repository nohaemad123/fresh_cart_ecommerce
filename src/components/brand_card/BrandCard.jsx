import React from "react";
import { Link } from "react-router";

export default function BrandCard({ brandInfo }) {
  const { _id, name, image } = brandInfo;

  return (
    <>
      <Link to={`/search-products?brand=${_id}`}>
        <div className="bg-white rounded-lg shadow-md">
          <div className=" p-10">
            <img
              src={image}
              alt=""
              className=" h-[100px] m-auto border border-gray-300"
            />
          </div>
          <div className=" border-t border-gray-300 p-5 pt-2 flex flex-col space-y-2 ">
            <h3 className="text-lg font-bold">{name}</h3>
            <span
              to={`/search-products?brand=${_id}`}
              className="text-primary-600 font-medium text-end"
            >
              View
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
