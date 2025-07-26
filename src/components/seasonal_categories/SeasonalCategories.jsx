import React from "react";
import CategoryCard from "../category_card/CategoryCard";
import { useCategories } from "../../hooks/useCategories";
import Loading from "../loading/Loading";
import SeasonalCategoriesSkeleton from "../../skeleton/SeasonalCategoriesSkeleton";

export default function SeasonalCategories() {
  const { categories, isLoading } = useCategories({ limit: 3 });

  if (isLoading) return <SeasonalCategoriesSkeleton />;

  return (
    <div className="py-10">
      <div className="container">
        <h3 className="text-3xl font-bold">Seasonal categories</h3>
        <div className="grid lg:grid-cols-3 gap-x-10 gap-y-5 mt-5">
          {categories &&
            categories.map((category) => (
              <div className="rounded-md" key={category._id}>
                <CategoryCard categoryInfo={category} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
