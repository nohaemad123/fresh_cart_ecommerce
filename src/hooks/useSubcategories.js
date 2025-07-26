import { useQuery } from "@tanstack/react-query";
import { getAllSubCategoriesApi } from "../services/categories-service";

export function useSubCategories() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["subCategories"],
    queryFn: getAllSubCategoriesApi,
  });
  return {
    subCategories: data?.data.data,
    isLoading,
    error,
    isError,
  };
}
