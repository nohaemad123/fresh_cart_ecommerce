import React, { useEffect, useState } from "react";
import { getSubCategoryByCategoryApi } from "../../services/categories-service";
import { Link } from "react-router";
import Loading from "../loading/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ListCategoryCard({ categoryInfo }) {
  const { _id, name, image } = categoryInfo;
  // const [subCategories, setSubCategories] = useState(null);

  // async function getAllSubCategoriesByCategory() {
  //   try {
  //     setIsLoading(true);
  //     const response = await getSubCategoryByCategoryApi(_id);
  //     if (response.success) {
  //       setSubCategories(response.data.data);
  //     }
  //   } catch (error) {
  //     setIsError(true);
  //     setError(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }
  // useEffect(() => {
  //   getAllSubCategoriesByCategory();
  // }, {});

  return (
    <>
      <div className="bg-white  shadow-lg rounded-xl overflow-hidden p-5 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-12 mb-2 gap-x-10 ">
          <div className="md:col-span-3 relative">
            <Link
              to={`/search-products?category=${_id}&page=1&limit=9`}
              className="block"
            >
              <img src={image} className="h-60 mx-auto  object-cover" />
            </Link>
          </div>
          <div className="md:col-span-9 relative">
            <Link
              to={`/search-products?category=${_id}&page=1&limit=9`}
              className="block"
            >
              <h3 className=" font-semibold text-lg">{name}</h3>
            </Link>
            {/* {subCategories && subCategories.length > 0 && (
              <>
                <div className="flex flex-wrap gap-2">
                  {subCategories.map((subCategory) => (
                    <div
                      key={subCategory._id}
                      className="bg-primary-200 text-primary-600 font-medium px-3 py-1 rounded-md text-sm"
                    >
                      {subCategory.name}
                    </div>
                  ))}
                </div>
                <Link
                  to={`/search-products?category=${_id}&page=1&limit=9`}
                  className="w-fit px-5 py-2 mt-5 rounded-md cursor-pointer bg-primary-600 text-white text-sm inline-flex items-center"
                >
                  Read details{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                </Link>
              </>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
}
