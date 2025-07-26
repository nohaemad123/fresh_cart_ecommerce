import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { deleteCartProductsApi } from "../services/cart-service";

export function useDeleteProductFromCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      const result = await Swal.fire({
        title: "Are you sure want delete product from cart?",
        text: "If you click delete, the product will be removed.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#f00",
        cancelButtonColor: "#aaa",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const response = await deleteCartProductsApi(id);
        if (response.success) {
          await Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted from cart successfully.",
            icon: "success",
          });
          return response;
        } else {
          throw new Error("Delete failed");
        }
      } else {
        // لو الـ user عمل Cancel نرجع null
        return null;
      }
    },

    onSuccess: (data) => {
      if (data) {
        queryClient.invalidateQueries(["cartProducts"]);
      }
    },

    onError: (error) => {
      console.error("❌ Delete Product Error:", error);
      Swal.fire({
        title: "Error",
        text: "There was an issue deleting the product. Try again!",
        icon: "error",
      });
    },
  });
}
