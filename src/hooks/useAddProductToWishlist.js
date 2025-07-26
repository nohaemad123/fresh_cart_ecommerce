import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authContext } from "../context/Auth.context";
import { toast } from "react-toastify";
import { addProductToCartApi } from "../services/cart-service";
import { useContext } from "react";
import { addProductToWishlistApi } from "../services/wishlist-service";

export function useAddProductToCart() {
  const queryClient = useQueryClient();
  const { token } = useContext(authContext);
  return useMutation({
    mutationFn: async (productId) => {
      if (!token) {
        toast.error("You must login first");
      }
      return addProductToWishlistApi(productId);
    },
    onSuccess: () => {
      toast.success("the product added to cart");
      queryClient.invalidateQueries(["wishlistProducts"]);
    },
  });
}
