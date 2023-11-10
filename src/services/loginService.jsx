import axios from "axios";

const baseURL = "http://localhost:3000";

export function loginService(data) {
  const response = axios.post(`${baseURL}/login`, data);
  return response;
}
