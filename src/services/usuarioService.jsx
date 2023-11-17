import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3000";

export function cadUsuarioService(data) {
  const response = axios.post(`${baseURL}/usuario`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}
