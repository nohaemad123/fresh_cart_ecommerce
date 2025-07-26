import { useQuery } from "@tanstack/react-query";
import { getAllProductsApi } from "../services/products-service";

export function useProduct() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProductsApi,
  });

  return {
    products: data?.data.data,
    isLoading,
    error,
    isError,
    filteredProducts: data?.data.data,
  };
}
