import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3000";

export function cadLivroService(data) {
  const response = axios.post(`${baseURL}/livro`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function getLivrosService() {
  const response = axios.get(`${baseURL}/livro`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}
