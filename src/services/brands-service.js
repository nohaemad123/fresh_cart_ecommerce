import { apiClient } from "./api-client";

export async function getAllBrandsApi({ limit } = {}) {
  try {
    const options = {
      method: "Get",
      url: `/brands?${limit ? `limit=${limit}` : ""}`,
    };
    const response = await apiClient.request(options);
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
}
