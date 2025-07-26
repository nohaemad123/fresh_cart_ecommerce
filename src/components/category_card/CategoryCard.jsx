import React, { useEffect, useState } from "react";
import { getSubCategoryByCategoryApi } from "../../services/categories-service";
import { Link } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function CategoryCard({ categoryInfo }) {
  const { _id, name, image } = categoryInfo;

  // useEffect(() => {
  //   getAllSubCategoriesByCategory();
  // }, {});

  return (
    <>
      <Link to={`/search-products?category=${_id}&page=1&limit=9`}>
        <div className="shadow-md">
          <div
            className="relative rounded-md h-40"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
              <h3 className="text-white font-semibold text-lg">{name}</h3>
            </div>
          </div>
          {/* {subCategories && subCategories.length > 0 && (
            <div className="bg-white p-5">
              <div className="flex justify-between">
                <div className="flex flex-wrap gap-2 w-[90%]">
                  {subCategories.map((subCategory) => (
                    <div
                      key={subCategory._id}
                      className="bg-primary-200 text-primary-600 font-medium px-3 py-1 rounded-md text-sm"
                    >
                      {subCategory.name}
                    </div>
                  ))}
                </div>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-primary-600"
                />
              </div>
            </div>
          )} */}
        </div>
      </Link>
    </>
  );
}
