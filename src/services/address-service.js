import { apiClient } from "./api-client";

export async function getAllAddressesApi() {
  try {
    const options = {
      method: "Get",
      url: `/addresses`,
    };
    const response = await apiClient.request(options);
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function addAddressApi(values) {
  try {
    const options = {
      method: "POST",
      url: "addresses",
      data: values,
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function deleteAddressApi(address_id) {
  try {
    const options = {
      method: "DELETE",
      url: `addresses/${address_id}`,
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
