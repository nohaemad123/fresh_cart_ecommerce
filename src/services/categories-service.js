import { apiClient } from "./api-client";

export async function getAllCategoriesApi() {
  try {
    const options = {
      method: "Get",
      url: "categories",
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
