import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCountProductsApi } from "../services/cart-service";

export function useUpdateProductCount() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, count }) => {
      console.log("🔄 MUTATION FN CALLED with:", { id, count });
      const res = await updateCountProductsApi(id, count);
      console.log("✅ API RESPONSE:", res);
      return res;
    },

    onMutate: async (newData) => {
      console.log("⚡ onMutate triggered:", newData);

      await queryClient.cancelQueries(["cartProducts"]);

      const previousData = queryClient.getQueryData(["cartProducts"]);
      console.log("Previous cart data:", previousData);

      // Optimistic Update
      queryClient.setQueryData(["cartProducts"], (old) => {
        if (!old || !old.products) return old;

        return {
          ...old,
          products: old.products.map((p) =>
            p.product._id === newData.id ? { ...p, count: newData.count } : p
          ),
        };
      });

      return { previousData };
    },

    onError: (err, newData, context) => {
      console.error("🚨 onError triggered:", err);
      if (context?.previousData) {
        queryClient.setQueryData(["cartProducts"], context.previousData);
      }
    },

    onSettled: () => {
      console.log("🔄 onSettled triggered, refetching cart...");
      queryClient.invalidateQueries(["cartProducts"]);
    },
  });
}
