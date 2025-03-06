import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://safezone-backend-5ye3.onrender.com/api/v1",
  // baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
