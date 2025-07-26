import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router";

import { useCategories } from "../../hooks/useCategories";
import HomeCategoriesSkeleton from "../../skeleton/homeCategoriesSkeleton";

export default function HomeCategories() {
  const { categories, isLoading } = useCategories();

  if (isLoading) {
    return <HomeCategoriesSkeleton />;
  }

  return (
    <>
      <div className="py-10 bg-mainColor">
        <div className="container">
          <div className="flex flex-col space-y-2 lg:flex-row justify-between items-center text-center">
            <h2 className="text-2xl font-bold">Shop by category</h2>
            <Link
              to="/categories"
              className="flex items-center text-primary-600"
            >
              View all categories{" "}
              <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
            </Link>
          </div>
          <div className="grid grid-cols-2  lg:grid-cols-6 gap-5 mt-10">
            {categories &&
              categories.map((category) => (
                <Link
                  key={category._id}
                  to={`/search-products?category=${category._id}`}
                  className=" block w-full"
                >
                  <div
                    key={category._id}
                    className="bg-white shadow-sm hover:shadow-lg transition-shadow duration-500 py-3 px-5 rounded-lg flex flex-col items-center justify-center space-y-3"
                  >
                    <img
                      src={category.image}
                      alt=""
                      className="size-15 rounded-full object-cover"
                    />
                    <h4 className="text-center">{category.name}</h4>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
