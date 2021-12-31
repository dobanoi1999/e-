import axiosClient from "./apiClient";

export const callApi = ({ url, method, params }) => {
  return axiosClient[method.toLowerCase()](url, { params });
};
