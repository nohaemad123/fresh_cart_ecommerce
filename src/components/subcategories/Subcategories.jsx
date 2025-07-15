import { useContext } from "react";
import { subcategoriesContext } from "../../context/subCategories.context";
import Loading from "../loading/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt } from "@fortawesome/free-solid-svg-icons";

export default function Subcategories() {
  const { subCategories, isSubCategoryLoading } =
    useContext(subcategoriesContext);

  if (isSubCategoryLoading) return <Loading />;

  return (
    <>
      <div className="py-10">
        <div className="container">
          <h3 className="text-3xl font-bold mb-5">Popular subcategories</h3>
          <div className="grid grid-cols-6 gap-5 ">
            {subCategories &&
              subCategories.map((subCategory) => (
                <div className="bg-mainColor p-5 rounded-md flex flex-col justify-center items-center space-y-4 h-40 w-full text-center">
                  <div className="rounded_icon">
                    <FontAwesomeIcon icon={faShirt} />
                  </div>
                  <h3 className="font-bold text-[18px] hover:text-primary-600 text-center leading-tight">
                    {subCategory.name}
                  </h3>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
