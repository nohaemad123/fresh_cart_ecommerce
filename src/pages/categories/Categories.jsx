import { faGrip, faList } from "@fortawesome/free-solid-svg-icons";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { categoriesContext } from "../../context/Categories.context";
import CategoryCard from "../../components/category_card/CategoryCard";
import Loading from "../../components/loading/Loading";

export default function Categories() {
  const [view, setView] = useState("grid");
  const { categories, isLoading } = useContext(categoriesContext);

  if (isLoading) return <Loading />;
  return (
    <>
      <BreadCrumb thirdLink={"categories"} />
      <div className="p-10">
        <div className="container">
          <div className="flex justify-between ">
            <div className="flex flex-col space-y-3">
              <h3 className="text-3xl font-bold">Shop by category</h3>
              <p className="text-gray-500">
                Browse our wide selection of fresh products by category
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <h3 className="text-lg font-medium">Sorted by:</h3>
              <select className="form-control min-w-40">
                <option>Featured</option>
              </select>
              <button
                onClick={() => setView("grid")}
                className={`${
                  view == "grid" ? "bg-primary-600 text-white" : "bg-gray-200"
                } w-[35px] h-[40px] cursor-pointer bg-gray-200 text-lg rounded-md`}
              >
                <FontAwesomeIcon icon={faGrip} />
              </button>
              <button
                onClick={() => setView("list")}
                className={`${
                  view == "list" ? "bg-primary-600 text-white" : "bg-gray-200"
                } w-[35px] h-[40px] cursor-pointer bg-gray-200 text-lg rounded-md`}
              >
                <FontAwesomeIcon icon={faList} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 bg-mainColor">
        <div className="container">
          <div className="grid grid-cols-3 gap-x-10 gap-y-5">
            {categories &&
              categories.map((category) => (
                <div className="rounded-md">
                  <CategoryCard categoryInfo={category} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
