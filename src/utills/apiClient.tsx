import axios from "axios";

interface apiClientType {
  baseURL: string,
  withCredentials: boolean,
}

let rawBaseURL = import.meta.env.VITE_BASE_URL || "";
if (rawBaseURL.endsWith("/")) {
  rawBaseURL = rawBaseURL.slice(0, -1);
}

let apiClientObj: apiClientType = {
  baseURL: rawBaseURL,
  withCredentials: true,
};

const apiClient = axios.create(apiClientObj)
let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: any = null) => {
  failedQueue.forEach(promise => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(token);
    }
  });
  failedQueue = [];
};

apiClient.interceptors.response.use(
  response => response,
  async (error) => {
    const originalRequest = error.config;
    const url = originalRequest?.url || "";

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (url.startsWith("/auth/")) {
        return Promise.reject(error);
      }

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(() => apiClient(originalRequest))
          .catch(err => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        await apiClient.get("/auth/refresh-token");
        processQueue(null);
        return apiClient(originalRequest);
      } catch (err) {
        processQueue(err, null);
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient