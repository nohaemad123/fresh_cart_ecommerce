import { useQuery } from "@tanstack/react-query";
import { getAllBrandsApi } from "../services/brands-service";

export function useBrands(params = {}) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["brands", params],
    queryFn: () => getAllBrandsApi(params),
  });

  return {
    brands: data?.data.data,
    isLoading,
    isError,
    error,
  };
}
