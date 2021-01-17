import axios from "axios";

import { getAccessToken } from "./storage";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  async ($config) => {
    const token = await getAccessToken();
    if (token) {
      $config.headers.Authorization = `Bearer ${token}`;
    }
    $config.headers["Content-Type"] = "application/json";
    $config.headers.Accept = "application/json";
    return $config;
  },
  (error) => {
    Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(
    error.response ? error.response.data.errors : error,
  ),
);
export default axiosInstance;
