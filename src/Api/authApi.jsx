import axiosInstance from "./axiosInstance";

export const registerRoute = (user) => {
  return axiosInstance.post("/api/auth/register", user);
};

export const loginRoute = (user) => {
  return axiosInstance.post("/api/auth/login", user, { withCredentials: true });
};
