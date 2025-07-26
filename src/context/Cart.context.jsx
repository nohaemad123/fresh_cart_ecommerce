import { createContext, useContext, useEffect, useState } from "react";
import {
  addProductToCartApi,
  deleteCartProductsApi,
  getCartProductsApi,
  updateCountProductsApi,
} from "../services/cart-service";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { authContext } from "./Auth.context";
import { useCart } from "../hooks/useCart";
import { useQueryClient } from "@tanstack/react-query";

export const cartContext = createContext(null);

const MySwal = withReactContent(Swal);

export default function CartProvider({ children }) {
  const queryClient = useQueryClient();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(false);
  // const [cartProducts, setCartProducts] = useState(null);
  const { token } = useContext(authContext);
  const { cartProducts } = useCart();

  async function AddProductToCart(id) {
    if (token) {
      try {
        const response = await addProductToCartApi(id);
        if (response.success) {
          toast.success("the product added to cart");
          queryClient.invalidateQueries(["cartProducts"]);
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("You must login first");
    }
  }

  async function DeleteProductFromCart(id) {
    try {
      const result = await Swal.fire({
        title: "Are you sure want delete product from cart?",
        text: "if click on delete the product will removed",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#f00",
        cancelButtonColor: "#aaa",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        const response = await deleteCartProductsApi(id);
        if (response.success) {
          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted from cart successfully.",
            icon: "success",
          });
          queryClient.invalidateQueries(["cartProducts"]);

          console.log(response);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function updateProductCount({ id, count }) {
    try {
      setIsLoading(true);
      const response = await updateCountProductsApi(id, count);
      if (response.success) {
        setIsLoading(false);
        queryClient.invalidateQueries(["cartProducts"]);
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
      setError(error);
      setIsLoading(false);
    }
  }

  return (
    <cartContext.Provider
      value={{
        AddProductToCart,
        isLoading,
        error,
        isError,
        cartProducts,
        DeleteProductFromCart,
        updateProductCount,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
