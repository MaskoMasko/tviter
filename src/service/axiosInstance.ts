import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "~/constants";

const headers = {};
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  ...headers,
});

axiosInstance.interceptors.request.use(
  async function (config) {
    const token = await AsyncStorage.getItem("token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { axiosInstance };
