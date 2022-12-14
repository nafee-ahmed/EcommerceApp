import axios from "axios";

export const backendLink = "http://localhost:3001/api";

export const ax = axios.create({
  baseURL: backendLink,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
