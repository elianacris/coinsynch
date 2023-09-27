import axios, { AxiosError, AxiosResponse } from "axios";
import { getApiKey } from "src/domain/getEnvVarOrThrow";
import { logout } from "./authService";

export const instance = axios.create();

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response.status === 403) {
      logout();
      window.location.href = "/";
      return;
    }
    return error;
  }
);

export const client = () => {
  const defaultOptions = {
    headers: {
      "X-CoinAPI-Key": getApiKey(),
    },
  };

  return {
    get: (url: string, options = {}) =>
      instance.get(url, { ...defaultOptions, ...options }),
    post: (url: string, data, options = {}) =>
      instance.post(url, data, { ...defaultOptions, ...options }),
    put: (url: string, data, options = {}) =>
      instance.put(url, data, { ...defaultOptions, ...options }),
    patch: (url: string, data, options = {}) =>
      instance.patch(url, data, { ...defaultOptions, ...options }),
    delete: (url: string, options = {}) =>
      instance.delete(url, { ...defaultOptions, ...options }),
  };
};

export const downloadFile = (url: string, fileName: string) => {
  fetch(url, {
    method: "POST",
    headers: {
      "X-CoinAPI-Key": getApiKey(),
    },
  })
    .then((res) => res.blob())
    .then((res) => {
      const aElement = document.createElement("a");
      aElement.setAttribute("download", fileName);
      const href = URL.createObjectURL(res);
      aElement.href = href;
      aElement.setAttribute("target", "_blank");
      aElement.click();
      URL.revokeObjectURL(href);
    });
};
