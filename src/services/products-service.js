import { apiClient } from "./api-client";

export async function getAllProductsApi({
  page,
  keyword,
  priceGreaterThan,
  priceLessThan,
  limit,
  sortedBy,
  category,
  brand,
} = {}) {
  try {
    const options = {
      method: "Get",
      url: `/products?${page ? `page=${page}` : ""}${
        keyword ? `&keyword=${keyword}` : ""
      }${priceGreaterThan ? `&price[gte]=${priceGreaterThan}` : ""}${
        priceLessThan ? `&price[lte]=${priceLessThan}` : ""
      }${sortedBy ? `&sorted=${sortedBy}` : ""}${
        category ? `&category[in]=${category}` : ""
      }${brand ? `&brand=${brand}` : ""}${limit ? `&limit=${limit}` : ""}`,
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getProductDetailsById(product_id) {
  try {
    const options = {
      method: "GET",
      url: `/products/${product_id}`,
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
