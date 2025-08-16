import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:3000/api"
      : "https://chatapp-server-production-b5ee.up.railway.app/api", // Railway backend URL
  withCredentials: true,
});
     