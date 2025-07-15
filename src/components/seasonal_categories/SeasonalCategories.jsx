import React, { useEffect, useState } from "react";
import { getAllCategoriesApi } from "../../services/categories-service";
import CategoryCard from "../category_card/CategoryCard";

export default function SeasonalCategories() {
  const [categories, setCategories] = useState(null);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(false);

  async function getAllCategories() {
    try {
      setIsCategoriesLoading(true);
      const response = await getAllCategoriesApi({ limit: 3 });
      if (response.success) {
        setCategories(response.data.data);
      }
    } catch (error) {
      setIsError(true);
      setError(error);
    } finally {
      setIsCategoriesLoading(false);
    }
  }

  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <>
      <div className="py-10">
        <div className="container">
          <h3 className="text-3xl font-bold">Seasonal categories</h3>
          <div className="grid grid-cols-3  gap-x-10 gap-y-5 mt-5">
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
