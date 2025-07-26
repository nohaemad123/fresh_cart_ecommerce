import axios from "axios";
import { api_config } from "../config";

export const apiClient = axios.create({
  baseURL: api_config.base_url,
  timeout: 3000,
});

apiClient.interceptors.request.use((config) => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  if (token) {
    config.headers.token = token;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    //response is ok
    return Promise.resolve({
      success: true,
      data: response.data,
      statusCode: response.status,
    });
  },
  (error) => {
    return Promise.reject({
      success: false,
      error: error,
      message: error.response.data.message,
    });
  }
);
