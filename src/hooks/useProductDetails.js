import { useQuery } from "@tanstack/react-query";
import { getProductDetailsById } from "../services/products-service";

export function useProductDetails(id) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["filteredProducts", id],
    queryFn: () => getProductDetailsById(id),
  });

  return {
    productDetails: data?.data.data || [],
    isLoading,
    error,
    isError,
  };
}
