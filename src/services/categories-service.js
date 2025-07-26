import { apiClient } from "./api-client";

export async function getAllCategoriesApi({ limit } = {}) {
  try {
    const options = {
      method: "Get",
      url: `/categories?${limit ? `limit=${limit}` : ""}`,
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getSubCategoryByCategoryApi(category_id) {
  try {
    const options = {
      method: "Get",
      url: `categories/${category_id}/subcategories`,
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getAllSubCategoriesApi() {
  try {
    const options = {
      method: "Get",
      url: `subcategories`,
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
