import { apiClient } from "./api-client";

export async function addProductToCartApi(product_id) {
  try {
    const options = {
      method: "POST",
      url: "cart",
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

export async function getCartProductsApi() {
  try {
    const options = {
      method: "GET",
      url: "cart",
    };

    const response = await apiClient.request(options);
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function deleteCartProductsApi(product_id) {
  try {
    const options = {
      method: "DELETE",
      url: `cart/${product_id}`,
    };

    const response = await apiClient.request(options);
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function updateCountProductsApi(product_id, count) {
  console.log("count " + count);
  console.log("product id " + product_id);

  try {
    const options = {
      method: "PUT",
      url: `cart/${product_id}`,
      data: {
        count: count,
      },
    };

    const response = await apiClient.request(options);
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
}
