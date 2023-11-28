import axios from "axios";

const baseURL = "https://api-sev.onrender.com";

export function loginService(data) {
  const response = axios.post(`${baseURL}/login`, data);
  return response;
}
