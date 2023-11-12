import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3000";

export function funcionarioLogado() {
  const response = axios.get(`${baseURL}/funcionario/logado`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}
