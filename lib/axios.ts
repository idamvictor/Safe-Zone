// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "https://api.safezone.ng/api/v1",
//   // baseURL: "/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default axiosInstance;


import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
