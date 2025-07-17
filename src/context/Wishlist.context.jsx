import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  addProductToWishlistApi,
  deleteWishlistProductsApi,
  getWishlistProductsApi,
} from "../services/wishlist-service";
import { createContext, useContext, useEffect, useState } from "react";
import { authContext } from "./Auth.context";

export const wishlistContext = createContext(null);

const MySwal = withReactContent(Swal);

export default function WishlistProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(false);
  const [wishlistProducts, setWishlistProducts] = useState(null);

  const { token } = useContext(authContext);
  async function AddProductToWishlist(id) {
    if (token) {
      try {
        const response = await addProductToWishlistApi(id);
        if (response.success) {
          toast.success("the product added to wishlist");
          getCartWishlist();
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("You must login first");
    }
  }

  async function getCartWishlist() {
    try {
      setIsLoading(true);
      const response = await getWishlistProductsApi();
      console.log(response);
      if (response.success) {
        setIsLoading(false);
        setWishlistProducts(response.data.data);
        console.log(response);
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
      setError(error);
      setIsLoading(false);
    }
  }

  async function DeleteWishlistFromCart(id) {
    try {
      const result = await Swal.fire({
        title: "Are you sure want delete product from wishlist?",
        text: "if click on delete the product will removed",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#f00",
        cancelButtonColor: "#aaa",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        const response = await deleteWishlistProductsApi(id);
        if (response.success) {
          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted from wishlist successfully.",
            icon: "success",
          });
          getCartWishlist();

          console.log(response);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCartWishlist();
  }, []);

  return (
    <wishlistContext.Provider
      value={{
        AddProductToWishlist,
        wishlistProducts,
        isError,
        error,
        DeleteWishlistFromCart,
        isLoading,
      }}
    >
      {children}
    </wishlistContext.Provider>
  );
}
