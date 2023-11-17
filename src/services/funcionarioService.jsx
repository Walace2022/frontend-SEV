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

export function cadFuncionarioService(data) {
  delete data.comfirmSenha;
  const response = axios.post(`${baseURL}/funcionario`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}
