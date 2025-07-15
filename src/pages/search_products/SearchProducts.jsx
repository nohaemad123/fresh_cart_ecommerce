import React, { useContext, useEffect, useState } from "react";
import { categoriesContext } from "../../context/Categories.context";
import { useFormik } from "formik";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { brandsContext } from "../../context/Brands.context";
import ProductRating from "../../components/product_rating/ProductRating";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import { productsContext } from "../../context/Products.context";
import { useSearchParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faGrip,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../../components/product_card/ProductCard";
import Loading from "../../components/loading/Loading";
import ListProductCard from "../../components/list_product_card/ListProductCard";
import SidebarSearch from "../../components/sidebar_search/SidebarSearch";
import NoProducts from "../../components/no_products/NoProducts";

export default function SearchProducts() {
  const { categories } = useContext(categoriesContext);
  const { brands } = useContext(brandsContext);
  const { filteredProducts, getAllProductsFilter, isLoading, results } =
    useContext(productsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [view, setView] = useState("grid");
  console.log(results);
  const categoryName = categories?.length
    ? categories.find((c) => c._id === searchParams.get("category"))?.name
    : "";

  const brandName = brands?.length
    ? brands.find((b) => b._id === searchParams.get("brand"))?.name
    : "";

  console.log("products", filteredProducts);

  useEffect(() => {
    const query = Object.fromEntries(searchParams.entries());

    if (!query.page || !query.limit) {
      setSearchParams({
        ...query,
        page: query.page || 1,
        limit: query.limit || 9,
      });
      return;
    }

    getAllProductsFilter(query);
  }, [searchParams]);

  if (isLoading) return <Loading />;

  return (
    <>
      <BreadCrumb thirdLink={"Search products"} />
      <div className="bg-mainColor py-10">
        <div className="container">
          <h3 className="text-2xl font-bold flex">
            Search results for
            {searchParams.get("category") && (
              <>
                <p className="ms-2 me-2">with category:</p>{" "}
                <span className="text-primary-600">{categoryName}</span>
              </>
            )}{" "}
            {searchParams.get("brand") && (
              <>
                <p className="ms-2 me-2"> and with brand:</p>{" "}
                <span className="text-primary-600">{brandName}</span>
              </>
            )}
          </h3>
          <p className="text-gray-500 mt-2">
            We found {filteredProducts?.length || 0} products for you
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 mb-2 gap-x-10 mt-5">
            <div className="md:col-span-3 ">
              <SidebarSearch />
            </div>
            <div className="md:col-span-9 ">
              {!filteredProducts.length && searchParams.get("category") && (
                <NoProducts name={categoryName} />
              )}
              {!filteredProducts.length && searchParams.get("brand") && (
                <NoProducts name={brandName} />
              )}
              {filteredProducts.length > 0 && (
                <>
                  <div className="bg-white p-5 rounded-md">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-x-3">
                        <h3 className="text-lg font-medium">View:</h3>
                        <button
                          onClick={() => setView("grid")}
                          className={`${
                            view == "grid"
                              ? "bg-primary-600 text-white"
                              : "bg-gray-200"
                          } w-[35px] h-[40px] cursor-pointer bg-gray-200 text-lg rounded-md`}
                        >
                          <FontAwesomeIcon icon={faGrip} />
                        </button>
                        <button
                          onClick={() => setView("list")}
                          className={`${
                            view == "list"
                              ? "bg-primary-600 text-white"
                              : "bg-gray-200"
                          } w-[35px] h-[40px] cursor-pointer bg-gray-200 text-lg rounded-md`}
                        >
                          <FontAwesomeIcon icon={faList} />
                        </button>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <h3 className="text-lg font-medium">Sorted by:</h3>
                        <select className="form-control min-w-50">
                          <option>Relevance</option>
                          <option>Price</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {view == "grid" && (
                    <div className="grid grid-cols-3 gap-10 mt-10">
                      {filteredProducts &&
                        filteredProducts.map((product) => (
                          <ProductCard productInfo={product} />
                        ))}
                    </div>
                  )}

                  {view == "list" && (
                    <div className="mt-5">
                      {filteredProducts &&
                        filteredProducts.map((product) => (
                          <ListProductCard productInfo={product} />
                        ))}
                    </div>
                  )}

                  <div className="flex justify-center items-center mt-10">
                    <ul className="flex gap-x-3">
                      <li
                        onClick={() => {
                          const current = +searchParams.get("page") || 1;
                          if (current > 1) {
                            setSearchParams({
                              ...Object.fromEntries(searchParams.entries()),
                              page: current - 1,
                            });
                          }
                        }}
                        className="cursor-pointer font-semibold text-sm size-7 border border-gray-300 flex justify-center items-center text-gray-600"
                      >
                        <FontAwesomeIcon icon={faChevronLeft} />
                      </li>

                      {Number.isInteger(results?.numberOfPages) &&
                        results.numberOfPages > 0 &&
                        [...Array(results.numberOfPages).keys()].map((i) => {
                          const page = i + 1;
                          return (
                            <li
                              key={page}
                              onClick={() =>
                                setSearchParams({
                                  ...Object.fromEntries(searchParams.entries()),
                                  page,
                                })
                              }
                              className={`cursor-pointer font-semibold text-sm size-7 border border-gray-300 flex justify-center items-center ${
                                +searchParams.get("page") === page
                                  ? "bg-primary-600 text-white"
                                  : "text-gray-600"
                              }`}
                            >
                              {page}
                            </li>
                          );
                        })}

                      <li
                        onClick={() => {
                          const current = +searchParams.get("page") || 1;
                          if (current < results?.numberOfPages) {
                            setSearchParams({
                              ...Object.fromEntries(searchParams.entries()),
                              page: current + 1,
                            });
                          }
                        }}
                        className="cursor-pointer font-semibold text-sm size-7 border border-gray-300 flex justify-center items-center text-gray-600"
                      >
                        <FontAwesomeIcon icon={faChevronRight} />
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
