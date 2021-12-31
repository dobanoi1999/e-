import { Storage } from "@utils/store";
import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.status === 200 && response.data)
      return response.data;
  },
  (err) => {
    if (err?.response?.status === 401) {
      Storage({ type: "clear" });
    }

    return {};
  }
);

export default axiosClient;
