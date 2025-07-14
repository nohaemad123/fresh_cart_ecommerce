import { apiClient } from "./api-client";

export async function getAllBrandsApi() {
  try {
    const options = {
      method: "Get",
      url: "brands",
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
