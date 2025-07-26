import { useQuery } from "@tanstack/react-query";
import { getAllCategoriesApi } from "../services/categories-service";

export function useCategories(params = {}) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["categories", params],
    queryFn: () => getAllCategoriesApi(params),
  });

  return {
    categories: data?.data.data,
    isLoading,
    isError,
    error,
  };
}
