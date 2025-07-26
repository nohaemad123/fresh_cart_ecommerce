import { useQuery } from "@tanstack/react-query";
import { getCartProductsApi } from "../services/cart-service";
import { useContext } from "react";
import { authContext } from "../context/Auth.context";

export function useCart() {
  const { token } = useContext(authContext);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["cartProducts"],
    queryFn: () => getCartProductsApi(),
    enabled: !!token,
  });

  console.log(data);

  return {
    cartProducts: data?.data.data,
    numOfCartItems: data?.data.numOfCartItems,
    totalCartPrice: data?.data.data.totalCartPrice,
    isLoading,
    cartId: data?.data.data._id,
    isError,
    error,
  };
}
