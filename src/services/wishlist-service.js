import { apiClient } from "./api-client";

export async function addProductToWishlistApi(product_id) {
  try {
    const options = {
      method: "POST",
      url: "wishlist",
      data: {
        productId: product_id,
      },
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getWishlistProductsApi() {
  try {
    const options = {
      method: "GET",
      url: "wishlist",
    };

    const response = await apiClient.request(options);
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function deleteWishlistProductsApi(product_id) {
  try {
    const options = {
      method: "DELETE",
      url: `wishlist/${product_id}`,
    };

    const response = await apiClient.request(options);
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
}
