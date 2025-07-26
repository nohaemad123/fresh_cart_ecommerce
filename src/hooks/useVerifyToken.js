import { useQuery } from "@tanstack/react-query";
import { verifyToken } from "../services/auth-service";

export function useVerifyToken() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["user_data"],
    queryFn: verifyToken,
  });

  console.log(data);

  return {
    userData: data?.data.decoded.id,
    isLoading,
    isError,
    error,
  };
}
