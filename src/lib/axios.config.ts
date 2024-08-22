import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
if (!baseURL) {
  throw new Error("Server is not set");
}

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("Error response:", error.response);
      if (error.response.status === 401) {
        console.error("Unauthorized");
      } else if (error.response.status === 500) {
        console.error("Internal server error");
      }
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error in setting up request:", error.message);
    }
    return Promise.reject(new Error(error));
  }
);
