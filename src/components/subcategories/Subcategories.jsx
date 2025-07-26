import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt } from "@fortawesome/free-solid-svg-icons";
import { useSubCategories } from "../../hooks/useSubcategories";
import PopularSubcategoriesSkeleton from "../../skeleton/PopularSubCategoriesSkeleton";

export default function Subcategories() {
  const { subCategories, isLoading } = useSubCategories();

  if (isLoading) return <PopularSubcategoriesSkeleton />;

  return (
    <>
      <div className="py-10">
        <div className="container">
          <h3 className="text-3xl font-bold mb-5">Popular subcategories</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 ">
            {subCategories &&
              subCategories.map((subCategory) => (
                <div
                  key={subCategory._id}
                  className="bg-mainColor p-5 rounded-md flex flex-col justify-center items-center space-y-4 h-40 w-full text-center"
                >
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
