import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "https://api-sev.onrender.com";

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

export function getFuncionariosService() {
  const response = axios.get(`${baseURL}/funcionario`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function deleteFuncionariosService(id) {
  const response = axios.delete(`${baseURL}/funcionario/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}
