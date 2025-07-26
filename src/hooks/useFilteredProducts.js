import { useQuery } from "@tanstack/react-query";
import { getAllProductsApi } from "../services/products-service";

export function useFilteredProducts(params) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["filteredProducts", params],
    queryFn: () => getAllProductsApi(params),
    enabled: !!params,
  });

  return {
    filteredProducts: data?.data.data || [],
    isLoading,
    results: data?.data?.metadata || {},
    error,
    isError,
  };
}
