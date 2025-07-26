import { useQuery } from "@tanstack/react-query";
import { getOrderByIdApi } from "../services/orders-service";

export function useOrderDetails(id) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["order", id],
    queryFn: () => getOrderByIdApi(id),
  });

  console.log(data);

  return {
    order: data?.data.data || {},
    isLoading,
    error,
    isError,
  };
}
