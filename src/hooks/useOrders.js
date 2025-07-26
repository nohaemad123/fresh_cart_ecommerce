import { useContext } from "react";
import { authContext } from "../context/Auth.context";
import { useQuery } from "@tanstack/react-query";
import { getAllOrdersApi } from "../services/orders-service";
import { useVerifyToken } from "./useVerifyToken";

export function useOrders() {
  const { token } = useContext(authContext);
  const { userData: userId, isLoading: isVerifying } = useVerifyToken();

  console.log("userId: ", userId);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["orders", userId],
    queryFn: () => getAllOrdersApi(userId),
    enabled: !!token && !!userId && !isVerifying, // نشغل الكويري لما نتاكد ان userId موجود
  });

  console.log(data);

  return {
    orders: data?.data || [],
    isLoading: isLoading || isVerifying, // ندمج loading بتاع التوكن مع كويري
    isError,
    error,
  };
}
