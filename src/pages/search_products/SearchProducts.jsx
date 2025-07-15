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
import { faGrip, faList } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../../components/product_card/ProductCard";
import Loading from "../../components/loading/Loading";
import ListProductCard from "../../components/list_product_card/ListProductCard";

export default function SearchProducts() {
  const { categories } = useContext(categoriesContext);
  const { brands } = useContext(brandsContext);
  const { products, getAllProductsFilter, isLoading } =
    useContext(productsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [view, setView] = useState("grid");

  const categoryName = categories?.length
    ? categories.find((c) => c._id === searchParams.get("category"))?.name
    : "";

  const brandName = brands?.length
    ? brands.find((b) => b._id === searchParams.get("brand"))?.name
    : "";

  console.log("products", products);

  useEffect(() => {
    const hasParams = searchParams.get("page") && searchParams.get("limit");

    if (!hasParams) {
      setSearchParams({ page: 1, limit: 9 });
      return;
    }

    const query = Object.fromEntries(searchParams.entries());
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
            We found {products?.length} products for you
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 mb-2 gap-x-10 mt-5">
            <div className="md:col-span-3 ">
              <div className="bg-white p-5 rounded-md">
                <form>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Categories</h3>
                    {categories &&
                      categories.map((cat, index) => (
                        <div key={index} className="flex flex-col gap-y-4">
                          <label className="flex items-center space-x-2 mb-2 text-gray-700">
                            <input
                              type="checkbox"
                              className="form-checkbox h-4 w-4 text-primary-600"
                            />
                            <span className="text-md">{cat.name}</span>
                          </label>
                        </div>
                      ))}
                  </div>

                  <div className="mt-2 border-t border-gray-300 pt-2">
                    <h3 className="text-lg font-semibold mb-2">Price range</h3>

                    <Slider
                      range
                      min={5}
                      max={75}
                      allowCross={false}
                      trackStyle={[{ backgroundColor: "#16a34a", height: 6 }]}
                      handleStyle={[
                        {
                          borderColor: "#aaa",
                          height: 18,
                          width: 18,
                          opacity: 1,
                        },
                        {
                          borderColor: "#aaa",
                          height: 18,
                          width: 18,
                          opacity: 1,
                        },
                      ]}
                      railStyle={{ backgroundColor: "#e5e7eb", height: 6 }}
                    />
                    <div className="flex items-center justify-between text-sm text-gray-700 mt-2">
                      <span className="border border-gray-400 px-3 py-1 rounded-md">
                        5 EGP
                      </span>
                      <span>to</span>
                      <span className="border border-gray-400 px-3 py-1 rounded-md">
                        75 EGP
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 border-t border-gray-300 pt-2">
                    <h3 className="text-lg font-semibold mb-2">Brands</h3>
                    {brands &&
                      brands.map((brand, index) => (
                        <div key={index} className="flex flex-col gap-y-4">
                          <label className="flex items-center space-x-2 mb-2 text-gray-700">
                            <input
                              type="checkbox"
                              className="form-checkbox h-4 w-4 text-primary-600"
                            />
                            <span className="text-md">{brand.name}</span>
                          </label>
                        </div>
                      ))}
                  </div>
                  <div className="mt-2 border-t border-gray-300 pt-2">
                    <h3 className="text-lg font-semibold mb-2">Ratings</h3>

                    <label className="flex items-center space-x-2 mb-2 text-gray-700">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-primary-600"
                      />
                      <span className="text-md flex  gap-x-2">
                        <ProductRating rating={5} /> (42)
                      </span>
                    </label>
                    <label className="flex items-center space-x-2 mb-2 text-gray-700">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-primary-600"
                      />
                      <span className="text-md flex  gap-x-2">
                        <ProductRating rating={5} /> (42)
                      </span>
                    </label>
                    <label className="flex items-center space-x-2 mb-2 text-gray-700">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-primary-600"
                      />
                      <span className="text-md flex  gap-x-2">
                        <ProductRating rating={5} /> (42)
                      </span>
                    </label>
                  </div>
                  <div className="mt-2 border-t border-gray-300 pt-2">
                    <h3 className="text-lg font-semibold mb-2">Availability</h3>

                    <label className="flex items-center space-x-2 mb-2 text-gray-700">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-primary-600"
                      />
                      <span className="text-md flex  gap-x-2">
                        In stock (42)
                      </span>
                    </label>
                    <label className="flex items-center space-x-2 mb-2 text-gray-700">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-primary-600"
                      />
                      <span className="text-md flex  gap-x-2">
                        Out of stock (42)
                      </span>
                    </label>
                  </div>
                  <div className="mt-2 border-t border-gray-300 pt-2">
                    <h3 className="text-lg font-semibold mb-2">
                      Dietary preferences{" "}
                    </h3>

                    <label className="flex items-center space-x-2 mb-2 text-gray-700">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-primary-600"
                      />
                      <span className="text-md flex  gap-x-2">
                        100% organic (42)
                      </span>
                    </label>
                    <label className="flex items-center space-x-2 mb-2 text-gray-700">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-primary-600"
                      />
                      <span className="text-md flex  gap-x-2">Vegan (42)</span>
                    </label>
                    <label className="flex items-center space-x-2 mb-2 text-gray-700">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-primary-600"
                      />
                      <span className="text-md flex  gap-x-2">
                        Gluten-free (42)
                      </span>
                    </label>
                    <label className="flex items-center space-x-2 mb-2 text-gray-700">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-primary-600"
                      />
                      <span className="text-md flex  gap-x-2">
                        Non-GMO (42)
                      </span>
                    </label>
                  </div>
                  <div className="grid grid-cols-2 gap-x-3">
                    <button
                      type="submit"
                      className="py-2 px-3 bg-primary-600 border-transparent cursor-pointer  text-sm font-semibold text-white text-center rounded-md"
                    >
                      Apply filters
                    </button>
                    <button className="py-2 px-3 border  border-primary-600  text-sm text-primary-600 font-semibold text-center rounded-md">
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="md:col-span-9 ">
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
                  {products &&
                    products.map((product) => (
                      <ProductCard productInfo={product} />
                    ))}
                </div>
              )}

              {view == "list" && (
                <div className="mt-5">
                  {products &&
                    products.map((product) => (
                      <ListProductCard productInfo={product} />
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
