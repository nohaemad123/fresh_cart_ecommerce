import { useQuery } from "@tanstack/react-query";
import { getCartProductsApi } from "../services/cart-service";
import { useContext } from "react";
import { authContext } from "../context/Auth.context";
import { getWishlistProductsApi } from "../services/wishlist-service";

export function useWishlist() {
  const { token } = useContext(authContext);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["wishlistProducts"],
    queryFn: getWishlistProductsApi,
    enabled: !!token,
  });

  console.log(data);

  return {
    wishlistProducts: data?.data.data,
    isLoading,
    isError,
    error,
  };
}
