import { apiClient } from "./api-client";

export async function getAllOrdersApi(user_id) {
  try {
    const options = {
      method: "GET",
      url: `orders/user/${user_id}`,
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getOrderByIdApi(order_id) {
  try {
    const options = {
      method: "GET",
      url: `orders/${order_id}`,
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
